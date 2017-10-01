# 0abc-unified
0abc (a “0 A.D.” modification)

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
* Dozens of hours of work, hundreds of new files, thousands of tweaks and minor changes, most of which will probably go unnoticed
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
  * 10% of maximum health (army camps, civic centres, fortresses, towers) 
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
  * civic centres, colonies, crannogs, docks, embassies, halls, libraries, markets, naval shipyards, palaces, temples, theatres, and wonders
* Trade gain now depends on x+x^1.5 (instead of x^2), with x the distance between markets

### Population size
* 0: war dogs, fire ships
* 1: infantry, support units, fishing boats, merchant ships, small and medium war barges, small galleys
* 2: cavalry, camels, siege ballistae, large war barges, biremes
* 3: worker elephants, siege onagers, huge war barges, triremes
* 4: bigae (two-horsed chariots), siege rams, quadriremes
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
* Archer cavalry: 1.5× vs Sword Cavalry, 0.5× vs Elephantry
* Javelin cavalry: 1.5× vs Chariotry
* Axe cavalry: 2.0× vs Siege weapons, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Sword cavalry: 1.5× vs Siege weapons, Slingers, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Spear cavalry: 1.5× vs Ranged Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Lance cavalry: 1.5× vs Javelin Cavalry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cataphract cavalry: 1.5× vs Archer Cavalry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Archer biga chariots: 0.5× vs Elephantry
* Javelin biga chariots: 0.5× vs Elephantry
* Three-man biga chariots: 0.5× vs Elephantry
* Scythed quadriga chariots: 0.5× vs Elephantry
* Archer war elephants: 1.5× vs Camelry, 0.5× vs Elephantry
* Melee war elephants: 0.125× vs Structures
* Siege ballista: 1.5× vs Elephantry
* Siege onager: 1.5× vs Ships
* Siege ram: 4.0× vs Gates, 2.0× vs other Structures
* Siege tower: 2.0× vs Fortresses, Towers

### Structure distances
* 20 m from economic buildings: corrals, docks, farmsteads, fields, markets, storehouses
* 30 m from military buildings: barracks, blacksmiths, cavalry stables, elephant stables, embassies
* 40 m from temples: temples
* 60 m from towers: outpost, sentry tower, defence tower
* 80 m from fortresses: army camps, fortresses
* 120 m from civic centres: military colonies
* 160 m from civic centres: Briton, Gaulish, and Iberian civil centres, crannogs
* 200 m from civic centres: civil centres

### Global auras
* Wonders each grant +40% territory influence (new) and +10.0 maximum population limit, plus +10% each with “glorious expansion” researched
* Theatres each grant +20% territory influence; 
* Libraries each grant −10% structure construction time and −20% technology research time

### Civilization bonuses
* Celtic (Briton and Gaulish) healers have +20% walk speed, +4 hack, pierce, and crush armour levels, and two more auras (“Curse” and “Motivation”), but also +100% training time, +50 metal and +5 wood costs, and +5 metal, +5 wood, and +10 experience loot.
* Celtic (Briton and Gaulish) healers have +20% walk speed and +4 hack, pierce, and crush armour levels.
* Celtic (Briton and Gaulish) civic, economic, military, and resource structures have −20% health, capture points, and build time.
* Celtic (Briton and Gaulish) walls have −20% health, build time, and stone and wood costs.
* Celts (Britons and Gauls) have a 20% resource cost and time discount on Armoury technologies.
* Greek (Athenians, Macedonians, Spartans) civic structures have +20% health and capture points.
* Athenians have a 10% resource cost and time discount on Storehouse technologies.
* Athenian warships have +10% walk speed.
* Briton infantry swordsmen have +10% walk speed.
* Briton sentry towers cost no stone and have −25% construction time and −10% health.
* Carthaginian docks markets have −50% resource costs and construction time; dock and market technologies have a 30% resource cost and time discount.
* Carthaginian ships have +20% vision range.
* Carthaginian stone walls have +25% health.
* Carthaginian traders have +5% gain.
* Gaulish infantry spearmen have +10% melee attack damage.
* Iberian infantry javelinists have +10% ranged attack damage.
* Macedonian cavalry lancers have +10% melee attack damage.
* Macedonian pikemen have +10% walk speed.
* Mauryans have +10% maximum population.
* Mauryan healers cost −50% metal.
* Mauryan stone walls have −20% health and building time.
* Mauryan temples have −50% resource costs and construction time (former team bonus).
* Persians have +10% maximum population.
* Persian structures have +20\% territory influence radius.
* Persian storehouses have +100% health and territory influence radius.
* Ptolemaic farmsteads have +50% health and territory influence radius.
* Ptolemaic healers have +6 healing range.
* Ptolemies have a 40% resource cost and time discount on Temple technologies.
* Roman cavalry swordsmen have a −10% melee attack damage penalty.
* Roman infantry swordsmen have +10% melee attack damage.
* Seleucid civic centres have −20% resource costs.
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
