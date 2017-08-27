# 0abc-unified
0abc (a “0 A.D.” modification)

## Instructions
* Download the zip or `git clone` this repository (`https://github.com/0abc/mounted.git`).
* Place it in your `/0ad/mods/` folder (e.g. on Fedora it is `/.local/share/0ad/mods/`)
* Launch 0 A.D., click “Tools & Options” and “Mod Selection”
* Select `0abc`, click “Enable” and “Save Configuration”
* Add, remove, or move up or down any other mods, click “Save Configuration” and “Start Mods”
* Click “Learn To Play” and “Structure Tree” to see the mod(s) implemented.
* For more detailed information, please have a look at **0abc-readme.pdf**

## Brief overview
* All soldiers cost at least some metal to encourage feminization
* Cavalry can no longer be trained at the civic centre
* All soldiers have their attack rate normalized to 1 second
* All soldiers (citizen, mercenary, and champion) can advance in rank; instead of basic/advanced/elite, units start at rank 0 and can promote a dozen times, up to rank 12; each rank grant +5% health, attack damage, and capture strength
* Camelry, chariotry, and elephantry are now distinct classes, separate from cavalry; as a consequence, they no longer benefit from cavalry technologies
* Economic buildings and walls can be constructed in neutral territory
* All walls and towers are stronger and more expensive; palisade and outpost are available in village phase, siege wall and sentry tower in town phase, and stone wall and defense tower in city phase
* All ships and most major buildings can be bribed (reveal their vision range for 10 seconds): civic centres, docks, libraries, markets, theatres, wonders
* A third level of infantry and cavalry armoury researches is available; blacksmith can be constructed in village phase
* Trade gain now depends on x+x^1.5 (instead of x^2), with x the distance between markets

### Population size
* 0: war dogs
* 1: infantry, support units, fishing boats, merchant ships
* 2: cavalry, camels, ballistae, biremes
* 3: worker elephants, onagers, triremes
* 4: bigae (two-horsed chariots), rams
* 5: quinqueremes
* 6: quadrigae (four-horsed chariots), war elephants, siege towers


### Bonus attacks (counters and penalties)
* Crossbow infantry: 1.25× vs Ranged Infantry, 0.5× vs Structures
* Archer infantry: 1.5× vs Archer Cavalry, 0.5× vs Elephantry
* Sling infantry: 1.5× vs Archer Infantry, 0.25× vs Structures
* Javelin infantry: 1.25× vs Archer units
* Throwing axe infantry: 1.5× vs Spear Infantry
* Pike infantry: 1.25× vs Chariotry, 1.5× vs Cavalry, 1.75× vs Camelry, 2.0× vs Elephantry
* Axe infantry: 1.5× vs Siege weapons, 2.0× vs Elephantry
* Spear infantry: 1.25× vs Javelin units
* Mace infantry: 1.5× vs Cataphract Cavalry, 0.25× vs Structures
* Sword infantry: 1.5× vs Pike Infantry
* Hoplite infantry: 1.25× vs Ranged units 
* War dogs: 0.75× vs Camelry, Cavalry, Chariotry, 0.5× vs Elephantry
* Archer camel: 1.5× vs Support units, 0.5× vs Elephantry
* Spear camel: 1.5× vs Cavalry, 0.5× vs Elephantry
* Archer cavalry: 1.5× vs Sword Cavalry, 0.5× vs Elephantry
* Javelin cavalry: 1.5× vs Chariotry
* Axe cavalry: 2.0× vs Siege weapons, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Sword cavalry: 1.5× vs Siege weapons, Slingers, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Spear cavalry: 1.5× vs Ranged Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Lance cavalry: 1.5× vs Javelin units, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Cataphract cavalry: 1.5× vs Javelin Infantry, 0.75× vs Camelry, Chariotry, 0.5× vs Elephantry
* Javelin *biga* chariots: 1.5× vs Sword Infantry, 0.5× vs Elephantry
* Archer *biga* chariots: 1.5× vs Mace Infantry, 0.5× vs Elephantry
* Scythed *quadriga* chariots: 1.5× vs Axe Infantry, 0.5× vs Elephantry
* Archer war elephants: 1.5× vs Camelry, 0.5× vs Elephantry
* Melee war elephants: 0.25× vs Structures
* Siege ballista: 1.5× vs Elephantry
* Siege onager: 1.5× vs Ships
* Siege ram: 4.0× vs Gates, 2.0× vs other Structures
* Siege tower: 2.0× vs Fortresses, Towers
