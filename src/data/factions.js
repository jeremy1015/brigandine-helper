import c from './cities';

import flagGustava from '../img/flag-gustava.png';
import flagGuimoule from '../img/flag-guimoule.png';
import flagMana from '../img/flag-mana.png';
import flagMirelva from '../img/flag-mirelva.png';
import flagNorzaleo from '../img/flag-norzaleo.png';
import flagShinobi from '../img/flag-shinobi.png';

export default {
  gustava: {
    flag: flagGustava,
    name: 'Gustava',
    starterCities: [c.warren, c.belfaram, c.dreug, c.greensglade, c.zagust, c.garwellin],
  },
  norzaleo: {
    flag: flagNorzaleo,
    name: 'Norzaleo',
    starterCities: [c.lorentz, c.marmelmo, c.lanster, c.angrein, c.harmonia],
  },
  shinobi: {
    flag: flagShinobi,
    name: 'Shinobi',
    starterCities: [c.fupai, c.tian, c.mezza, c.katchana, c.koaloopa],
  },
  mirelva: {
    flag: flagMirelva,
    name: 'Mirelva',
    starterCities: [c.minz, c.milveen, c.ilvanny, c.saintGladia, c.balutza, c.portside, c.glan],
  },
  manaSaleesia: {
    flag: flagMana,
    name: 'Mana Saleesia',
    starterCities: [c.alternia, c.sedestoria, c.naridge, c.zai, c.ragrunt, c.galest, c.saladiel, c.norbass, c.anthelnia, c.vestillis],
  },
  guimoule: {
    flag: flagGuimoule,
    name: 'Guimoule',
    starterCities: [c.cornwern, c.ellandol, c.gharghar, c.meraniel, c.orsol, c.angela, c.shumenly, c.drowarn],
  },
  unaligned: {
    name: 'Unaligned',
    starterCities: [],
  },
};
