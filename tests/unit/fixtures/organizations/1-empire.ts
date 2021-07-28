import { BranchEnum, Organization, OrganizationSizeEnum } from '@/db/dbTypes';

export default {
  id: 1,
  staticId: 'empire',
  name: 'Galactic Empire',
  street: 'Main road 1',
  zip: '00001',
  city: 'Coruscant',
  website: 'https://galactic-empire.org',
  organizationSize: OrganizationSizeEnum.between501And1000,
  branch: BranchEnum.education,
} as Organization;
