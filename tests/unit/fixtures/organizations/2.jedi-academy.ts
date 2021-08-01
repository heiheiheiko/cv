import { BranchEnum, Organization, OrganizationSizeEnum } from '@/db/dbTypes';

export default {
  id: 2,
  staticId: 'telosian-jedi-academy',
  name: 'Telosian jedi academy',
  street: 'Outer Rim Territories 1',
  zip: '000q4',
  city: 'Telos IV',
  website: 'https://telosian-jedi-academy.org',
  organizationSize: OrganizationSizeEnum.between501And1000,
  branch: BranchEnum.education,
} as Organization;
