function CalculateTraderGain(firstMarket, secondMarket, traderTemplate, trader)
{
  let cmpMarket1 = QueryMiragedInterface(firstMarket, IID_Market);
  let cmpMarket2 = QueryMiragedInterface(secondMarket, IID_Market);
  if (!cmpMarket1 || !cmpMarket2)
    return null;

  let cmpMarket1Player = QueryOwnerInterface(firstMarket);
  let cmpMarket2Player = QueryOwnerInterface(secondMarket);
  if (!cmpMarket1Player || !cmpMarket2Player)
    return null;

  let cmpFirstMarketPosition = Engine.QueryInterface(firstMarket, IID_Position);
  let cmpSecondMarketPosition = Engine.QueryInterface(secondMarket, IID_Position);
  if (!cmpFirstMarketPosition || !cmpFirstMarketPosition.IsInWorld() ||
     !cmpSecondMarketPosition || !cmpSecondMarketPosition.IsInWorld())
    return null;
  let firstMarketPosition = cmpFirstMarketPosition.GetPosition2D();
  let secondMarketPosition = cmpSecondMarketPosition.GetPosition2D();

  let gainMultiplier;
  if (trader)
  {
    let cmpTrader = Engine.QueryInterface(trader, IID_Trader);
    if (!cmpTrader)
      return null;
    gainMultiplier = cmpTrader.GetTraderGainMultiplier();
  }
  else  //called from the gui, modifications already applied
  {
    if (!traderTemplate || !traderTemplate.GainMultiplier)
      return null;
    gainMultiplier = traderTemplate.GainMultiplier;
  }

  let gain = {};

  // Calculate ordinary Euclidean distance between markets, normalized to 100 m.
  // We don't use pathfinder, because ordinary distance looks more fair.
  let Ndistance = firstMarketPosition.distanceTo(secondMarketPosition)/100;
  // Also calculate the square root of its cube
  let NdistanceP = Math.pow(Ndistance, 1.5);
  // We calculate trade gain factor as a sum of these two values;
  // this will encourage long distance trade with remote markets
  // and simultaneously keep short distance trade a reliable form of income
  gain.traderGain = gainMultiplier * (Ndistance + NdistanceP);
  // Comparison of the above vs previous (distanceSquare/10000):
  // distance :  trade gain factor  |  trade income factor (i.e. gain/distance)
  //     10 m :    0.13 vs     0.01 | 0.013 vs 0.001
  //     30 m :    0.46 vs     0.09 | 0.015 vs 0.003
  //    100 m :    2.0  vs     1    | 0.020 vs 0.01
  //    300 m :    8.2  vs     9    | 0.027 vs 0.03
  //   1000 m :   42    vs   100    | 0.042 vs 0.1
  //   3000 m :  194    vs   900    | 0.065 vs 0.3
  //  10000 m : 1100    vs 10000    | 0.11  vs 1

  gain.market1Owner = cmpMarket1Player.GetPlayerID();
  gain.market2Owner = cmpMarket2Player.GetPlayerID();
  // If trader undefined, the trader owner is supposed to be the same as the first market
  let cmpPlayer = trader ? QueryOwnerInterface(trader) : cmpMarket1Player;
  if (!cmpPlayer)
    return null;
  gain.traderOwner = cmpPlayer.GetPlayerID();
  // Add potential player trade multipliers
  let playerBonus = cmpPlayer.GetTradeRateMultiplier();
  // If markets belong to different players, add gain from international trading
  if (gain.market1Owner != gain.market2Owner)
  {
    let market1PlayerBonus = cmpMarket1Player.GetTradeRateMultiplier();
    let market2PlayerBonus = cmpMarket2Player.GetTradeRateMultiplier();
    let internationalBonus1 = cmpMarket1.GetInternationalBonus();
    let internationalBonus2 = cmpMarket2.GetInternationalBonus();
    gain.market1Gain = Math.round(gain.traderGain * internationalBonus1 * market1PlayerBonus);
    gain.market2Gain = Math.round(gain.traderGain * internationalBonus2 * market2PlayerBonus);
  }
  gain.traderGain = Math.round(gain.traderGain * playerBonus);

  return gain;
}

Engine.RegisterGlobal("CalculateTraderGain", CalculateTraderGain);
