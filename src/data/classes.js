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
  questBonus: [...ranger],
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
  questBonus: [...grappler],
};


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
  mage: {
    name: 'Mage',
    questBonus: [
      lt.isleOfSeymour,
      lt.plains,
    ],
  },
  sorcerer: {
    name: 'Sorcerer/Wizard',
    questBonus: [
      lt.fort,
      lt.isleOfSeymour,
      lt.plains,
      lt.ruins,
    ],
  },
  lancer: {
    name: 'Lancer/Temple Knight/Royal Guard',
    questBonus: [
      lt.freshwater,
      lt.ivoryDragonSpring,
      lt.poudValley,
    ],
  },
  hunter: {
    name: 'Hunter/Archer/Sniper',
    questBonus: [
      lt.forest,
      lt.isleOfTrembo,
      lt.ivoryDragonSpring,
      lt.poudValley,
    ],
  },
  bard: {
    name: 'Bard/Minstrel/Troubadour',
    questBonus: [
      lt.valley,
      lt.forest,
      lt.isleOfTrembo,
      lt.ivoryDragonSpring,
      lt.poudValley,
    ],
  },
  dancer: {
    name: 'Dancer/Rogue/Assassin',
    questBonus: [
      lt.fort,
      lt.isleOfSeymour,
      lt.ruins,
      lt.enduraWastelands,
    ],
  },
  sorcereress: {
    name: 'Enchantress/Sorceress',
    questBonus: [
      lt.fortPastous,
      lt.plains,
    ],
  },
  witch: {
    name: 'Witch',
    questBonus: [
      lt.fort,
      lt.isleOfSeymour,
      lt.plains,
      lt.ruins,
    ],
  },
  cleric: {
    name: 'Cleric/Healer/Saint',
    questBonus: [
      lt.hiddenTreasury,
      lt.holy,
      lt.isleOfLennu,
      lt.isleOfMartha,
      lt.manaSpring,
      lt.plains,
    ],
  },
  heroOfOld: {
    name: 'Hero of Old',
    questBonus: [
      lt.holy,
      lt.isleOfLennu,
      lt.isleOfMartha,
      lt.manaSpring,
      lt.mountain,
    ],
  },
};
