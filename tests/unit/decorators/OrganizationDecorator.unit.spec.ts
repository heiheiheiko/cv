import OrganizationDecorator from '@/decorators/OrganizationDecorator';
import empireOrganizationFixture from '../fixtures/organizations/1.empire';

describe('OrganizationDecorator', () => {
  describe('instantiate with a valid organization', () => {
    const subject:Record<string, any> = new OrganizationDecorator(empireOrganizationFixture);

    describe('Should provide organization attribute', () => {
      test.each([
        ['id', 1],
        ['staticId', 'empire'],
        ['name', 'Galactic Empire'],
        ['street', 'Core Worlds 1'],
        ['zip', '000l9'],
        ['city', 'Coruscant'],
        ['website', 'https://galactic-empire.org'],
        ['organizationSize', 'BETWEEN_501_AND_1000'],
        ['branch', 'AGENCY'],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toBe(value);
      });
    });
    describe('Should provide decorator method', () => {
      it('location()', () => {
        expect(subject.location()).toBe('Core Worlds 1, 000l9, Coruscant');
      });
    });
  });
});
