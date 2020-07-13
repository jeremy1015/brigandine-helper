import cat from './item-categories';
import accessory from '../img/itemtype/accessory.png';
import armorHeavy from '../img/itemtype/armor-heavy.png';
import armorLight from '../img/itemtype/armor-light.png';
import armorMedium from '../img/itemtype/armor-medium.png';
import axe from '../img/itemtype/axe.png';
import bow from '../img/itemtype/bow.png';
import chalice from '../img/itemtype/chalice.png';
import claws from '../img/itemtype/claws.png';
import consumable from '../img/itemtype/consumable.png';
import crystal from '../img/itemtype/crystal.png';
import dagger from '../img/itemtype/dagger.png';
import fangs from '../img/itemtype/fangs.png';
import gloves from '../img/itemtype/gloves.png';
import hat from '../img/itemtype/hat.png';
import helmet from '../img/itemtype/helmet.png';
import hooves from '../img/itemtype/hooves.png';
import instrument from '../img/itemtype/instrument.png';
import knuckles from '../img/itemtype/knuckles.png';
import lance from '../img/itemtype/lance.png';
import mAccessory from '../img/itemtype/m-accessory.png';
import mArmorHeavy from '../img/itemtype/m-armor-heavy.png';
import mArmorLight from '../img/itemtype/m-armor-light.png';
import mArmorMedium from '../img/itemtype/m-armor-medium.png';
import mGloves from '../img/itemtype/m-gloves.png';
import mHat from '../img/itemtype/m-hat.png';
import mHelmet from '../img/itemtype/m-helmet.png';
import orb from '../img/itemtype/orb.png';
import rod from '../img/itemtype/rod.png';
import sabre from '../img/itemtype/sabre.png';
import staff from '../img/itemtype/staff.png';
import sword from '../img/itemtype/sword.png';
import twinDaggers from '../img/itemtype/twin-daggers.png';

export default {
  accessory: { name: 'Accessory', category: cat.accessory, img: accessory },
  axe: { name: 'Axe', category: cat.weapon, img: axe },
  bow: { name: 'Bow', category: cat.weapon, img: bow },
  bracer: { name: 'Bracer', category: cat.secondaryArmor, img: gloves },
  chalice: { name: 'Chalice', category: cat.consumable, img: chalice },
  claws: { name: 'Claws', category: cat.weapon, img: claws },
  consumable: { name: 'Consumable', category: cat.consumable, img: consumable },
  crystal: { name: 'Crystal', category: cat.consumable, img: crystal },
  dagger: { name: 'Dagger', category: cat.weapon, img: dagger },
  dualDaggers: { name: 'Dual Daggers', category: cat.weapon, img: twinDaggers },
  fist: { name: 'Fist', category: cat.weapon, img: knuckles },
  hat: { name: 'Hat', category: cat.secondaryArmor, img: hat },
  helmet: { name: 'Helmet', category: cat.secondaryArmor, img: helmet },
  horseshoe: { name: 'Horseshoe', category: cat.weapon, img: hooves },
  leather: { name: 'Leather', category: cat.armor, img: armorMedium },
  longsword: { name: 'Longsword', category: cat.weapon, img: sabre },
  mail: { name: 'Mail', category: cat.armor, img: armorHeavy },
  robe: { name: 'Robe', category: cat.armor, img: armorLight },
  monsterAccessory: { name: 'Accessory (Monster)', category: cat.accessory, img: mAccessory },
  monsterBracer: { name: 'Bracer (Monster)', category: cat.secondaryArmor, img: mGloves },
  monsterHat: { name: 'Hat (Monster)', category: cat.secondaryArmor, img: mHat },
  monsterHelmet: { name: 'Helmet (Monster)', category: cat.secondaryArmor, img: mHelmet },
  monsterLeather: { name: 'Leather (Monster)', category: cat.armor, img: mArmorMedium },
  monsterMail: { name: 'Mail (Monster)', category: cat.armor, img: mArmorHeavy },
  monsterRobe: { name: 'Robe (Monster)', category: cat.armor, img: mArmorLight },
  pearl: { name: 'Pearl', category: cat.weapon, img: orb },
  rod: { name: 'Rod', category: cat.weapon, img: rod },
  spear: { name: 'Spear', category: cat.weapon, img: lance },
  staff: { name: 'Staff', category: cat.weapon, img: staff },
  sword: { name: 'Sword', category: cat.weapon, img: sword },
  teeth: { name: 'Teeth', category: cat.weapon, img: fangs },
  instrument: { name: 'Instrument', category: cat.weapon, img: instrument },
};
