/* eslint-disable no-plusplus */

import {
  Skill, SkillTypes,
} from '@/db/dbTypes';

let skillId = 1;

export default [

  {
    id: skillId++,
    staticId: 'project',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Projektmanagement',
      en: 'Project Management',
    },
  },

  {
    id: skillId++,
    staticId: 'process',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Prozessoptimierung',
      en: 'Process Optimization',
    },
  },

  {
    id: skillId++,
    staticId: 'frontend',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Frontend Development',
      en: 'Frontend Development',
    },
  },

  {
    id: skillId++,
    staticId: 'backend',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Backend Development',
      en: 'Backend Development',
    },
  },

  {
    id: skillId++,
    staticId: 'testing',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Testing',
      en: 'Testing',
    },
  },

  {
    id: skillId++,
    staticId: 'softwarequality',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Softwarequalität',
      en: 'Software Quality',
    },
  },

  {
    id: skillId++,
    staticId: 'usability',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Usability',
      en: 'Usability',
    },
  },

  {
    id: skillId++,
    staticId: 'mobile',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Mobile Optimierung',
      en: 'Mobile Optimization',
    },
  },

  {
    id: skillId++,
    staticId: 'rest',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'REST',
      en: 'REST',
    },
  },

  {
    id: skillId++,
    staticId: 'openapi',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'OpenAPI',
      en: 'OpenAPI',
    },
  },

  {
    id: skillId++,
    staticId: 'microservices',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Microservices',
      en: 'Microservices',
    },
  },

  {
    id: skillId++,
    staticId: 'jam',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'JAMstack',
      en: 'JAMstack',
    },
  },

  {
    id: skillId++,
    staticId: 'agile',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Agil',
      en: 'Agile',
    },
  },

  {
    id: skillId++,
    staticId: 'kanban',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Kanban',
      en: 'Kanban',
    },
  },

  {
    id: skillId++,
    staticId: 'scrum',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Scrum',
      en: 'Scrum',
    },
  },

  {
    id: skillId++,
    staticId: 'reviews',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Code Reviews',
      en: 'Code Reviews',
    },
  },

  {
    id: skillId++,
    staticId: 'lean',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Lean Startup',
      en: 'Lean Startup',
    },
  },

  {
    id: skillId++,
    staticId: 'remote',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Remote Work',
      en: 'Remote Work',
    },
  },

  {
    id: skillId++,
    staticId: 'officedog',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Bürohund',
      en: 'Office dog',
    },
  },

  {
    id: skillId++,
    staticId: 'german',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Deutsch (Muttersprache)',
      en: 'German (Native language)',
    },
  },

  {
    id: skillId++,
    staticId: 'english',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Englisch (B2)',
      en: 'English (B2)',
    },
  },

  {
    id: skillId++,
    staticId: 'assembler',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Assembler',
      en: 'Assembler',
    },
  },

  {
    id: skillId++,
    staticId: 'vba',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Visual Basic',
      en: 'Visual Basic',
    },
  },

  {
    id: skillId++,
    staticId: 'c',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'C',
      en: 'C',
    },
  },

  {
    id: skillId++,
    staticId: 'c#',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'C#',
      en: 'C#',
    },
  },

  {
    id: skillId++,
    staticId: 'java',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Java',
      en: 'Java',
    },
  },

  {
    id: skillId++,
    staticId: 'spring',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Spring Boot',
      en: 'Spring Boot',
    },
  },

  {
    id: skillId++,
    staticId: 'junit',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'JUnit',
      en: 'JUnit',
    },
  },

  {
    id: skillId++,
    staticId: 'php',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'PHP',
      en: 'PHP',
    },
  },

  {
    id: skillId++,
    staticId: 'zend',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Zend Framework',
      en: 'Zend Framework',
    },
  },

  {
    id: skillId++,
    staticId: 'laravel',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Laravel',
      en: 'Laravel',
    },
  },

  {
    id: skillId++,
    staticId: 'phpunit',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'PHPUnit',
      en: 'PHPUnit',
    },
  },

  {
    id: skillId++,
    staticId: 'ruby',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Ruby',
      en: 'Ruby',
    },
  },

  {
    id: skillId++,
    staticId: 'rails',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Ruby on Rails',
      en: 'Ruby on Rails',
    },
  },

  {
    id: skillId++,
    staticId: 'rspec',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'RSpec',
      en: 'RSpec',
    },
  },

  {
    id: skillId++,
    staticId: 'capybara',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Capybara',
      en: 'Capybara',
    },
  },

  {
    id: skillId++,
    staticId: 'python',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Python',
      en: 'Python',
    },
  },

  {
    id: skillId++,
    staticId: 'django',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Django',
      en: 'Django',
    },
  },

  {
    id: skillId++,
    staticId: 'pytest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'pytest',
      en: 'pytest',
    },
  },

  {
    id: skillId++,
    staticId: 'pythonunittest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'unittest (Python)',
      en: 'unittest (Python)',
    },
  },

  {
    id: skillId++,
    staticId: 'js',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'JavaScript',
      en: 'JavaScript',
    },
  },

  {
    id: skillId++,
    staticId: 'ts',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'TypeScript',
      en: 'TypeScript',
    },
  },

  {
    id: skillId++,
    staticId: 'jquery',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'jQuery',
      en: 'jQuery',
    },
  },

  {
    id: skillId++,
    staticId: 'angular',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'AngularJS',
      en: 'AngularJS',
    },
  },

  {
    id: skillId++,
    staticId: 'vue',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vue 2',
      en: 'Vue 2',
    },
  },

  {
    id: skillId++,
    staticId: 'vue3',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vue 3',
      en: 'Vue 3',
    },
  },

  {
    id: skillId++,
    staticId: 'jest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Jest',
      en: 'Jest',
    },
  },

  {
    id: skillId++,
    staticId: 'cypress',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Cypress',
      en: 'Cypress',
    },
  },

  {
    id: skillId++,
    staticId: 'redux',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Redux | Vuex',
      en: 'Redux | Vuex',
    },
  },

  {
    id: skillId++,
    staticId: 'storybook',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Storybook',
      en: 'Storybook',
    },
  },

  {
    id: skillId++,
    staticId: 'gridsome',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Gridsome',
      en: 'Gridsome',
    },
  },

  {
    id: skillId++,
    staticId: 'highcharts',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Highcharts',
      en: 'Highcharts',
    },
  },

  {
    id: skillId++,
    staticId: 'html',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'HTML5',
      en: 'HTML5',
    },
  },

  {
    id: skillId++,
    staticId: 'css',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'CSS3',
      en: 'CSS3',
    },
  },

  {
    id: skillId++,
    staticId: 'sass',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Sass',
      en: 'Sass',
    },
  },

  {
    id: skillId++,
    staticId: 'bootstrap',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Bootstrap',
      en: 'Bootstrap',
    },
  },

  {
    id: skillId++,
    staticId: 'bulma',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Bulma',
      en: 'Bulma',
    },
  },

  {
    id: skillId++,
    staticId: 'tailwind',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Tailwind CSS',
      en: 'Tailwind CSS',
    },
  },

  {
    id: skillId++,
    staticId: 'vuetify',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vuetify',
      en: 'Vuetify',
    },
  },

  {
    id: skillId++,
    staticId: 'sql',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'SQL',
      en: 'SQL',
    },
  },

  {
    id: skillId++,
    staticId: 'oracle',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Oracle',
      en: 'Oracle',
    },
  },

  {
    id: skillId++,
    staticId: 'mysql',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'MySQL',
      en: 'MySQL',
    },
  },

  {
    id: skillId++,
    staticId: 'postgres',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'PostgreSQL',
      en: 'PostgreSQL',
    },
  },

  {
    id: skillId++,
    staticId: 'amqp',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'AMQP',
      en: 'AMQP',
    },
  },

  {
    id: skillId++,
    staticId: 'bpmn',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'BPMN 2.0',
      en: 'BPMN 2.0',
    },
  },

  {
    id: skillId++,
    staticId: 'uml',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'UML',
      en: 'UML',
    },
  },

  {
    id: skillId++,
    staticId: 'windows',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Windows',
      en: 'Windows',
    },
  },

  {
    id: skillId++,
    staticId: 'ubuntu',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Ubuntu',
      en: 'Ubuntu',
    },
  },

  {
    id: skillId++,
    staticId: 'mac',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Mac OS',
      en: 'Mac OS',
    },
  },

  {
    id: skillId++,
    staticId: 'git',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'git',
      en: 'git',
    },
  },

  {
    id: skillId++,
    staticId: 'github',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitHub',
      en: 'GitHub',
    },
  },

  {
    id: skillId++,
    staticId: 'bitbucket',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Bitbucket',
      en: 'Bitbucket',
    },
  },

  {
    id: skillId++,
    staticId: 'gitlab',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitLab',
      en: 'GitLab',
    },
  },

  {
    id: skillId++,
    staticId: 'tower',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Git Tower',
      en: 'Git Tower',
    },
  },

  {
    id: skillId++,
    staticId: 'sourcetree',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'SourceTree',
      en: 'SourceTree',
    },
  },

  {
    id: skillId++,
    staticId: 'kraken',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitKraken',
      en: 'GitKraken',
    },
  },

  {
    id: skillId++,
    staticId: 'vs',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Visual Studio',
      en: 'Visual Studio',
    },
  },

  {
    id: skillId++,
    staticId: 'eclipse',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Eclipse',
      en: 'Eclipse',
    },
  },

  {
    id: skillId++,
    staticId: 'pycharm',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'PyCharm',
      en: 'PyCharm',
    },
  },

  {
    id: skillId++,
    staticId: 'intellij',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'IntelliJ',
      en: 'IntelliJ',
    },
  },

  {
    id: skillId++,
    staticId: 'sublime',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Sublime Text',
      en: 'Sublime Text',
    },
  },

  {
    id: skillId++,
    staticId: 'atom',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Atom',
      en: 'Atom',
    },
  },

  {
    id: skillId++,
    staticId: 'vscode',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Visual Studio Code',
      en: 'Visual Studio Code',
    },
  },

  {
    id: skillId++,
    staticId: 'postman',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Postman',
      en: 'Postman',
    },
  },

  {
    id: skillId++,
    staticId: 'jira',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Jira',
      en: 'Jira',
    },
  },

  {
    id: skillId++,
    staticId: 'basecamp',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Basecamp',
      en: 'Basecamp',
    },
  },

  {
    id: skillId++,
    staticId: 'redmine',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Redmine',
      en: 'Redmine',
    },
  },

  {
    id: skillId++,
    staticId: 'trello',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Trello',
      en: 'Trello',
    },
  },

  {
    id: skillId++,
    staticId: 'confluence',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Confluence',
      en: 'Confluence',
    },
  },

  {
    id: skillId++,
    staticId: 'slack',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Slack',
      en: 'Slack',
    },
  },

  {
    id: skillId++,
    staticId: 'teams',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Microsoft Teams',
      en: 'Microsoft Teams',
    },
  },

  {
    id: skillId++,
    staticId: 'travis',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Travis CI',
      en: 'Travis CI',
    },
  },

  {
    id: skillId++,
    staticId: 'jenkins',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Jenkins',
      en: 'Jenkins',
    },
  },

  {
    id: skillId++,
    staticId: 'airbrake',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Airbrake',
      en: 'Airbrake',
    },
  },

  {
    id: skillId++,
    staticId: 'errbit',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Errbit',
      en: 'Errbit',
    },
  },

  {
    id: skillId++,
    staticId: 'heroku',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Heroku',
      en: 'Heroku',
    },
  },

  {
    id: skillId++,
    staticId: 'rabbit',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'RabbitMQ',
      en: 'RabbitMQ',
    },
  },

  {
    id: skillId++,
    staticId: 'camtasia',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Camtasia Studio',
      en: 'Camtasia Studio',
    },
  },

  {
    id: skillId++,
    staticId: 'gimp',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'GIMP',
      en: 'GIMP',
    },
  },

  {
    id: skillId++,
    staticId: 'office',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'MS Office',
      en: 'MS Office',
    },
  },

  {
    id: skillId++,
    staticId: 'google',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'G Suite',
      en: 'G Suite',
    },
  },

] as Array<Skill>;
