# 0 A.D. is Actually Before Christ
**0abc** is a modification of “0 A.D. Empires Ascendant”, version 0.0.22 “Alpha XXII: Venustas”

## Instructions
* Download the zip or `git clone` this repository (`https://github.com/0abc/0abc-unified.git`).
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
* To make the game slower paced and encourage keeping your units alive, all unit training times are increased by 100% and all technology research times are increased by 50%
* A new resource: silver (see below)
* Warships, mercenaries, champions, and several structures consume resources (see below)
* Heroes and ships require 0 population
* Females can no longer build, but can gather resources
  * citizen soldiers can both build and gather resources
  * mercenary soldiers can build, but can no longer gather resources
  * champion soldiers can neither build nor gather resources
* All soldiers cost at least some metal to encourage feminization
* All soldiers have their attack rate normalized to 1 second
* All soldiers (citizen, mercenary, and champion) can advance in rank: 
  * instead of basic/advanced/elite, units start at rank 0 and can promote a dozen times, up to rank 12; 
  * each rank grants +5% health, attack damage, and capture strength
* Camelry, chariotry, and elephantry are now distinct classes, separate from cavalry; as a consequence, they no longer benefit from cavalry technologies
* Females, cavalry, camels, and worker elephants can no longer be trained at the civic centre or crannog
  * females can be trained at houses by default (no longer require a technology to be unlocked)
* Loot resources are standardized to 10% of total costs (applies to ships, siege weapons, soldiers, structures, and support units); 
* Loot experience is standardized to be equal to:
  * 100% of resource costs total (soldiers)
  * 50% of resource costs total (siege weapons, war ships)
  * 10% of resource costs total (fishing boats, merchant ships, support units)
  * 10% of maximum health (army camps, centres, fortresses, outposts, towers) 
  * nothing (other structures)
* Economic buildings and walls can be constructed in neutral territory
* All walls and towers are stronger and more expensive; 
  * palisades and outposts are available in village phase, 
   * outposts can be upgraded individually to sentry towers in town phase,
  * turf walls and sentry towers are available in town phase,
   * sentry towers can be upgraded individually to defense towers in city phase,
  * stone walls and stone towers are available in city phase; 
* Phase advances no longer increase citizen soldier health nor metal gather rate
* A third level of infantry and cavalry armoury researches is available; 
  blacksmith can be constructed in village phase
* Walls, storehouses, markets, fields, farmsteads, and corrals can be constructed in neutral territory (new),
  as can centres, crannogs, docks, harbours, shipyards, and outposts (unchanged)
* All units are bribable (espionage: temporarily reveal their vision range) 
* Conquest critical are:
  * all units except fauna, females, fishing boats, healers, merchant ships, slaves, and traders
  * all military structures, centres, crannogs, fortresses, palaces, and wonders
* Trade gain now depends on x+x^1.5 (instead of x^2), with x the distance between markets

### Silver
Silver is the new resource number one; it can not be gathered directly, but can be acquired by:
* selling resources
* traders (gain is currently any combination of silver and other resources)
* resource trickle rates (see below)
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
  * war elephants grant 6x silver (champions 12x)
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
* training:
  * healer cost is 50 food and 50 silver each (instead of 250 food only)
* upkeep (see below)

### Upkeep and taxation (resource trickle rates)
* Income:
  * catafalques: 1 silver per 2 seconds
  * centres (village phase): 1 silver per 7 seconds
  * centres (town phase): 2 silver per 7 seconds
  * centres (city phase): 3 silver per 7 seconds
  * centres (metropolis phase): 4 silver per 7 seconds
  * palaces: 1 silver per second
  * wonders: 2 silver per second
* Structure upkeep:
  * fortresses −1.0 silver per 7 seconds
  * harbours −1.0 food and −1.0 silver per 7 seconds
  * libraries −2.0 silver per 7 seconds
  * lighthouse −1.0 wood per 7 seconds
  * military structures −1.0 food per 7 seconds
* Warship upkeep:
  * small bargue: −2.0 silver per 30 seconds
  * small galley: −3.0 silver per 30 seconds
  * medium bargue: −4.0 silver per 30 seconds
  * unireme: −6.0 silver per 30 seconds
  * large bargue: −8.0 silver per 30 seconds
  * bireme: −12.0 silver per 30 seconds
  * huge bargue: −16.0 silver per 30 seconds
  * trireme: −18.0 silver per 30 seconds
  * quadrireme: −24.0 silver per 30 seconds
  * quinquereme: −30.0 silver per 30 seconds
  * sexireme: −36.0 silver per 30 seconds
  * septireme: −42.0 silver per 30 seconds
  * octoreme: −48.0 silver per 30 seconds
  * novireme: −54.0 silver per 30 seconds
  * decereme: −60.0 silver per 30 seconds
* Mercenary upkeep:
  * infantry mercenaries −1.0 silver per 60 seconds
  * camel mercenaries −1.5 silver per 60 seconds
  * cavalry mercenaries −2.0 silver per 60 seconds
  * biga mercenaries −4.0 silver per 60 seconds
  * quadriga mercenaries −6.0 silver per 60 seconds
  * elephant mercenaries −3.0 silver (and −5.0 food) per 60 seconds
* Champion upkeep:
  * infantry champions −1.0 food per 60 seconds
  * camel champions −1.5 food per 60 seconds
  * cavalry champions −2.0 food per 60 seconds
  * biga champions −4.0 food per 60 seconds
  * quadriga champions −6.0 food per 60 seconds
  * elephant champions −8.0 food per 60 seconds
  * elephant mercenaries −5.0 food (and −3.0 silver) per 60 seconds
  * other war elephants −5.0 food per 60 seconds

### Population size
* 0: heroes, war dogs, ships
* 1: infantry, support units, scorpions
* 2: cavalry, camels, bolt shooters
* 3: worker elephants, stone throwers
* 4: bigae (two-horsed chariots), battering rams
* 5: three-man chariots
* 6: quadrigae (four-horsed chariots), war elephants, siege towers

### Bonus attacks (counters and penalties)
* Archer infantry: 1.5× vs Archer Cavalry, 0.5× vs Elephantry
* Sling infantry: 1.5× vs Archer Infantry
  * Stone slinger: 1.5× vs Archer Infantry, 0.125× vs Siege Weapons, Structures
* Javelin infantry: 1.25× vs Archer units
* Throwing axe infantry: 1.5× vs Spear Infantry
* Axe infantry: 1.5× vs Siege weapons, 2.0× vs Elephantry
* Mace infantry: 1.5× vs Cataphract Cavalry, 0.125× vs Structures
* Sword infantry: --
* Halberd infantry: 2.0× vs Cavalry
* Spear infantry: 1.5× vs Javelin Cavalry
* Hoplite infantry: 1.25× vs Cavalry
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
* Archer biga chariots: 0.5× vs Elephantry
* Javelin biga chariots: 0.5× vs Elephantry
* Three-man biga chariots: 0.5× vs Elephantry
* Scythed quadriga chariots: 0.5× vs Elephantry
* Archer war elephants: 1.5× vs Camelry, 0.5× vs Elephantry
* Melee war elephants: 0.125× vs Structures
* Scorpion: --
* Bolt shooter: 1.5× vs Elephantry
* Stone thrower: 1.5× vs Ships
* Battering ram: 8.0× vs Gates, 4.0× vs other Structures
* Siege tower: 2.0× vs Fortresses, Towers

### Structure distances
* 20 m from economic buildings: corrals, docks, farmsteads, fields, markets, storehouses
* 30 m from military buildings: barracks, blacksmiths, camel stables, cavalry stables, chariot stables, elephant stables, embassies, military halls, siege workshops
* 40 m from temples: temples
* 60 m from towers: outpost, sentry tower, defence tower
* 75 m from fortresses: army camps, fortresses
* 150 m from centres: centres, crannogs

### Global auras
* Wonders each grant −10% unit training time
  * with “glorious expansion” researched: +10% maximum population limit
  * with “glorious expansion” researched: structures +10% territory influence radius
* Theatres grant +5% worker gather rates once (non-stackable)
* Libraries each grant −10% structure construction time and −20% technology research time

### Civilization bonuses
* Celtic (Britons, Gauls):
  * blacksmith technologies cost −20% resources and time;
  * civic, economic, military, and resource structures have −20% health, capture points, and build time; cost 0 stone; temples cost +250 wood;
  * economic structures grant +2 population bonus, military structures +4, temples +6;
  * walls have −20% health, capture points, build time, and stone and wood costs;
  * druids (healers) have +20% walk speed, +4 crush, hack, and pierce armour levels, and two more auras (“Curse” and “Motivation”), but also cost +50 metal, +50 wood, and +100% training time;
  * naked fanatics (champion spearmen) have +15% attack damage and +30% walk speed, but also −4 armour levels.
* Greek (Athenians, Macedonians, Spartans):
  * civic structures have +20% health and capture points.
* North African (Carthaginians, Ptolemies):
  * war elephants have −20% metal and wood costs and −10% training time, but also −10% attack damage and −20% maximum health.
* Tribal (Britons, Gauls, Iberians):
  * centres have −20% resource cost, build time, population bonus, garrison capacity, capture points, health, loot, experience, and territory influence radius.
* Athenians:
  * storehouse technologies cost −10% resources and time;
  * warships have +10% walk speed.
* Britons:
  * infantry swordsmen have +10% walk speed;
  * sentry towers cost no stone and have −25% construction time and −10% health.
* Carthaginians:
  * market technologies cost −25% resources and time;
  * markets have −50% resource costs and construction time;
  * ships have +20~m vision range;
  * traders have +5% gain;
  * city walls have +40% health, capture points, build time, and stone and wood costs.
* Gauls:
  * infantry spearmen have +10% melee attack damage.
* Iberians:
  * infantry javelinists have +10% ranged attack damage.
* Macedonians:
  * cavalry lancers have +10% melee attack damage.
* Mauryans:
  * +10% maximum population;
  * workers −10% stone gather rate;
  * city walls have −20% health, capture points, and build time, cost no stone, but +200% wood;
  * temples have −50% resource costs and construction time (former team bonus).
* Persians:
  * +10% maximum population;
  * +10% territory influence radius;
  * workers −5% wood gather rate;
  * battering rams have +20% maximum health but also cost +100 wood.
* Ptolemies:
  * barracks, blacksmiths, houses, and economic structures cost −100 wood but have +50% building time;
  * healers have +3 healing range;
  * temple technologies cost −30% resources and time.
* Romans:
  * barracks technologies cost −25% resources and time;
  * infantry spearmen have +15% maximum health;
  * infantry swordsmen have +10% melee attack damage;
  * stone throwers have +20% crush damage, but also cost +50.0 stone.
* Seleucids:
  * champion cataphract cavalry has +3 armour levels, −5 walk speed, +40 metal and +20 wood costs;
  * champion cataphract elephants have +3 armour levels, −5 walk speed, +100 metal and +50 wood costs;
  * centres have −30% resource costs (former team bonus).
* Spartans:
  * no longer have a −10% maximum population penalty;
  * females have +30% melee attack damage;
  * melee and ranged cavalry have a −10% attack damage penalty;
  * hoplites have +10% walk speed.

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
