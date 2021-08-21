/* eslint-disable max-len */
/* eslint-disable no-plusplus */

import {
  Talent, Testimonial, Link, Feature,
} from '@/db/dbTypes';
import stages from '@/db/stages';
import interests from '@/db/interests';

let featureId = 1;
let testimonialId = 1;
let linkId = 1;

// talent
const talent: Talent = {
  id: 1,
  slug: 'heiko',
  name: 'Heiko Beineke',
  icon: 'user-astronaut',
  positionI18n: {
    de: 'Software Engineer',
    en: 'Software Engineer',
  },
  birthday: new Date('1986-07-18'),
  email: 'heiko.beineke@gmail.com',
  familyStatusI18n: {
    de: 'verheiratet',
    en: 'married',
  },
  sloganI18n: {
    de: 'Authentisch, open-minded und committed digitale Mehrwerte schaffen',
    en: 'Creating digital added value in a authentic, open-minded and committed way',
  },
};

// Testimonials
const testimonialGamer: Testimonial = {
  id: testimonialId++,
  staticId: 'gamer',
  quoteI18n: {
    de: 'Ich habe vielseitige Interessen, bin annähernd für jeden Unfug zu haben und verbringe meine Zeit am liebsten mit Familie und Freunden',
    en: 'I have a wide range of interests, I am almost ready for any nonsense and I like to spend my time with family and friends',
  },
  quotedPerson: 'Heiko Beineke',
  url: 'gamer_430x700.jpg',
  icon: 'dice',
};

const testimonialExplorer: Testimonial = {
  id: testimonialId++,
  staticId: 'explorer',
  quoteI18n: {
    de: 'Ich bin open-minded, probiere gerne neue Dinge aus, schätze die Herausforderung, agiere auch mal gerne außerhalb meiner Komfortzone und erfinde mich so immer mal wieder neu',
    en: 'I am open minded, I like to try out new things, I appreciate challenges, I also like to act outside of my comfort zone and I reinvent myself from time to time in that way',
  },
  quotedPerson: 'Heiko Beineke',
  url: 'explorer_430x700.jpg',
  icon: 'hiking',
};

const testimonialAccomplisher: Testimonial = {
  id: testimonialId++,
  staticId: 'accomplisher',
  quoteI18n: {
    de: 'Ich löse knifflige Probleme, treibe ersehnten Fortschritt voran, entwickle Produkte die begeistern, schaffe digitale Mehrwerte und helfe damit Menschen einfach großartiger zu sein',
    en: 'I solve tricky problems, I drive long-awaited progress, I develop products that inspire, I create digital added value and I help people to be just better',
  },
  quotedPerson: 'Heiko Beineke',
  url: 'accomplisher_430x700.jpg',
  icon: 'user-astronaut',
};
talent.testimonials = [testimonialGamer, testimonialExplorer, testimonialAccomplisher];

// links
const linkGithub: Link = {
  id: linkId++,
  titleI18n: {
    de: 'Github',
    en: 'Github',
  },
  icon: 'github',
  url: 'https://github.com/heiheiheiko',
};

const linkXing: Link = {
  id: linkId++,
  titleI18n: {
    de: 'Xing',
    en: 'Xing',
  },
  icon: 'xing',
  url: 'https://www.xing.com/profile/Heiko_Beineke',
};

const linkKickstarter: Link = {
  id: linkId++,
  titleI18n: {
    de: 'Kickstarter',
    en: 'Kickstarter',
  },
  icon: 'kickstarter-k',
  url: 'https://www.kickstarter.com/profile/heiko-beineke',
};

talent.links = [linkKickstarter, linkXing, linkGithub];

// features
const featureAgile: Feature = {
  id: featureId++,
  titleI18n: {
    de: 'Agile Enthusiast',
    en: 'Agile Enthusiast',
  },
  descriptionI18n: {
    de: 'Agile Methoden bieten genau den richtigen Rahmen um als Team über sich hinaus wachsen zu können',
    en: 'Agile methods offer exactly the right framework to grow as a team',
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
    de: 'Ich habe 2 erfahrene Bürohunde im Gepäck, die regelmäßig für gute Laune sorgen und dabei nicht stören',
    en: 'I have 2 experienced office dogs with me, who regularly put people in a good mood and do not disturb them',
  },
  icon: 'dog',
};

const featureRemote: Feature = {
  id: featureId++,
  titleI18n: {
    de: 'Remote-Work',
    en: 'Remote work',
  },
  descriptionI18n: {
    de: 'Hin und wieder bietet Remote-Work den nötigen Abstand, um Dinge einfach mal fertig zu machen',
    en: 'From time to time, remote work provides the necessary distance to just get things done',
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
    de: 'Ein vertrauensvoller und respektvoller Umgang auf Augenhöhe ist der Schlüssel für erfogreiche Zusammenarbeit',
    en: 'A trusting and respectful interaction at eye level is the key to successful cooperation',
  },
  icon: 'people-arrows',
};

const featureCommunication: Feature = {
  id: featureId++,
  titleI18n: {
    de: 'Offeneheit',
    en: 'Openness',
  },
  descriptionI18n: {
    de: 'Offene Gesprächs- und Fehlerkulturen fördern das lösungsorientierte Denken und verringern somit Reaktionzeiten',
    en: 'Open discussion and error cultures promote solution-oriented thinking and thus reduce reaction times',
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
    de: 'Ich lasse mich gerne von einer Vision begeistern und stecke meine kreative Energie am liebsten in digitale Produkte',
    en: 'I like to be inspired by a vision and love to put my creative energy into digital products',
  },
  icon: 'space-shuttle',
};

const featureForward: Feature = {
  id: featureId++,
  titleI18n: {
    de: 'Fortschritt',
    en: 'Progress',
  },
  descriptionI18n: {
    de: 'Wo es sinnvoll ist, versuche ich Fortschritt weiter voranzutreiben, indem ich meine eigenen Erfahrungen miteinbringe',
    en: 'Wherever it makes sense, I try to drive progress forward by bringing in my own experience',
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
    de: 'Gute Arbeit zu leisten ist mir wichtig und regelmäßiges reflektieren hilft mir dabei nicht auf der Stelle zu treten',
    en: 'Doing a good job is important to me and regular reflection helps me not to stand still',
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
    en: 'I really appreciate it when you get together as a team outside of work as well',
  },
  icon: 'dice',
};

talent.features = [
  featureAgile, featureDog, featureRemote,
  featureRespect, featureCommunication, featureVision,
  featureForward, featurePassion, featureFun,
];

talent.stages = stages;
talent.interests = interests;

export default [
  talent,
];
