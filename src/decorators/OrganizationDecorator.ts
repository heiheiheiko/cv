import type { Organization, OrganizationSizeEnum, BranchEnum } from '@/db/dbTypes'

export default class OrganizationDecorator {
  id: number

  staticId: string

  name: string

  street: string | undefined

  zip: string | undefined

  city: string | undefined

  website: string | undefined

  organizationSize: OrganizationSizeEnum | undefined

  branch: BranchEnum | undefined

  constructor(organization: Organization) {
    this.id = organization.id
    this.staticId = organization.staticId
    this.name = organization.name
    this.street = organization.street
    this.zip = organization.zip
    this.city = organization.city
    this.website = organization.website
    this.organizationSize = organization.organizationSize
    this.branch = organization.branch
  }

  location(): string {
    return `${this.street}, ${this.zip}, ${this.city}`
  }
}
