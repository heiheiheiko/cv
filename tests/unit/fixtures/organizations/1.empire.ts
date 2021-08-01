import { BranchEnum, Organization, OrganizationSizeEnum } from '@/db/dbTypes';

export default {
  id: 1,
  staticId: 'empire',
  name: 'Galactic Empire',
  street: 'Core Worlds 1',
  zip: '000l9',
  city: 'Coruscant',
  website: 'https://galactic-empire.org',
  organizationSize: OrganizationSizeEnum.between501And1000,
  branch: BranchEnum.agency,
} as Organization;
