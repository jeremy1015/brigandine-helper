import rt from './reward-types';
import lt from './location-types';

export default {
  alzusStrait: {
    name: 'Alzus Strait',
    type: lt.strait,
    rewards: [rt.spear, rt.monsterAccessory, rt.monsterHat, rt.monsterRobe, rt.chalice],
  },
  aranForest: {
    name: 'Aran Forest',
    type: lt.forest,
    rewards: [rt.pearl, rt.robe, rt.staff, rt.hat, rt.chalice],
  },
  ariaGreatPlains: {
    name: 'Aria Great Plains',
    type: lt.plains,
    rewards: [rt.sword, rt.helmet, rt.mail, rt.accesory, rt.chalice],
  },
  chimJungle: {
    name: 'Chim Jungle',
    type: lt.jungle,
    rewards: [rt.longsword, rt.leather, rt.dagger, rt.monsterBracer, rt.chalice],
  },
  enduraWastelands: {
    name: 'Endura Wastelands',
    type: lt.wasteland,
    rewards: [rt.claws, rt.monsterAccessory, rt.monsterLeather, rt.monsterBracer, rt.consumable],
  },
  fortPastous: {
    name: 'Fort Pastous',
    type: lt.fortPastous,
    rewards: [rt.staff, rt.monsterLeather, rt.claws, rt.monsterBracer, rt.consumable],
  },
  giranAlps: {
    name: 'Giran Alps',
    type: lt.alps,
    rewards: [rt.rod, rt.monsterBracer, rt.claws, rt.robe, rt.Crystal],
  },
  highlandSnowfield: {
    name: 'Highland Snowfield',
    type: lt.highlands,
    rewards: [rt.teeth, rt.monsterBracer, rt.monsterLeather, rt.monsterAccessory, rt.consumable],
  },
  hillsOfCural: {
    name: 'Hills of Cural',
    type: lt.hill,
    rewards: [rt.fist, rt.leather, rt.pearl, rt.monsterHelmet, rt.consumable],
  },
  hillsOfMadrow: {
    name: 'Hills of Madrow',
    type: lt.hill,
    rewards: [rt.dagger, rt.accesory, rt.bracer, rt.leather, rt.consumable],
  },
};
