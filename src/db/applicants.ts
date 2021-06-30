import { Applicant } from '@/db/dbTypes';

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

export default [
  applicant,
];
