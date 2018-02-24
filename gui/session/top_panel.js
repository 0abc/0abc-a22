/**
 * Sets civ icon for the currently viewed player.
 * Hides most gui objects for observers.
 */
function updateTopPanel()
{
  let isPlayer = g_ViewedPlayer > 0;

  let civIcon = Engine.GetGUIObjectByName("civIcon");
  civIcon.hidden = !isPlayer;
  if (isPlayer)
  {
    civIcon.sprite = "stretched:" + g_CivData[g_Players[g_ViewedPlayer].civ].Emblem;
    Engine.GetGUIObjectByName("civIconOverlay").tooltip = sprintf(translate("%(civ)s - Structure Tree"), {
      "civ": g_CivData[g_Players[g_ViewedPlayer].civ].Name
    });
  }

  Engine.GetGUIObjectByName("optionFollowPlayer").hidden = !g_IsObserver || !isPlayer;

  let viewPlayer = Engine.GetGUIObjectByName("viewPlayer");
  viewPlayer.hidden = !g_IsObserver && !g_DevSettings.changePerspective;

  let followPlayerLabel = Engine.GetGUIObjectByName("followPlayerLabel");
  followPlayerLabel.hidden = Engine.GetTextWidth(followPlayerLabel.font, followPlayerLabel.caption + "  ") +
    followPlayerLabel.getComputedSize().left > viewPlayer.getComputedSize().left;

  let resCodes = g_ResourceData.GetCodes();
  let r = 0;
  for (let res of resCodes)
  {
    if (!Engine.GetGUIObjectByName("resource["+r+"]"))
    {
      warn("Current GUI limits prevent displaying more than " + r + " resources in the top panel!");
      break;
    }
    Engine.GetGUIObjectByName("resource["+r+"]_icon").sprite = "stretched:session/icons/resources/" + res + ".png";
    Engine.GetGUIObjectByName("resource["+r+"]").hidden = !isPlayer;
    ++r;
  }
  verticallySpaceObjects("resourceCounts", 5);
  hideRemaining("resourceCounts", r);

  let resPop = Engine.GetGUIObjectByName("population");
  let resPopSize = resPop.size;

  Engine.GetGUIObjectByName("population").hidden = !isPlayer;
  Engine.GetGUIObjectByName("diplomacyButton1").hidden = !isPlayer;
  Engine.GetGUIObjectByName("tradeButton1").hidden = !isPlayer;
  Engine.GetGUIObjectByName("observerText").hidden = isPlayer;

  let alphaLabel = Engine.GetGUIObjectByName("alphaLabel");
  alphaLabel.hidden = isPlayer && !viewPlayer.hidden;
  alphaLabel.size = isPlayer ? "108 0 50%-52 100%" : "108 0 50%-52 100%";

  Engine.GetGUIObjectByName("pauseButton").enabled = !g_IsObserver || !g_IsNetworked || g_IsController;
  Engine.GetGUIObjectByName("menuResignButton").enabled = !g_IsObserver;
}

