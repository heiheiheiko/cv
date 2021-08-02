/* eslint-disable no-plusplus */
import {
  Stage, ReferenceTypes, StageSkill, PositionEnum, EmploymentEnum,
  Organization, OrganizationSizeEnum, BranchEnum,
} from '@/db/dbTypes';
import skills from '@/db/skills';
import { findByStaticIdOrFail } from '@/utils/arrayUtils';

let stageId = 1;
let stageSkillId = 1;
let organizationId = 1;

// organizations
const orgaFhMsWi = {
  id: organizationId++,
  staticId: 'fh-ms-wi',
  name: 'Fachhochschule Münster',
  street: 'Corrensstraße 25',
  zip: '48149',
  city: 'Münster',
  website: 'https://www.fh-muenster.de/wirtschaftsinformatik/index.php',
  organizationSize: OrganizationSizeEnum.between501And1000,
  branch: BranchEnum.education,
} as Organization;

const orgaFuchs = {
  id: organizationId++,
  staticId: 'fuchs',
  name: 'Fuchs Gewürze GmbH',
  street: 'Industriestraße 25',
  zip: '49201',
  city: 'Dissen a.T.W.',
  website: 'http://www.fuchs.de//',
  organizationSize: OrganizationSizeEnum.between1001To5000,
  branch: BranchEnum.food,
} as Organization;

const orgaTvb = {
  id: organizationId++,
  staticId: 'tvb',
  name: 'TV Borghorst',
  street: 'Winkelstraße 22',
  zip: '48565',
  city: 'Steinfurt',
  website: 'http://www.tv-borghorst.de/',
} as Organization;

export default [
  // Geburtstag
  {
    id: stageId++,
    titleI18n: {
      de: 'Geburtstag',
      en: 'Birthday',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('1986-07-18'),
    endedAt: null,
    icon: 'birthday-cake',
    isTop: false,
    isVisible: true,
  },

  // KVG Gesamtschule Nordwalde
  {
    id: stageId++,
    courseI18n: {
      de: 'Realschule',
      en: 'Secondary school',
    },
    type: ReferenceTypes.educational,
    graduationI18n: {
      de: 'Fachoberschulreife',
      en: 'Vocational extension certificate',
    },
    startedAt: new Date('1997-08-01'),
    endedAt: new Date('2003-07-01'),
    icon: 'book',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'kvg',
      name: 'KVG Gesamtschule Nordwalde',
      street: 'Amtmann-Daniel-Straße 30',
      zip: '48356',
      city: 'Nordwalde',
      website: 'https://kvgn.de/',
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'windows'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'office'),
      },
    ] as Array<StageSkill>,
  },

  // Hermann-Emanuel-Berufskolleg
  {
    id: stageId++,
    courseI18n: {
      de: 'Höhere Handelsschule',
      en: 'Commercial college',
    },
    type: ReferenceTypes.educational,
    graduationI18n: {
      de: 'Fachhochschulreife (Wirtschaft)',
      en: 'Advanced college certificate (Commercial)',
    },
    startedAt: new Date('2003-08-01'),
    endedAt: new Date('2005-06-01'),
    icon: 'book',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'hermann',
      name: 'Hermann-Emanuel-Berufskolleg',
      street: 'Bahnhofstraße 28',
      zip: '48565',
      city: 'Steinfurt',
      website: 'https://hermann-emanuel-berufskolleg.de/',
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'windows'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'office'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vba'),
      },
    ] as Array<StageSkill>,
  },

  // met my girl
  {
    id: stageId++,
    titleI18n: {
      de: 'Meine Frau getroffen',
      en: 'Met my wife',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2004-02-22'),
    endedAt: null,
    icon: 'heart',
    isTop: false,
    isVisible: true,
  },

  // Führerschein
  {
    id: stageId++,
    titleI18n: {
      de: 'Führerschein Klasse B',
      en: 'Driving licence',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2006-10-01'),
    endedAt: null,
    icon: 'car',
    isTop: false,
    isVisible: true,
  },

  // Technische Schulen des Kreises Steinfurt
  {
    id: stageId++,
    courseI18n: {
      de: 'Informationstechnischer Assistent',
      en: 'IT assistant',
    },
    descriptionI18n: {
      de: 'Abschluss als Jahrgangsbester',
      en: 'Graduation as best of year',
    },
    type: ReferenceTypes.educational,
    graduationI18n: {
      de: 'Fachhochschulreife (Informatik)',
      en: 'Advanced college certificate (IT)',
    },
    startedAt: new Date('2005-08-01'),
    endedAt: new Date('2008-07-01'),
    icon: 'book',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'tsst',
      name: 'Technische Schulen des Kreises Steinfurt',
      street: 'Liedekerker Str. 84',
      zip: '48565',
      city: 'Steinfurt',
      website: 'https://www.tssteinfurt.de/',
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'windows'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'office'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'c'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'php'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'assembler'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'c#'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'java'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vba'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'eclipse'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'camtasia'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'uml'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mysql'),
      },
    ] as Array<StageSkill>,
  },

  // Verschiedene Aushilfsprofessionals
  {
    id: stageId++,
    titleI18n: {
      de: 'Verschiedene Aushilfsprofessionals',
      en: 'Various backup professionals',
    },
    descriptionI18n: {
      de: 'Martin Oelrich GmbH & Co. KG (Wagenwäscher);Emsdettener Fahrradkurier (Briefzusteller);Movie and More - Videothek (Verkäufer);Biobauernhof (Mädchen für alles);Hermes Logistik Gruppe Deutschland (Paketzusteller);crashtest-service.com GmbH (Datenaufbereitung)',
      en: 'Martin Oelrich GmbH & Co. KG (Car washer);Emsdettener Fahrradkurier (Mail carrier);Movie and More - Video library (Seller);Organic farm (Utility man);Hermes Logistik Gruppe Deutschland (Parcel delivery);crashtest-service.com GmbH (Data preparation)',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2002-03-01'),
    endedAt: new Date('2009-09-01'),
    icon: 'money-bill-alt',
    isTop: false,
    isVisible: true,
  },

  // Fachhochschule Münster (Steinfurt)
  {
    id: stageId++,
    courseI18n: {
      de: 'Angewandte Informatik',
      en: 'Applied computer science',
    },
    type: ReferenceTypes.educational,
    startedAt: new Date('2008-10-01'),
    endedAt: new Date('2010-07-01'),
    icon: 'graduation-cap',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'fh-ms-fb2',
      name: 'Fachhochschule Münster',
      street: 'Bismarckstraße 11',
      zip: '48565',
      city: 'Steinfurt',
      website: 'https://www.fh-muenster.de/fb2/index.php',
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'windows'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'office'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'c'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'java'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'eclipse'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'uml'),
      },
    ] as Array<StageSkill>,
  },

  // Fachhochschule Münster (Studentenprofessional)
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung der Website',
      en: 'Maintenance and further development of the website',
    },
    employment: EmploymentEnum.studentAssistant,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2010-12-01'),
    endedAt: new Date('2011-02-01'),
    icon: 'code',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'fh-ms-fb9',
      name: 'Fachhochschule Münster',
      street: 'Corrensstraße 25',
      zip: '48149',
      city: 'Münster',
      website: 'https://www.fh-muenster.de/fb9/index.php',
      organizationSize: OrganizationSizeEnum.between501And1000,
      branch: BranchEnum.education,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'php'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
    ] as Array<StageSkill>,
  },

  // zeb
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung eines Prototypen',
      en: 'Maintenance and further development of a prototype',
    },
    employment: EmploymentEnum.studentAssistant,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2009-04-01'),
    endedAt: new Date('2011-07-01'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'zeb',
      name: 'zeb/rolfes.schierenbeck.associates GmbH',
      street: 'Hammer Str. 165',
      zip: '48153',
      city: 'Münster',
      website: 'http://www.zeb.de/',
      organizationSize: OrganizationSizeEnum.between501And1000,
      branch: BranchEnum.finance,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jira'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
    ] as Array<StageSkill>,
  },

  // Erste gemeinsame Wohnung
  // {
  //   id: stageId++,
  //   titleI18n: {
  //     de: 'Erste gemeinsame Wohnung',
  //     en: 'First shared apartment',
  //   },
  //   type: ReferenceTypes.personal,
  //   startedAt: new Date('2011-04-22'),
  //   endedAt: new Date('2014-09-22'),
  //   icon: 'home',
  //   isTop: false,
  //   isVisible: true,
  // },

  // gloud GmbH
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung eines Prototypen',
      en: 'Maintenance and further development of a prototype',
    },
    employment: EmploymentEnum.studentAssistant,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2012-01-01'),
    endedAt: new Date('2012-07-01'),
    icon: 'code',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'gloud',
      name: 'gloud GmbH',
      organizationSize: OrganizationSizeEnum.between1And10,
      branch: BranchEnum.cloud,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'php'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'zend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'highcharts'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
    ] as Array<StageSkill>,
  },

  // Fachhochschule Münster (Praktikum)
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Entwurf und Umsetzung einer Anwendung für die Hochschulverwaltung',
      en: 'Design and implementation of an application for the university administration',
    },
    employment: EmploymentEnum.intern,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2012-07-01'),
    endedAt: new Date('2012-09-01'),
    icon: 'code',
    isTop: false,
    isVisible: true,
    organization: orgaFhMsWi,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'process'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rspec'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'capybara'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'windows'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'office'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'google'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
    ] as Array<StageSkill>,
  },

  // Hochzeit
  {
    id: stageId++,
    titleI18n: {
      de: 'Meine Frau geheiratet',
      en: 'Married my wife',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2013-02-22'),
    endedAt: null,
    icon: 'heart',
    isTop: false,
    isVisible: true,
  },

  // Compeon
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung des Online-Finanzportals COMPEON;Bachelorarbeit: Konzeption, Implementierung und Evaluation einer webbasierten Anwendung zur Erfassung der Kundenzufriedenheit und zur Publikation von Kundenempfehlungen im Rahmen des Online-Finanzportals COMPEON',
      en: 'Maintenance and further development of the online financial portal COMPEON;Bachelor Thesis: Conception, implementation and evaluation of a web-based application for recording customer satisfaction and for publishing customer recommendations in the context of the online financial portal COMPEON',
    },
    employment: EmploymentEnum.bachelor,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2013-03-01'),
    endedAt: new Date('2013-09-01'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'compeon',
      name: 'COMPEON GmbH',
      street: 'Am Wehrhahn 100',
      zip: '40211',
      city: 'Düsseldorf',
      website: 'https://www.compeon.de/',
      organizationSize: OrganizationSizeEnum.between501And1000,
      branch: BranchEnum.finance,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rspec'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'capybara'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tower'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'angular'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kanban'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'travis'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'google'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'airbrake'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'basecamp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'heroku'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'postgres'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'lean'),
      },
    ] as Array<StageSkill>,
  },

  // Fachhochschule Münster (Münster)
  {
    id: stageId++,
    courseI18n: {
      de: 'Wirtschaftsinformatik',
      en: 'Business computer science',
    },
    graduationI18n: {
      de: 'Bachelor of science',
      en: 'Bachelor of science',
    },
    type: ReferenceTypes.educational,
    startedAt: new Date('2010-10-01'),
    endedAt: new Date('2013-09-01'),
    icon: 'graduation-cap',
    isTop: true,
    isVisible: true,
    organization: orgaFhMsWi,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'process'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'java'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'php'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rspec'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'capybara'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'eclipse'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'uml'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bpmn'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'google'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mysql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'postgres'),
      },
    ] as Array<StageSkill>,
  },

  // Fuchs (Junior)
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Entwurf und Umsetzung neuer ERP-Anwendungen;Wartung und Weiterentwicklung bestehender ERP-Anwendungen;Entwicklung von REST-Schnittstellen zur Integration verteilter Systeme',
      en: 'Design and implementation of new ERP applications;Maintenance and further development of existing ERP applications;Development of REST interfaces for the integration of distributed systems',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.juniorSoftwareDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2013-12-01'),
    endedAt: new Date('2014-06-01'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: orgaFuchs,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'process'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rspec'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'capybara'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bootstrap'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'redmine'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mac'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kanban'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'google'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'amqp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rabbit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'errbit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'oracle'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tower'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'microservices'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'slack'),
      },
    ] as Array<StageSkill>,
  },

  // Deltacity
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Entwurf und Umsetzung einer individuellen CMS-Lösung',
      en: 'Design and implementation of an individual CMS solution',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2014-06-01'),
    endedAt: new Date('2014-09-01'),
    icon: 'code',
    isTop: false,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'deltacity',
      name: 'deltacityNET Gesellschaft für multimediale Kommunikation mbH & Co. KG',
      street: 'Am Biederlackturm 2',
      zip: '48282',
      city: 'Emsdetten',
      website: 'http://www.deltacity.net',
      organizationSize: OrganizationSizeEnum.between11And50,
      branch: BranchEnum.agency,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'redmine'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sublime'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mac'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sourcetree'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mysql'),
      },
    ] as Array<StageSkill>,
  },

  // Umzug
  // {
  //   id: stageId++,
  //   titleI18n: {
  //     de: 'Umzug in eine größere Wohnung',
  //     en: 'Moving to a larger apartment',
  //   },
  //   type: ReferenceTypes.personal,
  //   startedAt: new Date('2014-10-22'),
  //   endedAt: null,
  //   icon: 'home',
  //   isTop: false,
  //   isVisible: true,
  // },

  // Kung Fu I
  {
    id: stageId++,
    titleI18n: {
      de: 'Kung Fu Training',
      en: 'Kung Fu training',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2010-04-22'),
    endedAt: new Date('2015-07-22'),
    icon: 'hand-rock',
    isTop: false,
    isVisible: true,
    organization: orgaTvb,
  },

  // Hermannsweg
  {
    id: stageId++,
    titleI18n: {
      de: 'Hermannsweg erwandert',
      en: 'Hermannsweg hiked',
    },
    descriptionI18n: {
      de: '8 Tage, 150 km, 2 Bundesländer, 5 Kreise, 1 kaputtes Knie, 1 kaputten Knöchel, 2 kleine Abschürfungen, 1 riesige Blase und einen Haufen Glücksmomente',
      en: '8 days, 150 km, 2 federal states, 1 damaged knee, 1 damaged ankle, 2 small abrasions, 1 huge bladder and a bunch of happy moments',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2016-07-30'),
    endedAt: new Date('2016-08-07'),
    icon: 'hiking',
    isTop: false,
    isVisible: true,
  },

  // Fuchs 2
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Entwurf und Umsetzung neuer ERP-Anwendungen;Wartung und Weiterentwicklung bestehender ERP-Anwendungen;Entwicklung von REST-Schnittstellen zur Integration verteilter Systeme',
      en: 'Design and implementation of new ERP applications;Maintenance and further development of existing ERP applications;Development of REST interfaces for the integration of distributed systems',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.softwareDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2014-10-01'),
    endedAt: new Date('2016-10-31'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: orgaFuchs,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'process'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ruby'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rails'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rspec'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'capybara'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bootstrap'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'redmine'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'atom'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mac'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kanban'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'google'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'amqp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rabbit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'errbit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'oracle'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tower'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'microservices'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'slack'),
      },
    ] as Array<StageSkill>,
  },

  // Geoffrey
  {
    id: stageId++,
    titleI18n: {
      de: 'Herr­chen von Geoffrey',
      en: 'Dog daddy of Geoffrey',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2004-10-16'),
    endedAt: new Date('2018-09-18'),
    icon: 'dog',
    isTop: false,
    isVisible: true,
  },

  // Hermannsweg
  {
    id: stageId++,
    titleI18n: {
      de: 'Eggeweg erwandert',
      en: 'Eggeweg hiked',
    },
    descriptionI18n: {
      de: '5 Tage, 100 km, keine Blessuren und einige unerwartete Bekanntschaften',
      en: '5 days, 100 km, no injuries and some unexpected acquaintances',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2018-07-29'),
    endedAt: new Date('2018-08-03'),
    icon: 'hiking',
    isTop: false,
    isVisible: true,
  },

  // IDB
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung der Influencer Marketing Platform;Hauptverantwortlicher für das Frontend;Einführung von Vue',
      en: 'Maintenance and further development of the Influencer Marketing Platform;Main responsible for the frontend;Introduction of Vue',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2016-11-01'),
    endedAt: new Date('2019-01-01'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'idb',
      name: 'InfluencerDB Tech GmbH & Co. KG',
      organizationSize: OrganizationSizeEnum.between11And50,
      branch: BranchEnum.marketing,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mobile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kanban'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'scrum'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'lean'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'homeoffice'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'officedog'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'python'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'django'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'pytest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'pythonunittest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bootstrap'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bulma'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tailwind'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jquery'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'highcharts'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vue'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'redux'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'storybook'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bitbucket'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gitlab'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kraken'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'pycharm'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vscode'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'trello'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jira'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gimp'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'slack'),
      },
    ] as Array<StageSkill>,
  },

  // Rumo
  {
    id: stageId++,
    titleI18n: {
      de: 'Herr­chen von Rumo',
      en: 'Dog daddy of Rumo',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2019-01-06'),
    endedAt: null,
    icon: 'dog',
    isTop: false,
    isVisible: true,
  },

  // Kung Fu I
  {
    id: stageId++,
    titleI18n: {
      de: 'Kung Fu Training',
      en: 'Kung Fu training',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2020-01-15'),
    endedAt: null,
    icon: 'hand-rock',
    isTop: false,
    isVisible: true,
    organization: orgaTvb,
  },

  // CROWDCODE
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Entwurf und Umsetzung einer PWA zur Planung eines Studiums;Hauptverantwortlicher für das Frontend;Einführung von Vue',
      en: 'Maintenance and further development of a PWA for study planning;Main responsible for the frontend;Introduction of Vue',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2019-06-01'),
    endedAt: new Date('2020-06-30'),
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'crowdcode',
      name: 'CROWDCODE GmbH & Co. KG',
      street: 'Am Mittelhafen 16',
      zip: '48155',
      city: 'Münster',
      website: 'https://www.crowdcode.io/',
      organizationSize: OrganizationSizeEnum.between1And10,
      branch: BranchEnum.agency,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mobile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'scrum'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'homeoffice'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'officedog'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'java'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'junit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'spring'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'openapi'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'css'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sass'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vuetify'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jam'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tailwind'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vue'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'redux'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'cypress'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'gridsome'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'teams'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mac'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'bitbucket'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kraken'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'intellij'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vscode'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'confluence'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jira'),
      },
    ] as Array<StageSkill>,
  },

  // Rumo
  {
    id: stageId++,
    titleI18n: {
      de: 'Herr­chen von Rala',
      en: 'Dog daddy of Rala',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2020-03-14'),
    endedAt: null,
    icon: 'dog',
    isTop: false,
    isVisible: true,
  },

  // adcommander
  {
    id: stageId++,
    descriptionI18n: {
      de: 'Wartung und Weiterentwicklung der Digital Signage Platform; Wartung und Weiterentwicklung der 24/7 Retail REST-Schnittstelle; Einführung von Vue; Mitgestaltung agiler Entwicklungsprozesse;',
      en: 'Maintenance and further development of the digital signage platform; Maintenance and further development of the 24/7 retail REST interface; Introduction of Vue; Participation in designing agile development processes;',
    },
    employment: EmploymentEnum.employee,
    position: PositionEnum.webDeveloper,
    type: ReferenceTypes.professional,
    startedAt: new Date('2020-07-01'),
    endedAt: null,
    icon: 'code',
    isTop: true,
    isVisible: true,
    organization: {
      id: organizationId++,
      staticId: 'adcommander',
      name: 'adcommander GmbH',
      street: 'Lippstädter Str. 54',
      zip: '48155',
      city: 'Münster',
      website: 'https://www.adcommander.de/',
      organizationSize: OrganizationSizeEnum.between11And50,
      branch: BranchEnum.marketing,
    } as Organization,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'project'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'process'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'frontend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'backend'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'softwarequality'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'usability'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mobile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'testing'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'reviews'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'agile'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kanban'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'homeoffice'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'officedog'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'php'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'laravel'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'phpunit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'java'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'spring'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'junit'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'html'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vuetify'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'tailwind'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'js'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vue'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vue3'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'cypress'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'storybook'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'ubuntu'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'git'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'github'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'kraken'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'intellij'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'vscode'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'jira'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'confluence'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'rest'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'openapi'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'microservices'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'slack'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'postman'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'mysql'),
      },
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: findByStaticIdOrFail(skills, 'sql'),
      },
    ] as Array<StageSkill>,
  },

  // Haus
  {
    id: stageId++,
    titleI18n: {
      de: 'Haus gekauft',
      en: 'Bought house',
    },
    type: ReferenceTypes.personal,
    startedAt: new Date('2021-03-30'),
    endedAt: null,
    icon: 'home',
    isTop: false,
    isVisible: true,
  },

] as Array<Stage>;
