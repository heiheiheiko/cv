import {
  Skill, SkillTypes,
} from '@/db/dbTypes';

export default [

  {
    id: 'project',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Projektmanagement',
      en: 'Project Management',
    },
  },

  {
    id: 'process',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Prozessoptimierung',
      en: 'Process Optimization',
    },
  },

  {
    id: 'frontend',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Frontend Development',
      en: 'Frontend Development',
    },
  },

  {
    id: 'backend',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Backend Development',
      en: 'Backend Development',
    },
  },

  {
    id: 'testing',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Testing',
      en: 'Testing',
    },
  },

  {
    id: 'softwarequality',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Softwarequalität',
      en: 'Software Quality',
    },
  },

  {
    id: 'usability',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Usability',
      en: 'Usability',
    },
  },

  {
    id: 'mobile',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Mobile Optimierung',
      en: 'Mobile Optimization',
    },
  },

  {
    id: 'rest',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'REST',
      en: 'REST',
    },
  },

  {
    id: 'openapi',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'OpenAPI',
      en: 'OpenAPI',
    },
  },

  {
    id: 'microservices',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Microservices',
      en: 'Microservices',
    },
  },

  {
    id: 'jam',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'JAMstack',
      en: 'JAMstack',
    },
  },

  {
    id: 'agile',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Agil',
      en: 'Agile',
    },
  },

  {
    id: 'kanban',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Kanban',
      en: 'Kanban',
    },
  },

  {
    id: 'scrum',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Scrum',
      en: 'Scrum',
    },
  },

  {
    id: 'reviews',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Code Reviews',
      en: 'Code Reviews',
    },
  },

  {
    id: 'lean',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Lean Startup',
      en: 'Lean Startup',
    },
  },

  {
    id: 'homeoffice',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Homeoffice',
      en: 'Homeoffice',
    },
  },

  {
    id: 'officedog',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Bürohund',
      en: 'Office dog',
    },
  },

  {
    id: 'german',
    type: SkillTypes.keyword,
    isTop: false,
    titleI18n: {
      de: 'Deutsch (Muttersprache)',
      en: 'German (Native language)',
    },
  },

  {
    id: 'english',
    type: SkillTypes.keyword,
    isTop: true,
    titleI18n: {
      de: 'Englisch (B2)',
      en: 'English (B2)',
    },
  },

  {
    id: 'assembler',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Assembler',
      en: 'Assembler',
    },
  },

  {
    id: 'vba',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Visual Basic',
      en: 'Visual Basic',
    },
  },

  {
    id: 'c',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'C',
      en: 'C',
    },
  },

  {
    id: 'c#',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'C#',
      en: 'C#',
    },
  },

  {
    id: 'java',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Java',
      en: 'Java',
    },
  },

  {
    id: 'spring',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Spring Boot',
      en: 'Spring Boot',
    },
  },

  {
    id: 'junit',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'JUnit',
      en: 'JUnit',
    },
  },

  {
    id: 'php',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'PHP',
      en: 'PHP',
    },
  },

  {
    id: 'zend',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Zend Framework',
      en: 'Zend Framework',
    },
  },

  {
    id: 'laravel',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Laravel',
      en: 'Laravel',
    },
  },

  {
    id: 'phpunit',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'PHPUnit',
      en: 'PHPUnit',
    },
  },

  {
    id: 'ruby',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Ruby',
      en: 'Ruby',
    },
  },

  {
    id: 'rails',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Ruby on Rails',
      en: 'Ruby on Rails',
    },
  },

  {
    id: 'rspec',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'RSpec',
      en: 'RSpec',
    },
  },

  {
    id: 'capybara',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Capybara',
      en: 'Capybara',
    },
  },

  {
    id: 'python',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Python',
      en: 'Python',
    },
  },

  {
    id: 'django',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Django',
      en: 'Django',
    },
  },

  {
    id: 'pytest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'pytest',
      en: 'pytest',
    },
  },

  {
    id: 'pythonunittest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'unittest (Python)',
      en: 'unittest (Python)',
    },
  },

  {
    id: 'js',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'JavaScript',
      en: 'JavaScript',
    },
  },

  {
    id: 'jquery',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'jQuery',
      en: 'jQuery',
    },
  },

  {
    id: 'angular',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'AngularJS',
      en: 'AngularJS',
    },
  },

  {
    id: 'vue',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vue 2',
      en: 'Vue 2',
    },
  },

  {
    id: 'vue3',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vue 3',
      en: 'Vue 3',
    },
  },

  {
    id: 'jest',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Jest',
      en: 'Jest',
    },
  },

  {
    id: 'cypress',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Cypress',
      en: 'Cypress',
    },
  },

  {
    id: 'redux',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Redux | Vuex',
      en: 'Redux | Vuex',
    },
  },

  {
    id: 'storybook',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Storybook',
      en: 'Storybook',
    },
  },

  {
    id: 'gridsome',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Gridsome',
      en: 'Gridsome',
    },
  },

  {
    id: 'highcharts',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Highcharts',
      en: 'Highcharts',
    },
  },

  {
    id: 'html',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'HTML5',
      en: 'HTML5',
    },
  },

  {
    id: 'css',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'CSS3',
      en: 'CSS3',
    },
  },

  {
    id: 'sass',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Sass',
      en: 'Sass',
    },
  },

  {
    id: 'bootstrap',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Bootstrap',
      en: 'Bootstrap',
    },
  },

  {
    id: 'bulma',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Bulma',
      en: 'Bulma',
    },
  },

  {
    id: 'tailwind',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Tailwind CSS',
      en: 'Tailwind CSS',
    },
  },

  {
    id: 'vuetify',
    type: SkillTypes.technology,
    isTop: true,
    titleI18n: {
      de: 'Vuetify',
      en: 'Vuetify',
    },
  },

  {
    id: 'sql',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'SQL',
      en: 'SQL',
    },
  },

  {
    id: 'oracle',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'Oracle',
      en: 'Oracle',
    },
  },

  {
    id: 'mysql',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'MySQL',
      en: 'MySQL',
    },
  },

  {
    id: 'postgres',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'PostgreSQL',
      en: 'PostgreSQL',
    },
  },

  {
    id: 'amqp',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'AMQP',
      en: 'AMQP',
    },
  },

  {
    id: 'bpmn',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'BPMN 2.0',
      en: 'BPMN 2.0',
    },
  },

  {
    id: 'uml',
    type: SkillTypes.technology,
    isTop: false,
    titleI18n: {
      de: 'UML',
      en: 'UML',
    },
  },

  {
    id: 'windows',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Windows',
      en: 'Windows',
    },
  },

  {
    id: 'ubuntu',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Ubuntu',
      en: 'Ubuntu',
    },
  },

  {
    id: 'mac',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Mac OS',
      en: 'Mac OS',
    },
  },

  {
    id: 'git',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'git',
      en: 'git',
    },
  },

  {
    id: 'github',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitHub',
      en: 'GitHub',
    },
  },

  {
    id: 'bitbucket',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Bitbucket',
      en: 'Bitbucket',
    },
  },

  {
    id: 'gitlab',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitLab',
      en: 'GitLab',
    },
  },

  {
    id: 'tower',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Git Tower',
      en: 'Git Tower',
    },
  },

  {
    id: 'sourcetree',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'SourceTree',
      en: 'SourceTree',
    },
  },

  {
    id: 'kraken',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'GitKraken',
      en: 'GitKraken',
    },
  },

  {
    id: 'vs',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Visual Studio',
      en: 'Visual Studio',
    },
  },

  {
    id: 'eclipse',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Eclipse',
      en: 'Eclipse',
    },
  },

  {
    id: 'pycharm',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'PyCharm',
      en: 'PyCharm',
    },
  },

  {
    id: 'intellij',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'IntelliJ',
      en: 'IntelliJ',
    },
  },

  {
    id: 'sublime',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Sublime Text',
      en: 'Sublime Text',
    },
  },

  {
    id: 'atom',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Atom',
      en: 'Atom',
    },
  },

  {
    id: 'vscode',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Visual Studio Code',
      en: 'Visual Studio Code',
    },
  },

  {
    id: 'postman',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Postman',
      en: 'Postman',
    },
  },

  {
    id: 'jira',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Jira',
      en: 'Jira',
    },
  },

  {
    id: 'basecamp',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Basecamp',
      en: 'Basecamp',
    },
  },

  {
    id: 'redmine',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Redmine',
      en: 'Redmine',
    },
  },

  {
    id: 'trello',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Trello',
      en: 'Trello',
    },
  },

  {
    id: 'confluence',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Confluence',
      en: 'Confluence',
    },
  },

  {
    id: 'slack',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Slack',
      en: 'Slack',
    },
  },

  {
    id: 'teams',
    type: SkillTypes.software,
    isTop: true,
    titleI18n: {
      de: 'Microsoft Teams',
      en: 'Microsoft Teams',
    },
  },

  {
    id: 'travis',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Travis CI',
      en: 'Travis CI',
    },
  },

  {
    id: 'jenkins',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Jenkins',
      en: 'Jenkins',
    },
  },

  {
    id: 'airbrake',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Airbrake',
      en: 'Airbrake',
    },
  },

  {
    id: 'errbit',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Errbit',
      en: 'Errbit',
    },
  },

  {
    id: 'heroku',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Heroku',
      en: 'Heroku',
    },
  },

  {
    id: 'rabbit',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'RabbitMQ',
      en: 'RabbitMQ',
    },
  },

  {
    id: 'camtasia',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'Camtasia Studio',
      en: 'Camtasia Studio',
    },
  },

  {
    id: 'gimp',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'GIMP',
      en: 'GIMP',
    },
  },

  {
    id: 'office',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'MS Office',
      en: 'MS Office',
    },
  },

  {
    id: 'google',
    type: SkillTypes.software,
    isTop: false,
    titleI18n: {
      de: 'G Suite',
      en: 'G Suite',
    },
  },

] as Array<Skill>;
