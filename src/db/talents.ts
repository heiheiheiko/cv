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
const statementAgile: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Agile Enthusiast',
    en: 'Agile Enthusiast',
  },
  descriptionI18n: {
    de: 'Agile Methoden bieten den Rahmen um als Team über sich hinaus zu wachsen',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'sync',
};

const statementDog: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Rudelführer',
    en: 'Pack leader',
  },
  descriptionI18n: {
    de: 'Ich habe 2 erfahrene Office-Hunde im Gepäck, die regelmäßig für gute Laune sorgen',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'dog',
};

const statementRemote: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Remote Work',
    en: 'Remote Work',
  },
  descriptionI18n: {
    de: 'Hin und wieder bietet das heimische Büro den nötigen Abstand, um Dinge einfach mal fertig zu machen',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'home',
};

const statementRespect: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Respektvolles Miteinander',
    en: 'Respectful togetherness',
  },
  descriptionI18n: {
    de: 'Ein vertrauensvoller und respektvoller Umgang auf Augenhöhe ist für mich eine Selbstverständlichkeit',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'people-arrows',
};

const statementCommunication: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Offene Kommunikation',
    en: 'Open communication',
  },
  descriptionI18n: {
    de: 'Ich mache auch mal auf Probleme aufmerksam und beteilige mich aktiv an der Lösung',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'comments',
};

const statementVision: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Produktvision',
    en: 'Product vision',
  },
  descriptionI18n: {
    de: 'Ich lasse mich gerne begeistern und nutze meine kreative Energie am liebsten um ein Produkt zu formen',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'space-shuttle',
};

const statementForward: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Dinge vorantreiben',
    en: 'Moving things forward',
  },
  descriptionI18n: {
    de: 'Wenn Gestaltungsspielräume vorhanden sind, bringe ich auch gerne mal eigene Ideen mit ein',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'cogs',
};

const statementPassion: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Leidenschaft',
    en: 'Passion',
  },
  descriptionI18n: {
    de: 'Ich identifiziere mich mit meiner Arbeit und habe hohe Ansprüche an mich selbst',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'user-astronaut',
};

const statementFun: Statement = {
  id: statementId++,
  titleI18n: {
    de: 'Why so serious?',
    en: 'Why so serious?',
  },
  descriptionI18n: {
    de: 'Ich schätze es sehr, wenn man als Team auch mal abseits der Arbeit zusammenkommt',
    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  icon: 'dice',
};

talent.statements = [
  statementAgile, statementDog, statementRemote,
  statementRespect, statementCommunication, statementVision,
  statementForward, statementPassion, statementFun,
];

talent.stages = stages;
export default [
  talent,
];
