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

export default {
  priest,
  bishop,
  cardinal,
  fighter: {
    name: 'Fighter/Knight/Paladin/Dark Knight',
    questBonus: [
      lt.fort,
      lt.holy,
      lt.isleOfLennu,
      lt.plains,
    ],
  },
  swordsman: {
    name: 'Swordsman/Sword Master',
    questBonus: [
      lt.forest,
      lt.isleOfTrembo,
      lt.ivoryDragonSpring,
      lt.poudValley,
    ],
  },
  barbarian: {
    name: 'Barbarian/Berserker',
    questBonus: [
      lt.highlands,
      lt.plains,
    ],
  },
  viking: {
    name: 'Viking',
    questBonus: [
      lt.saltwater,
    ],
  },
  thief: {
    name: 'Thief/Ranger/Treasure Hunter',
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
  },
  monk: {
    name: 'Monk/Grappler/Champion',
    questBonus: [
      lt.hill,
      lt.mountain,
    ],
  },
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
