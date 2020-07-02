import lt from './location-types';

export default {
  knight: {
    name: 'Knight',
    questBonus: [
      lt.plains,
      lt.highlands,
      lt.sanctuary,
      lt.shrine,
      lt.fortPastous,
    ],
  },
  swordsman: {
    name: 'Swordsman',
    questBonus: [
      lt.forest,
      lt.jungle,
      lt.woodland,
      lt.isleOfTrembo,
      lt.ivoryDragonSpring,
    ],
  },
};
