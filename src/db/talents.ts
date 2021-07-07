/* eslint-disable no-plusplus */

import {
  Talent, Addressable, Trait, Linkable, Statement,
} from '@/db/dbTypes';
import stages from '@/db/stages';

let statementId = 1;
const parentType = 'talent';

// talent
const talent: Talent = {
  id: 1,
  name: 'Heiko Beineke',
  positionI18n: {
    de: 'Software Engineer',
    en: 'Software Engineer',
  },
  birthday: new Date('1986-07-18'),
  email: 'heiko.beineke@gmail.com',
  mobilePhone: '0151 555 45 345',
  familyStatusI18n: {
    de: 'verheiratet',
    en: 'married',
  },
  sloganI18n: {
    de: 'Digitale Mehrwerte schaffen',
    en: 'Create digital added valuer',
  },
  sloganLongI18n: {
    de: 'Ich schaffe digitale Mehrwerte, löse knifflige Probleme, treibe lang ersehnten Fortschritt voran, entwickle Produkte die begeistern und helfe Menschen damit einfach großartiger zu sein.',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
};

// addressable
const talentAddressable: Addressable = {
  id: 1,
  addressee: 'Heiko Beineke',
  street: 'Weststr. 1',
  zip: '48565',
  city: 'Steinfurt',
  parentId: talent.id,
  parentType,
};
talent.addressable = talentAddressable;

// traits
const traitGamer: Trait = {
  id: 1,
  titleI18n: {
    de: 'Gamer',
    en: 'Gamer',
  },
  quoteI18n: {
    de: 'Deine Wahrnehmung bestimmt deine Realität. - Qui-Gon Jinn',
    en: 'Your focus determines your reality. - Qui-Gon Jinn',
  },
  url: 'gamer_430x700.jpg',
};

const traitExplorer: Trait = {
  id: 2,
  titleI18n: {
    de: 'Entdecker',
    en: 'Explorer',
  },
  quoteI18n: {
    de: 'Ich habe keine besondere Begabung, sondern bin nur leidenschaftlich neugierig. - Albert Einstein',
    en: 'I have no special talent. I am only passionately curious. - Albert Einstein',
  },
  url: 'explorer_430x700.jpg',
};

const traitAccomplisher: Trait = {
  id: 3,
  titleI18n: {
    de: 'Verwirklicher',
    en: 'Accomplisher',
  },
  quoteI18n: {
    de: 'Wer immer tut, was er schon kann, bleibt immer das, was er schon ist. - Henry Ford',
    en: 'If you always do what you’ve always done, you’ll always get what you’ve always got. - Henry Ford',
  },
  url: 'accomplisher_430x700.jpg',
};
talent.traits = [traitGamer, traitExplorer, traitAccomplisher];

// linkables
const linkGithub: Linkable = {
  id: 1,
  titleI18n: {
    de: 'Github',
    en: 'Github',
  },
  url: 'https://github.com/HBeineke',
  parentId: talent.id,
  parentType,
};

const linkXing: Linkable = {
  id: 2,
  titleI18n: {
    de: 'Xing',
    en: 'Xing',
  },
  url: 'https://www.xing.com/profile/Heiko_Beineke',
  parentId: talent.id,
  parentType,
};

const linkHomepage: Linkable = {
  id: 3,
  titleI18n: {
    de: 'Homepage',
    en: 'Homepage',
  },
  url: 'https://hb-curriculum-vitae.herokuapp.com/',
  parentId: talent.id,
  parentType,
};
talent.linkables = [linkGithub, linkXing, linkHomepage];

// staements
const statementWay: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Das ist der Weg',
    en: 'This is the way',
  },
  descriptionI18n: {
    de: 'Der Weg braucht ein Ziel, sonst kann es sein, dass man im Kreis läuft.',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  icon: 'CogIcon',
};

const statementMultitasking: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Multitasking ist Gift',
    en: 'Multitasking is poison',
  },
  descriptionI18n: {
    de: 'Häufige Kontextwechsel führen dazu, dass Aufgaben nur oberflächlich bearbeitet werden können. ',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  icon: 'CogIcon',
};

const statementInformation: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Informationen sind wie Schmieröl',
    en: 'Information is like lube',
  },
  descriptionI18n: {
    de: 'Wenn an irgendeiner Stelle Informationen fehlen, geraten nachgelagerte Prozesse schnell ins stocken.',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  icon: 'CogIcon',
};

const statementDog: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Hund gut alles gut',
    en: 'Dog good all good',
  },
  descriptionI18n: {
    de: 'Meiner Erfahrung nach kann ein Hund im Büro eine Win-Win-Situation für Mensch und Tier sein.',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  icon: 'CogIcon',
};

const statementRemote: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Das Ergebnis ist was zählt',
    en: 'The result is what counts',
  },
  descriptionI18n: {
    de: 'Ich die Erfahrung gemacht, dass es fast egal ist von wo und wann Leute arbeiten, solange alle motiviert sind, die richtigen Tools einsetzen und alle am gleichen Strang ziehen.',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  icon: 'CogIcon',
};

const statementEssentials: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Das Wesentliche',
    en: 'The essentials',
  },
  descriptionI18n: {
    de: 'Am erfolgreichsten habe ich in Strukturen gearbeitet, wo Menschen sich auf Augenhöhe begegnet sind. ',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  icon: 'ServerIcon',
};
talent.statements = [
  statementWay, statementMultitasking, statementInformation,
  statementDog, statementRemote, statementEssentials,
];

talent.stages = stages;
export default [
  talent,
];
