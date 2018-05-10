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
* To make the game slower paced and encourage keeping your units alive, all unit training times and all technology research times are aproximately doubled
* A new resource: silver (see below)
* Warships, mercenaries, champions, and several structures consume resources (see below)
* Heroes and ships require 0 population
* Women can no longer build, but can gather resources
  * citizen soldiers and slaves can both build and gather resources
  * mercenary soldiers can build, but can no longer gather resources
  * champion soldiers can neither build nor gather resources
* All soldiers cost at least some metal to encourage feminization
* All soldiers have their attack rate normalized to 1 second
* All soldiers (citizen, mercenary, and champion) can advance in rank: 
  * instead of basic/advanced/elite, units start at rank 0 and can promote a dozen times, up to rank 12; 
  * each rank grants +5% health, attack damage, and capture strength
* Camelry, chariotry, and elephantry are now distinct classes, separate from cavalry; as a consequence, they no longer benefit from cavalry technologies
* Cavalry, camels, and worker elephants can no longer be trained at the civic centre or crannog
  * women can be trained at houses by default (no longer require a technology to be unlocked)
* Loot resources are standardized to be equal to 20% of total costs for structures; units no longer grant loot
  * 0: fishing boat, merchant ship, support units, and most structures
  * 10% of maximum health: army camps, centres, fortresses, outposts, towers
  * 20% of maximum health: warships
  * 50% of maximum health: siege weapons
  * 100% of maximum health: heroes
  * 30 (base) + 3 per level: dogs
  * 60 (base) + 5 per level: infantry
  * 90 (base) + 8 per level: camelry
  * 120 (base) + 10 per level: cavalry
  * 240 (base) + 20 per level: bigae
  * 300 (base) + 25 per level: quadrigae
  * 360 (base) + 30 per level: elephantry
  * champions have +200% base loot experience
* Economic buildings and walls can be constructed in neutral territory
* All walls and towers are stronger and more expensive; 
  * palisades and outposts are available in village phase, 
   * outposts can be upgraded individually to sentry towers in town phase,
  * turf walls and sentry towers are available in town phase,
   * sentry towers can be upgraded individually to stone defence towers in city phase,
  * stone walls and stone towers are available in city phase; 
* Phase advances no longer increase citizen soldier health nor metal gather rate
* A third level of infantry and cavalry armoury researches is available; 
  blacksmith can be constructed in village phase
* Walls, storehouses, markets, fields, farmsteads, and corrals can be constructed in neutral territory (new),
  as can centres, crannogs, docks, harbours, shipyards, and outposts (unchanged)
* All units are bribable (espionage: temporarily reveal their vision range) 
* Conquest critical are:
  * all units except fauna, women, fishing boats, healers, merchant ships, slaves, and traders
  * all military structures, centres, crannogs, fortresses, palaces, and wonders
* Trade gain now depends on `x+x^1.5` (instead of `x^2`), with `x` the distance between markets

### Soldier types
* Infantry can attack anything, can capture, can build, can gather
* War dogs can not attack elephants, ships, siege engines, or structures; can not capture, build, or gather
* Cavalry can attack and capture; can not build or gather
* Camelry can attack and capture; can not build or gather
* Chariotry can not attack structures; can capture; can not build or gather
* Elephantry can attack and capture; can not build or gather

### Selection markers
* Catafalques and heroes are indicated by a star
* Champions are indicated by an arrow
* Economic units (women, slaves, support elephants, land traders, merchant ships, and fishing boats) are indicated by a rhombus
* Healers are indicated by a cross
* Other units are indicated by a circle

### Phases
* Each phase increases centre building time, health, experience, territory influence radius by +20%, and resource trickle rate by +1 silver per 7 seconds
  * Centres cost by default 300 food and wood; 25 m and 50 m auras enabled
  * Village phase increases centre cost by 300 wood; 75 m aura enabled
  * Town phase increases centre cost by 300 stone; 100 m aura enabled
  * City phase increases centre cost by 300 metal; 125 m aura enabled
  * Metropolis phase increases centre cost by 300 silver; 150 m aura enabled

### Silver
Silver is the new resource number one; it can not be gathered directly, but can be acquired by:
* selling resources
* traders (gain is currently any combination of silver and other resources)
* resource trickle rates (see below)
<!--
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
    {"value": "Loot/silver",                "add":      1,    "affects": "Healer"           },
    {"value": "Loot/silver",                "add":      1,    "affects": "Healer Champion"  },
    {"value": "Loot/silver",                "add":      1,    "affects": "Infantry"         },
    {"value": "Loot/silver",                "add":      1,    "affects": "Infantry Champion"},
    {"value": "Loot/silver",                "add":      2,    "affects": "Camel"            },
    {"value": "Loot/silver",                "add":      2,    "affects": "Camel Champion"   },
    {"value": "Loot/silver",                "add":      2,    "affects": "Cavalry"          },
    {"value": "Loot/silver",                "add":      2,    "affects": "Cavalry Champion" },
    {"value": "Loot/silver",                "add":      4,    "affects": "Biga"             },
    {"value": "Loot/silver",                "add":      4,    "affects": "Biga Champion"    },
    {"value": "Loot/silver",                "add":      5,    "affects": "Quadriga"         },
    {"value": "Loot/silver",                "add":      5,    "affects": "Quadriga Champion"},
    {"value": "Loot/silver",                "add":      6,    "affects": "Elephant"         },
    {"value": "Loot/silver",                "add":      6,    "affects": "Elephant Champion"},
-->
* looting structures:
  * libraries grant 100 silver
  * lighthouses grant 60 silver
  * markets grant 30 silver
  * monuments and pillars grant 20 silver
  * palaces grant 150 silver
  * temples grant 40 silver
  * theatres grant 150 silver
  * wonders grant 400 silver

And it can currently be used for:
* buying other resources (barter, market)
* a few miscellaneous technologies: 
  * international treaty: 250 silver (instead of 100 metal)
  * shared vision: 250 silver (instead of 100 food, 100 metal) 
  * shared dropsites: 500 silver (instead of 200 food, 200 wood, 100 metal, 100 stone); also, three traders requirement is removed
  * unlock spies: 1000 silver (instead of 500 food, 500 wood, 300 metal, 300 stone)
  * counterespionage: 2000 silver (instead of 400 food, 400 metal)
* espionage: bribing cost is changed to 250 silver (instead of 500 metal); 500 silver with counterespionage (instead of 750 metal)
* training:
  * slaves cost 25 food and 25 silver each (instead of 50 food and 50 metal)
  * healers cost 25 food and 50 silver each (instead of 250 food only)
  * infantry mercenaries cost 60 silver each (instead of other resources)
  * camelry mercenaries cost 75 silver each (instead of other resources)
  * cavalry mercenaries cost 90 silver each (instead of other resources)
  * biga mercenaries cost 180 silver each (instead of other resources)
  * quadriga mercenaries cost 240 silver each (instead of other resources)
  * elephantry mercenaries cost 300 silver each (instead of other resources)
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
* Unit upkeep:
  * dogs: −0.01 food per 1 second
  * infantry, women, healers, slaves: −0.02 food per 1 second
  * traders: −0.03 food per 1 second
  * camelry: −0.04 food per 1 second
  * cavalry: −0.05 food per 1 second
  * bigae: −0.10 food per 1 second
  * quadrigae: −0.15 food per 1 second
  * elephantry: −0.20 food per 1 second
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

### Population size
* 0: heroes, war dogs, ships
* 1: infantry, support units, scorpions
* 2: cavalry, camels, bolt shooters
* 3: worker elephants, stone throwers
* 4: bigae (two-horsed chariots), battering rams
* 6: quadrigae (four-horsed chariots), war elephants, siege towers

### Bonus attacks (counters and penalties)
* War dogs: 0.75× vs Camelry, Cavalry, Chariotry
* Infantry crossbowmen: 1.5× vs Cavalry Archers, 0.5× vs Elephantry
* Infantry archers: 1.5× vs Cavalry Archers, 0.5× vs Elephantry
* Infantry longbowmen: 1.5× vs Cavalry Archers, 0.5× vs Elephantry
* Infantry slingers: 1.5× vs Infantry Archers, 0.125× vs Siege Weapons, Structures
* Infantry javelinists: –
* Infantry axe throwers: – 
* Infantry axemen: 1.5× vs Elephantry
* Infantry macemen: 0.125× vs Structures
* Infantry sabremen: –
* Infantry swordsmen: –
* Infantry longswordsmen: –
* Infantry halberdiers: –
* Infantry spearmen: –
* Infantry hoplites: –
* Infantry pikemen: –
* Camel archers: 1.5× vs Support units, 0.5× vs Elephantry
* Camel javelinists: 1.25× vs Cavalry
* Camel spearmen: 1.5× vs Cavalry, 0.5× vs Elephantry
* Cavalry crossbowmen: 1.25× vs Cavalry, 0.5× vs Elephantry, 0.125× vs Structures
* Cavalry archers: 1.5× vs Cavalry Axe-, Sabre-, and Swordsmen, 0.5× vs Elephantry
* Cavalry javelinists: 1.5× vs Chariotry
* Cavalry axemen: 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cavalry sabremen: 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cavalry swordsmen: 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cavalry spearmen: 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cavalry lancers: 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Archer biga chariots: 0.5× vs Elephantry
* Javelin biga chariots: 0.5× vs Elephantry
* Scythed quadriga chariots: 0.5× vs Elephantry
* Archer war elephants: 0.5× vs Elephantry
* Melee war elephants: 0.125× vs Structures
* Scorpion: –
* Bolt shooter: 1.5× vs Elephantry
* Stone thrower: 2.0× vs Ships
* Battering ram: 2.0× vs Structures
* Siege tower: –

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
* Theatres each grant +2% worker gather rates
* Libraries each grant −10% structure construction time and −20% technology research time

### Civilization bonuses
* Celtic (Britons, Gauls):
  * blacksmith technologies cost −20% resources and time;
  * civic, economic, military, and resource structures have −20% health, capture points, and build time; temples cost 0 stone but +250 wood;
  * economic structures grant +2 population bonus, military structures +4, temples +6;
  * walls have −20% health, capture points, build time, and stone and wood costs;
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
  * ships have +20 m vision range;
  * naval traders have +10% gain;
  * city walls have +20% health, capture points, build time, and stone and wood costs.
* Gauls:
  * infantry spearmen have +10% melee attack damage.
* Iberians:
  * infantry javelinists have +10% ranged attack damage.
* Macedonians:
  * cavalry lancers have +10% melee attack damage;
  * siege weapons have −20% construction time;
  * battering rams have +20% wood cost, +20% maximum health, +2.0 garrison capacity, but also −10% movement speed.
* Mauryas:
  * no longer have +10% maximum population limit;
  * soldiers −10% training time;
  * city walls have −20% health, capture points, and build time, cost no stone, but +200% wood;
  * battering rams have +10% wood cost and +10% maximum health, but also −5% movement speed.
* Persians:
  * no longer have +10% maximum population limit; 
  * structures +10% territory influence radius;
  * military structures −0.05 batch time multiplier;
  * land traders have +10% gain;
  * battering rams have +50% wood cost, +50% maximum health, +4.0 garrison capacity, but also −20% movement speed.
* Ptolemies:
  * houses, corrals, farmsteads, and storehouses cost no resources but have +100% build time; 
  * blacksmiths, docks, markets, and military structures cost −50% wood but have +60% building time;
  * healers have +3 healing range;
  * battering rams have +20% wood cost, +20% maximum health, +2.0 garrison capacity, but also −10% movement speed;
  * temple technologies cost −30% resources and time.
* Romans:
  * barracks technologies cost −25% resources and time;
  * infantry swordsmen have +10% melee attack damage;
  * battering rams have +30% wood cost, +30% maximum health, +2.0 garrison capacity, but also −15% movement speed;
  * stone throwers have +20% crush damage, but also cost +50.0 stone.
* Seleucids:
  * centres have −25% building time (former team bonus);
  * battering rams have +20% wood cost, +20% maximum health, +2.0 garrison capacity, but also −10% movement speed.
* Spartans:
  * no longer have −10% maximum population limit;
  * women have +30% melee attack damage;
  * melee and ranged cavalry have a −10% attack damage penalty;
  * hoplites have +10% walk speed.

<!--
## Team bonuses
* Athenian allies: warships −20% construction time
* Briton allies: units cost −4% metal
* Carthaginian allies: economic structures −20% building time
* Gaulish allies: military structures −20% building time
* Iberian allies: infantry javelinists −20% training time
* Macedonian allies: units cost −4% wood
* Mauryan allies: healers −20% training time, temple technologies −20% research time
* Persian allies: land and naval traders −20% training time
* Ptolemaic allies: units cost −4% food
* Roman allies: infantry longswordsmen, sabremen, swordsmen −20% training time
* Seleucid allies: civic structures −20% building time
* Spartan allies: infantry hoplites, pikemen, and spearmen −20% training time
-->


For more detailed information, please have a look at **0abc-readme.pdf**
