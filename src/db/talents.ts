import {
  Talent, Addressable, Trait, Linkable,
} from '@/db/dbTypes';
import stages from '@/db/stages';

// talent
const parentType = 'talent';
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
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
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

talent.stages = stages;
export default [
  talent,
];
