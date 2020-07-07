import lt from './location-types';

// TODO - Add in data for Barrett and Bazoo when completed by Lasci.

const priest = {
  name: 'Priest',
  questBonus: [],
};

const bishop = {
  name: 'Bishop',
  parentClass: priest,
  questBonus: [
    lt.hiddenTreasury,
    lt.holy,
    lt.isleOfLennu,
    lt.isleOfMartha,
    lt.manaSpring,
    lt.plains,
  ],
};

const cardinal = {
  name: 'Cardinal',
  parentClass: bishop,
  questBonus: [...bishop.questBonus],
};

const fighter = {
  name: 'Fighter',
  questBonus: [],
};

const knight = {
  name: 'Knight',
  parentClass: fighter,
  questBonus: [
    lt.fort,
    lt.holy,
    lt.isleOfLennu,
    lt.plains,
  ],
}

const paladin = {
  name: 'Paladin',
  parentClass: knight,
  questBonus: [...knight.questBonus],
}

const darkKnight = {
  name: 'Dark Knight',
  parentClass: knight,
  questBonus: [...knight.questBonus],
}

const swordman = {
  name: 'Swordman',
  parentClass: fighter,
  questBonus: [
    lt.forest,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
  ],
}

const swordMaster = {
  name: 'Sword Master',
  parentClass: swordman,
  questBonus: [...swordman.questBonus],
}

const barbarian = {
  name: 'Barbarian',
  questBonus: [],
};

const berserker = {
  name: 'Berserker',
  parentClass: barbarian,
  questBonus: [
    lt.plains
  ],
}

const viking = {
  name: 'Viking',
  parentClass: berserker,
  questBonus: [
    lt.valley,
    lt.poudValley,
    lt.saltwater
  ],
}

const thief = {
  name: 'Thief',
  questBonus: [],
};

const ranger = {
  name: 'Ranger',
  parentClass: thief,
  questBonus: [
    lt.enduraWastelands,
    lt.forest,
    lt.fort,
    lt.hiddenTreasury,
    lt.holy,
    lt.isleOfLennu,
    lt.isleOfMartha,
    lt.isleOfTrembo,
    lt.mountain,
    lt.ruins,
    lt.saltwater,
    lt.theManaSpring,
  ],
};

const treasureHunter = {
  name: 'Treasure Hunter',
  parentClass: ranger,
  questBonus: [...ranger.questBonus],
};

const monk = {
  name: 'Monk',
  questBonus: [],
};

const grappler = {
  name: 'Grappler',
  parentClass: monk,
  questBonus: [
    lt.hill,
    lt.mountain,
  ],
};

const champion = {
  name: 'Champion',
  parentClass: monk,
  questBonus: [...grappler.questBonus],
};

const mage = {
  name: "Mage",
  questBonus: [
    lt.isleOfSeymour,
    lt.plains,
  ],
}

const sorcerer = {
  name: "Sorcerer",
  parentClass: mage,
  questBonus: [
    lt.fort,
    lt.isleOfSeymour,
    lt.plains,
    lt.ruins,
  ],
}

const wizard = {
  name: "wizard",
  parentClass: sorcerer,
  questBonus: [...sorcerer.questBonus],
}

const lancer = {
  name: "Lancer",
  questBonus: [],
}

const templeKnight = {
  name: "Temple Knight",
  parentClass: lancer,
  questBonus: [
    lt.freshwater,
    lt.ivoryDragonSpring,
    lt.poudValley,
  ],
}

const royalGuard = {
  name: "Royal Guard",
  parentClass: templeKnight,
  questBonus: [...templeKnight],
}

const hunter = {
  name: "Hunter",
  questBonus: [],
}

const archer = {
  name: "Archer",
  parentClass: hunter,
  questBonus: [
    lt.forest,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
  ],
}

const sniper = {
  name: "Sniper",
  parentClass: archer,
  questBonus: [...archer],
}

const bard = {
  name: "Bard",
  questBonus: [],
}

const minstrel = {
  name: "Minstrel",
  parentClass: bard,
  questBonus: [
    lt.valley,
    lt.forest,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
  ],
}

const troubadour = {
  name: "Troubadour",
  parentClass: minstrel,
  questBonus: [...minstrel],
}

const dancer = {
  name: "Dancer",
  questBonus: [],
}

const rogue = {
  name: "Rogue",
  parentClass: dancer,
  questBonus: [
    lt.fort,
    lt.isleOfSeymour,
    lt.ruins,
    lt.enduraWastelands,
  ],
}

const assassin = {
  name: "Assassin",
  parentClass: rogue,
  questBonus: [...rogue],
}

const enchantress = {
  name: "Enchantress",
  questBonus: [
    lt.fortPastous,
    lt.plains,
  ],
}

const sorceress = {
  name: "Sorceress",
  parentClass: enchantress,
  questBonus: [...enchantress.questBonus],
}

const witch = {
  name: "Witch",
  parentClass: sorceress,
  questBonus: [
    lt.fort,
    lt.isleOfSeymour,
    lt.plains,
    lt.ruins,
  ],
}

const cleric = {
  name: "Cleric",
  questBonus: [],
}

const healer = {
  name: "Healer",
  parentClass: cleric,
  questBonus: [
    lt.hiddenTreasury,
    lt.holy,
    lt.isleOfLennu,
    lt.isleOfMartha,
    lt.manaSpring,
    lt.plains,
  ],
}

const saint = {
  name: "Saint",
  parentClass: healer,
  questBonus: [...healer],
}

const heroOfOld = {
  name: 'Hero of Old',
  questBonus: [
    lt.holy,
    lt.isleOfLennu,
    lt.isleOfMartha,
    lt.manaSpring,
    lt.mountain,
  ],
}

export default {
  priest,
  bishop,
  cardinal,
  fighter,
  knight,
  paladin,
  darkKnight,
  swordsman,
  swordMaster,
  barbarian,
  berserker,
  viking,
  thief,
  ranger,
  treasureHunter,
  monk,
  grappler,
  champion,
  mage,
  sorcerer,
  wizard,
  lancer,
  templeKnight,
  royalGuard,
  hunter,
  archer,
  sniper,
  bard,
  minstrel,
  troubadour,
  dancer,
  rogue,
  assassin,
  enchantress,
  sorceress,
  witch,
  cleric,
  healer,
  saint,
  heroOfOld,
};
