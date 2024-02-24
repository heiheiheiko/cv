export default {
  general: {
    and: 'und',
  },
  datetime: {
    today: 'Heute',
    year: 'Jahr | Jahre',
    month: 'Monat | Monate',
  },
  resources: {
    feature: {
      name: 'Feature | Features',
    },
    stage: {
      name: 'Stage | Stages',
      attributes: {
        description: 'Beschreibung',
        jobDescription: 'Tätigkeitsbeschreibung',
        isTop: 'Am interessantesten ',
      },
      enums: {
        type: {
          EDUCATIONAL: 'Bildung',
          PROFESSIONAL: 'Karriere',
          PERSONAL: 'Persönlich',
        },
        position: {
          WEB_DEVELOPER: 'Web Developer',
          JUNIOR_SOFTWARE_DEVELOPER: 'Junior Software Developer',
          SOFTWARE_DEVELOPER: 'Software Developer',
        },
        employment: {
          STUDENT_ASSISTANT: 'Studentische Hilfskraft',
          INTERN: 'Praktikant',
          BACHELOR: 'Bachelor',
          EMPLOYEE: 'Angestellter',
        },
      },
    },
    stageSkill: {
      name: 'Eingesetzter Skill | Eingesetzte Skills',
    },
    organization: {
      name: 'Organisation',
      attributes: {
        website: 'Website',
        branch: 'Branche',
        location: 'Standort',
        organizationSize: 'Organisationsgröße',
      },
      enums: {
        organizationSize: {
          BETWEEN_1_AND_10: '1 bis 10 Mitarbeitende',
          BETWEEN_11_AND_50: '11 bis 50 Mitarbeitende',
          BETWEEN_51_AND_200: '51 bis 200 Mitarbeitende',
          BETWEEN_201_AND_500: '201 bis 500 Mitarbeitende',
          BETWEEN_501_AND_1000: '501 bis 1000 Mitarbeitende',
          BETWEEN_1001_AND_5000: '1001 bis 5000 Mitarbeitende',
        },
        branch: {
          MARKETING: 'Online Marketing',
          FOOD: 'Lebensmittel',
          FINANCE: 'Banken und Finanzdienstleistungen',
          AGENCY: 'IT-Systemhaus',
          EDUCATION: 'Bildung',
          CLOUD: 'Cloud',
          HOSTING: 'Hosting',
        },
      },
    },
    skill: {
      name: 'Skill | Skills',
      attributes: {
        isTop: 'Top Skill | Top Skills',
      },
      enums: {
        KEYWORD: 'Buzzword | Buzzwords',
        TECHNOLOGY: 'Technologie | Technologien',
        SOFTWARE: 'Software',
        SOFT: 'Soft Skills',
      },
    },
    interest: {
      name: 'Interesse | Interessen',
    },
  },
};
