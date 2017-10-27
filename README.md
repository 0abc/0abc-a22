# 0abc
*0 A.D. is Actually Before Christ* (a modification of “0 A.D. Empires Ascendant”, version 0.0.22 “Alpha XXII: Venustas”)

## Instructions
* Download the zip or `git clone` this repository (`https://github.com/0abc/mounted.git`).
* Place it in your `/0ad/mods/` folder:
  * GNU/Linux (e.g. Fedora) typically: `~/.local/share/0ad/mods/`
  * Macintosh/Apple OS X typically: `~/Library/Application\Support/0ad/mods/`
  * Microsoft Windows typically: `~\Documents\My Games\0ad\mods\`
* Launch 0 A.D., click “Tools & Options” and “Mod Selection”
* Select `0abc`, click “Enable” and “Save Configuration”
* Add, remove, or move up or down any other mods, click “Save Configuration” and “Start Mods”
* Click “Learn To Play” and “Structure Tree” to see the mod(s) implemented.
* For more detailed information, please have a look at **0abc-readme.pdf**

## Brief overview
* Dozens of hours of work, thousands of new files, numerous tweaks and minor changes, most of which will probably go unnoticed
* A new resource: silver (see below)
* All soldiers cost at least some metal to encourage feminization
* All soldiers have their attack rate normalized to 1 second
* All soldiers (citizen, mercenary, and champion) can advance in rank: 
  * instead of basic/advanced/elite, units start at rank 0 and can promote a dozen times, up to rank 12; 
  * each rank grants +5% health, attack damage, and capture strength
* Camelry, chariotry, and elephantry are now distinct classes, separate from cavalry; as a consequence, they no longer benefit from cavalry technologies
* Cavalry, camels, and worker elephants can no longer be trained at the civic centre or crannog
* Loot is standardized to 10% of total costs (applies to ships, siege weapons, soldiers, structures, and support units); 
  * experience is standardized to be equal to:
  * 100% of total costs (soldiers)
  * 50% of total costs (siege weapons, war ships)
  * 10% of total costs (fishing boats, merchant ships, support units)
  * 10% of maximum health (army camps, centres, fortresses, outposts, towers) 
  * none (other structures)
* Economic buildings and walls can be constructed in neutral territory
* All walls and towers are stronger and more expensive; 
  * palisade and outpost are available in village phase, 
   * outposts can be upgraded individually to sentry towers in town phase,
  * siege wall and sentry tower are available in town phase,
   * sentry towers can be upgraded individually to defense towers in city phase,
  * stone wall and defense tower are available in city phase; 
* Phase advances no longer increase citizen soldier health nor metal gather rate
* A third level of infantry and cavalry armoury researches is available; 
  blacksmith can be constructed in village phase
* Walls, storehouses, markets, fields, farmsteads, and corrals can be constructed in neutral territory (new),
  as can civic centres, colonies, crannogs, docks, naval shipyards, and outposts (unchanged)
* Bribable (espionage: reveal their vision range for 10 seconds) are:
  * all ships and traders
  * heroes
  * centres, crannogs, docks, embassies, harbours, libraries, markets, palaces, temples, theatres, and wonders
* Conquest critical are:
  * all units except fauna, fishing boats, healers, merchant ships, and traders
  * all military structures, centres, crannogs, fortresses, palaces, and wonders
* Trade gain now depends on x+x^1.5 (instead of x^2), with x the distance between markets

### Silver
Silver is the new resource number one; it can not be gathered directly, but can be acquired by:
* selling resources
* traders (gain is currently any combination of silver and other resources)
* catafalques, palaces, and wonders grant a 1 silver per second trickle
* killing heroes:
  * healer and infantry heroes grant 50 silver
  * cavalry heroes grant 100 silver
  * chariot heroes grant 150 silver
  * elephant heroes grant 200 silver
* killing promoted units (with x the rank (which can be 0 to 12)):
  * healers and infantry grant 1x silver (champions 2x)
  * camels and cavalry grant 2x silver (champions 4x)
  * bigae (two-horsed chariots) grant 4x silver (champions 8x)
  * quadrigae (four-horse chariots) grant 5x silver (champions 10x)
  * elephants (two-horse chariots) grant 6x silver (champions 12x)
* looting structures:
  * centres grant 200 silver
  * libraries grant 100 silver
  * lighthouses grant 60 silver
  * markets grant 30 silver
  * monuments and pillars grant 20 silver
  * palaces grant 150 silver
  * temples grant 40 silver
  * wonders grant 400 silver

And it can currently be used for:
* buying other resources (barter, market)
* a few miscellaneous technologies: 
  * shared vision: 250 silver (instead of 100 food, 100 metal) 
  * shared dropsites: 500 silver (instead of 200 food, 200 wood, 100 metal, 100 stone); also, three traders requirement is removed
  * unlock spies: 1000 silver (instead of 500 food, 500 wood, 300 metal, 300 stone)
  * counterespionage: 2000 silver (instead of 400 food, 400 metal)
* espionage: bribing cost is changed to 250 silver (instead of 500 metal); 500 silver with counterespionage (instead of 750 metal)

### Population size
* 0: heroes, war dogs, fire ships
* 1: infantry, support units, scorpions, fishing boats, merchant ships, small and medium war barges, small galleys
* 2: cavalry, camels, bolt shooters, large war barges, biremes
* 3: worker elephants, stone throwers, huge war barges, triremes
* 4: bigae (two-horsed chariots), battering rams, quadriremes
* 5: three-man chariots, quinqueremes
* 6: quadrigae (four-horsed chariots), war elephants, siege towers, sexiremes
* 7: septiremes
* 8: octoremes
* 9: noviremes
* 10: deceremes

### Bonus attacks (counters and penalties)
* Archer infantry: 1.5× vs Archer Cavalry, 0.5× vs Elephantry
* Sling infantry: 1.5× vs Archer Infantry, 0.125× vs Structures
* Javelin infantry: 1.25× vs Archer units
* Throwing axe infantry: 1.5× vs Spear Infantry
* Axe infantry: 1.5× vs Siege weapons, 2.0× vs Elephantry
* Mace infantry: 1.5× vs Cataphract Cavalry, 0.125× vs Structures
* Sword infantry: --
* Halberd infantry: 2.0× vs Cavalry
* Spear infantry: 1.25× vs Javelin units
* Hoplite infantry: 1.5× vs Camelry
* Pike infantry: 1.25× vs Chariotry, 1.5× vs Cavalry, 1.75× vs Camelry, 2.0× vs Elephantry
* War dogs: 0.75× vs Camelry, Cavalry, Chariotry, 0.5× vs Elephantry
* Archer camel: 1.5× vs Support units, 0.5× vs Elephantry
* Spear camel: 1.5× vs Cavalry, 0.5× vs Elephantry
* Crossbow cavalry: 1.25× vs Cavalry, 0.5× vs Elephantry, 0.125× vs Structures
* Archer cavalry: 1.5× vs Sword Cavalry, 0.5× vs Elephantry
* Javelin cavalry: 1.5× vs Chariotry
* Axe cavalry: 1.5× vs Siege weapons, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Sword cavalry: 1.5× vs Slinger Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Spear cavalry: 1.5× vs Archer Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Lance cavalry: 1.5× vs Javelin Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cataphract cavalry: 1.5× vs Archer Cavalry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Archer biga chariots: 0.5× vs Elephantry
* Javelin biga chariots: 0.5× vs Elephantry
* Three-man biga chariots: 0.5× vs Elephantry
* Scythed quadriga chariots: 0.5× vs Elephantry
* Archer war elephants: 1.5× vs Camelry, 0.5× vs Elephantry
* Melee war elephants: 0.125× vs Structures
* Scorpion: --
* Bolt shooter: 1.5× vs Elephantry
* Stone thrower: 1.5× vs Ships
* Battering ram: 4.0× vs Gates, 2.0× vs other Structures
* Siege tower: 2.0× vs Fortresses, Towers

### Structure distances
* 20 m from economic buildings: corrals, docks, farmsteads, fields, markets, storehouses
* 30 m from military buildings: barracks, blacksmiths, camel stables, cavalry stables, chariot stables, elephant stables, embassies, military halls, siege workshops
* 40 m from temples: temples
* 60 m from towers: outpost, sentry tower, defence tower
* 80 m from fortresses: army camps, fortresses
* 160 m from centres: centres, crannogs

### Global auras
* Wonders each grant +10.0 maximum population limit
  * with “glorious expansion” researched: +10% maximum population limit
  * with “glorious expansion” researched: +10% territory influence radius
* Theatres each grant +15% territory influence radius 
* Libraries each grant −10% structure construction time and −20% technology research time

### Civilization bonuses
* Celtic (Briton and Gaulish) healers have +20% walk speed, +4 hack, pierce, and crush armour levels, and two more auras (“Curse” and “Motivation”), but also +100% training time, +50 metal and +5 wood costs, and +5 metal, +5 wood, and +10 experience loot.
* Celtic (Briton and Gaulish) healers have +20% walk speed and +4 hack, pierce, and crush armour levels.
* Celtic (Briton and Gaulish) civic, economic, military, and resource structures have −20% health, capture points, and build time.
* Celtic (Briton and Gaulish) walls have −20% health, build time, and stone and wood costs.
* Celts (Britons and Gauls) have a 20% resource cost and time discount on Armoury technologies.
* Greek (Athenians, Macedonians, Spartans) civic structures have +20% health and capture points.
* Tribal (Briton, Gaulish, and Iberian centres have −20\% resource cost, build time, population bonus, garrison capacity, capture points, health, loot, experience, and territory influence radius.
* Athenians have a 10% resource cost and time discount on Storehouse technologies.
* Athenian warships have +10% walk speed.
* Briton infantry swordsmen have +10% walk speed.
* Briton sentry towers cost no stone and have −25% construction time and −10% health.
* Carthaginian docks markets have −50% resource costs and construction time; dock and market technologies have a 25% resource cost and time discount.
* Carthaginian ships have +20% vision range.
* Carthaginian stone walls have +25% health.
* Carthaginian traders have +5% gain.
* Gaulish infantry spearmen have +10% melee attack damage.
* Iberian infantry javelinists have +10% ranged attack damage.
* Macedonian cavalry lancers have +10% melee attack damage.
* Mauryans have +10% maximum population.
* Mauryan healers cost −50% metal.
* Mauryan stone walls have −20% health and building time.
* Mauryan temples have −50% resource costs and construction time (former team bonus).
* Persians have +10% maximum population.
* Persian structures have +10\% territory influence radius.
* Ptolemaic healers have +6 healing range.
* Ptolemies have a 30% resource cost and time discount on Temple technologies.
* Romans have a 15% resource cost and time discount on Barracks technologies.
* Roman cavalry swordsmen have a −10% melee attack damage penalty.
* Roman infantry swordsmen have +10% melee attack damage.
* Seleucid civic centres have −30% resource costs.
* Spartans no longer have a −10% maximum population penalty.
* Spartan hoplites have +10% walk speed.
* Spartan cavalry have a −10% attack damage penalty.

## Team bonuses
* Athenian allies: warships construction time
* Briton allies: units cost −4% metal
* Carthaginian allies: traders −20% training time and +5% walk speed
* Gaulish allies: infantry spearmen −20% training time
* Iberian allies: infantry javelinists −20% training time
* Macedonian allies: units cost −4% wood
* Mauryan allies: healers −25% training time
* Persian allies: land traders +10% gain
* Ptolemaic allies: units cost −4% food
* Roman allies: infantry swordsmen −20% training time
* Seleucid allies: civic centres −20% construction time
* Spartan allies: infantry hoplites −20% training time



For more detailed information, please have a look at **0abc-readme.pdf**
