export default {
  general: {
    and: 'and',
  },
  datetime: {
    today: 'Today',
    year: 'year | years',
    month: 'month | months',
  },
  resources: {
    feature: {
      name: 'Feature | Features',
    },
    stage: {
      name: 'Stage of live | Stages of live',
      attributes: {
        description: 'Description',
        jobDescription: 'Job description',
        isTop: 'Most interesting',
      },
      enums: {
        type: {
          EDUCATIONAL: 'Education',
          PROFESSIONAL: 'Carrier',
          PERSONAL: 'Personal',
        },
        position: {
          WEB_DEVELOPER: 'Web Developer',
          JUNIOR_SOFTWARE_DEVELOPER: 'Junior Software Developer',
          SOFTWARE_DEVELOPER: 'Software Developer',
        },
        employment: {
          STUDENT_ASSISTANT: 'Student assistant',
          INTERN: 'Intern',
          BACHELOR: 'Bachelor',
          EMPLOYEE: 'Employee',
        },
      },
    },
    stageSkill: {
      name: 'Skill used | Skills used',
    },
    organization: {
      name: 'Organization',
      attributes: {
        website: 'Website',
        branch: 'Branch',
        location: 'Location',
        organizationSize: 'Organization size',
      },
      enums: {
        organizationSize: {
          BETWEEN_1_AND_10: '1 to 10 employees',
          BETWEEN_11_AND_50: '11 to 50 employees',
          BETWEEN_51_AND_200: '51 to 200 employees',
          BETWEEN_201_AND_500: '201 to 500 employees',
          BETWEEN_501_AND_1000: '501 to 1000 employees',
          BETWEEN_1001_AND_5000: '1001 to 5000 employees',
        },
        branch: {
          MARKETING: 'Online Marketing',
          FOOD: 'Food',
          FINANCE: 'Banking and financial services',
          AGENCY: 'IT system house',
          EDUCATION: 'Education',
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
        TECHNOLOGY: 'Technology | Technologies',
        SOFTWARE: 'Software',
        SOFT: 'Soft Skills',
      },
    },
    interest: {
      name: 'Interest | Interests',
    },
  },
};
