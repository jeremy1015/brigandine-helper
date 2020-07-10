const angel = {
  name: 'Angel',
};
const archangel = {
  name: 'Archangel',
  parentClass: [angel],
};
const seraph = {
  name: 'Seraph',
  parentClass: [archangel],
};
const bronzeGolem = {
  name: 'Bronze Golem',
};
const ironGolem = {
  name: 'Iron Golem',
  parentClass: [bronzeGolem],
};
const mithrilGolem = {
  name: 'Mithril Golem',
  parentClass: [ironGolem],
};
const centaur = {
  name: 'Centaur',
};
const highCentaur = {
  name: 'High Centaur',
  parentClass: [centaur],
};
const demon = {
  name: 'Demon',
};
const archdemon = {
  name: 'Archdemon',
  parentClass: [demon],
};
const lilith = {
  name: 'Lilith',
  parentClass: [archdemon],
};
const dragon = {
  name: 'Dragon',
};
const flameDragon = {
  name: 'Flame Dragon',
  parentClass: [dragon],
};
const frostDragon = {
  name: 'Frost Dragon',
  parentClass: [dragon],
};
const thunderDragon = {
  name: 'Thunder Dragon',
  parentClass: [dragon],
};
const holyDragon = {
  name: 'Holy Dragon',
  parentClass: [dragon],
};
const darkDragon = {
  name: 'Dark Dragon',
  parentClass: [dragon],
};
const ancientDragon = {
  name: 'Ancient Dragon',
  parentClass: [flameDragon, frostDragon, thunderDragon, holyDragon, darkDragon],
};
const elemental = {
  name: 'Elemental',
};
const flameElemental = {
  name: 'Flame Elemental',
  parentClass: [elemental],
};
const frostElemental = {
  name: 'Frost Elemental',
  parentClass: [elemental],
};
const thunderElemental = {
  name: 'Thunder Elemental',
  parentClass: [elemental],
};
const holyElemental = {
  name: 'Holy Elemental',
  parentClass: [elemental],
};
const darkElemental = {
  name: 'Dark Elemental',
  parentClass: [elemental],
};
const ghoul = {
  name: 'Ghoul',
};
const revenant = {
  name: 'Revenant',
  parentClass: [ghoul],
};
const lich = {
  name: 'Lich',
  parentClass: [revenant],
};
const giantSnake = {
  name: 'Giant Snake',
};
const seaSerpent = {
  name: 'Sea Serpent',
  parentClass: [giantSnake],
};
const hydra = {
  name: 'Hydra',
  parentClass: [seaSerpent],
};
const gigas = {
  name: 'Gigas',
};
const cyclops = {
  name: 'Cyclops',
  parentClass: [gigas],
};
const goblin = {
  name: 'Goblin',
};
const goblinKnight = {
  name: 'Goblin Knight',
  parentClass: [goblin],
};
const highDog = {
  name: 'High Dog',
};
const hellHound = {
  name: 'Hell Hound',
  parentClass: [highDog],
};
const Fenrir = {
  name: 'Fenrir',
  parentClass: [hellHound],
};
const imp = {
  name: 'Imp',
};
const gremlin = {
  name: 'Gremlin',
  parentClass: [imp],
};
const lizardman = {
  name: 'Lizardman',
};
const highLizardman = {
  name: 'High Lizardman',
  parentClass: [lizardman],
};
const lizardLord = {
  name: 'Lizard Lord',
  parentClass: [highLizardman],
};
const mandrake = {
  name: 'Mandrake',
};
const maneater = {
  name: 'Maneater',
  parentClass: [mandrake],
};
const basilisk = {
  name: 'Basilisk',
  parentClass: [maneater],
};
const roc = {
  name: 'Roc',
};
const phoenix = {
  name: 'Phoenix',
  parentClass: [roc],
};
const simurgh = {
  name: 'Simurgh',
  parentClass: [roc],
};
const mermaid = {
  name: 'Mermaid',
};
const siren = {
  name: 'Siren',
  parentClass: [mermaid],
};
const unicorn = {
  name: 'Unicorn',
};
const pegasus = {
  name: 'Pegasus',
  parentClass: [unicorn],
};
const nightmare = {
  name: 'Nightmare',
  parentClass: [unicorn],
};
const wyvern = {
  name: 'Wyvern',
};
const coatl = {
  name: 'Coatl',
  parentClass: [wyvern],
};
const bahamut = {
  name: 'Bahamut',
  parentClass: [coatl],
};

export default {
  angel,
  archangel,
  seraph,
  bronzeGolem,
  ironGolem,
  mithrilGolem,
  centaur,
  highCentaur,
  demon,
  archdemon,
  lilith,
  dragon,
  flameDragon,
  frostDragon,
  thunderDragon,
  holyDragon,
  darkDragon,
  ancientDragon,
  elemental,
  flameElemental,
  frostElemental,
  thunderElemental,
  holyElemental,
  darkElemental,
  ghoul,
  revenant,
  lich,
  giantSnake,
  seaSerpent,
  hydra,
  gigas,
  cyclops,
  goblin,
  goblinKnight,
  highDog,
  hellHound,
  Fenrir,
  imp,
  gremlin,
  lizardman,
  highLizardman,
  lizardLord,
  mandrake,
  maneater,
  basilisk,
  roc,
  phoenix,
  simurgh,
  mermaid,
  siren,
  unicorn,
  pegasus,
  nightmare,
  wyvern,
  coatl,
  bahamut,
};
