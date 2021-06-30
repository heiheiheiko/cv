import { Applicant, Addressable, Trait } from '@/db/dbTypes';

// applicant
const applicant: Applicant = {
  id: 1,
  birthday: new Date('1986-07-18'),
  email: 'heiko.beineke@gmail.com',
  mobilePhone: '0151 555 45 345',
  familyStatusI18n: {
    de: 'verheiratet',
    en: 'married',
  },
  sloganI18n: {
    de: 'Gamer, Entdecker, Verwirklicher',
    en: 'Gamer, Explorer, Accomplisher',
  },
};

// addressable
const applicantAddressable: Addressable = {
  id: 1,
  person: 'Heiko Beineke',
  street: 'Weststr. 1',
  zip: '48565',
  city: 'Steinfurt',
  parentId: applicant.id,
  parentType: 'Applicant',
};
applicant.addressable = applicantAddressable;

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
applicant.traits = [traitGamer, traitExplorer, traitAccomplisher];

export default [
  applicant,
];
