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
    lt.plainsSnowfield,
    lt.shrineSanctuary,
    lt.hiddenTreasury,
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
    lt.plainsSnowfield,
    lt.shrineSanctuary,
    lt.isleOfMartha,
    lt.isleOfLennu,
    lt.theManaSpring,
  ],
};

const paladin = {
  name: 'Paladin',
  parentClass: knight,
  questBonus: [...knight.questBonus],
};

const darkKnight = {
  name: 'Dark Knight',
  parentClass: knight,
  questBonus: [
    lt.ruinsFortWasteland,
    lt.plainsSnowfield,
    lt.isleOfSeymour,
    lt.secretRuins,
  ],
};

const swordsman = {
  name: 'Swordsman',
  parentClass: fighter,
  questBonus: [
    lt.forestJungleWood,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
  ],
};

const swordMaster = {
  name: 'Sword Master',
  parentClass: swordsman,
  questBonus: [...swordsman.questBonus],
};

const barbarian = {
  name: 'Barbarian',
  questBonus: [],
};

const berserker = {
  name: 'Berserker',
  parentClass: barbarian,
  questBonus: [
    lt.plainsSnowfield,
  ],
};

const viking = {
  name: 'Viking',
  parentClass: berserker,
  questBonus: [
    lt.straitSeaBay,
    lt.unmappedIsland,
    lt.sunkenTreasure,
  ],
};

const thief = {
  name: 'Thief',
  questBonus: [],
};

const ranger = {
  name: 'Ranger',
  parentClass: thief,
  questBonus: [
    lt.ruinsFortWasteland,
    lt.fallsValleyLakeside,
    lt.mountainRangeHill,
    lt.alpsPeaks,
    lt.forestJungleWood,
    lt.shrineSanctuary,
    lt.straitSeaBay,
    lt.isleOfTrembo,
    lt.isleOfMartha,
    lt.isleOfLennu,
    lt.theManaSpring,
    lt.hiddenTreasury,
    lt.forgottenCliffs,
    lt.deepestJungle,
    lt.secretRuins,
    lt.unmappedIsland,
    lt.sunkenTreasure,
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
    lt.mountainRangeHill,
    lt.alpsPeaks,
  ],
};

const champion = {
  name: 'Champion',
  parentClass: monk,
  questBonus: [...grappler.questBonus],
};

const mage = {
  name: 'Mage',
  questBonus: [],
};

const sorcerer = {
  name: 'Sorcerer',
  parentClass: mage,
  questBonus: [
    lt.ruinsFortWasteland,
    lt.plainsSnowfield,
    lt.isleOfSeymour,
    lt.secretRuins,
  ],
};

const wizard = {
  name: 'Wizard',
  parentClass: sorcerer,
  questBonus: [...sorcerer.questBonus],
};

const lancer = {
  name: 'Lancer',
  questBonus: [],
};

const templeKnight = {
  name: 'Temple Knight',
  parentClass: lancer,
  questBonus: [
    lt.fallsValleyLakeside,
    lt.ivoryDragonSpring,
    lt.poudValley,
    lt.sunkenTreasure,
  ],
};

const royalGuard = {
  name: 'Royal Guard',
  parentClass: templeKnight,
  questBonus: [...templeKnight.questBonus],
};

const hunter = {
  name: 'Hunter',
  questBonus: [],
};

const archer = {
  name: 'Archer',
  parentClass: hunter,
  questBonus: [
    lt.forestJungleWood,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
    lt.deepestJungle,
  ],
};

const sniper = {
  name: 'Sniper',
  parentClass: archer,
  questBonus: [...archer.questBonus],
};

const bard = {
  name: 'Bard',
  questBonus: [],
};

const minstrel = {
  name: 'Minstrel',
  parentClass: bard,
  questBonus: [
    lt.forestJungleWood,
    lt.isleOfTrembo,
    lt.ivoryDragonSpring,
    lt.poudValley,
    lt.deepestJungle,
  ],
};

const troubadour = {
  name: 'Troubadour',
  parentClass: minstrel,
  questBonus: [...minstrel.questBonus],
};

const dancer = {
  name: 'Dancer',
  questBonus: [],
};

const rogue = {
  name: 'Rogue',
  parentClass: dancer,
  questBonus: [
    lt.ruinsFortWasteland,
    lt.mountainRangeHill,
    lt.alpsPeaks,
    lt.isleOfSeymour,
    lt.forgottenCliffs,
    lt.secretRuins,
  ],
};

const assassin = {
  name: 'Assassin',
  parentClass: rogue,
  questBonus: [...rogue.questBonus],
};

const enchantress = {
  name: 'Enchantress',
  questBonus: [],
};

const sorceress = {
  name: 'Sorceress',
  parentClass: enchantress,
  questBonus: [lt.plainsSnowfield],
};

const witch = {
  name: 'Witch',
  parentClass: sorceress,
  questBonus: [
    lt.ruinsFortWasteland,
    lt.plainsSnowfield,
    lt.isleOfSeymour,
    lt.secretRuins,  
  ],
};

const cleric = {
  name: 'Cleric',
  questBonus: [],
};

const healer = {
  name: 'Healer',
  parentClass: cleric,
  questBonus: [
    lt.plainsSnowfield,
    lt.shrineSanctuary,
    lt.hiddenTreasury,
  ],
};

const saint = {
  name: 'Saint',
  parentClass: healer,
  questBonus: [...healer.questBonus],
};

const heroOfOld = {
  name: 'Hero of Old',
  questBonus: [
    lt.mountainRangeHill,
    lt.alpsPeaks,
    lt.shrineSanctuary,
    lt.isleOfMartha,
    lt.isleOfLennu,
    lt.theManaSpring,
    lt.forgottenCliffs,
  ],
};

const barrett = {
  name: 'Barrett Rookie (Data Incomplete)',
  questBonus: [],
};

const bazoo = {
  name: 'Bazoo (Data Incomplete)',
  questBonus: [
    lt.forestJungleWood,
    lt.ivoryDragonSpring,
  ],
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
  barrett,
  bazoo,
};
