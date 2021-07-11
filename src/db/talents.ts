/* eslint-disable no-plusplus */

import {
  Talent, Testimonial, Link, Feature,
} from '@/db/dbTypes';
import stages from '@/db/stages';

let featureId = 1;
let testimonialId = 1;
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

// Testimonials
const testimonialGamer: Testimonial = {
  id: testimonialId++,
  staticId: 'gamer',
  quoteI18n: {
    de: 'Ich habe vielseitige Interessen, bin annähernd für jeden Unfug zu haben, verbringe meine Zeit am liebsten mit Menschen die ich mag und möchte einfach eine gute Zeit haben.',
    en: 'Lorem Ipsum',
  },
  quotedPerson: 'Heiko Beineke',
  quotedPersonPositionI18n: {
    de: 'Gamer',
    en: 'Gamer',
  },
  url: 'gamer_430x700.jpg',
};

const testimonialExplorer: Testimonial = {
  id: testimonialId++,
  staticId: 'explorer',
  quoteI18n: {
    de: 'Ich bin weltoffen, probiere gerne neue Dinge aus, schätze die Herausforderung, agiere auch gerne mal außerhalb meiner Komfortzone und erfinde mich damit immer wieder neu.',
    en: 'Lorem Ipsum',
  },
  quotedPerson: 'Heiko Beineke',
  quotedPersonPositionI18n: {
    de: 'Entdecker',
    en: 'Explorer',
  },
  url: 'explorer_430x700.jpg',
};

const testimonialAccomplisher: Testimonial = {
  id: testimonialId++,
  staticId: 'accomplisher',
  quoteI18n: {
    de: 'Ich schaffe digitale Mehrwerte, löse knifflige Probleme, treibe lang ersehnten Fortschritt voran, entwickle Produkte die begeistern und helfe damit Menschen einfach großartiger zu sein.',
    en: 'Lorem Ipsum',
  },
  quotedPerson: 'Heiko Beineke',
  quotedPersonPositionI18n: {
    de: 'Verwirklicher',
    en: 'Accomplisher',
  },
  url: 'accomplisher_430x700.jpg',
};
talent.testimonials = [testimonialGamer, testimonialExplorer, testimonialAccomplisher];

// links
const linkGithub: Link = {
  id: 1,
  titleI18n: {
    de: 'Github',
    en: 'Github',
  },
  url: 'https://github.com/HBeineke',
};

const linkXing: Link = {
  id: 2,
  titleI18n: {
    de: 'Xing',
    en: 'Xing',
  },
  url: 'https://www.xing.com/profile/Heiko_Beineke',
};

const linkHomepage: Link = {
  id: 3,
  titleI18n: {
    de: 'Homepage',
    en: 'Homepage',
  },
  url: 'https://hb-curriculum-vitae.herokuapp.com/',
};
talent.links = [linkGithub, linkXing, linkHomepage];

// features
const featureAgile: Feature = {
  id: featureId++,
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

const featureDog: Feature = {
  id: featureId++,
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

const featureRemote: Feature = {
  id: featureId++,
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

const featureRespect: Feature = {
  id: featureId++,
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

const featureCommunication: Feature = {
  id: featureId++,
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

const featureVision: Feature = {
  id: featureId++,
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

const featureForward: Feature = {
  id: featureId++,
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

const featurePassion: Feature = {
  id: featureId++,
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

const featureFun: Feature = {
  id: featureId++,
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

talent.features = [
  featureAgile, featureDog, featureRemote,
  featureRespect, featureCommunication, featureVision,
  featureForward, featurePassion, featureFun,
];

talent.stages = stages;
export default [
  talent,
];
