import OrganizationDecorator from '@/decorators/OrganizationDecorator';
import empireFixture from '../fixtures/organizations/1-empire';

describe('OrganizationDecorator', () => {
  describe('instantiate with a valid organization', () => {
    const subject:Record<string, any> = new OrganizationDecorator(empireFixture);

    describe('Should provide organization attribute', () => {
      test.each([
        ['id', 1],
        ['staticId', 'empire'],
        ['name', 'Galactic Empire'],
        ['street', 'Main road 1'],
        ['zip', '00001'],
        ['city', 'Coruscant'],
        ['website', 'https://galactic-empire.org'],
        ['organizationSize', 'BETWEEN_501_AND_1000'],
        ['branch', 'EDUCATION'],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toBe(value);
      });
    });
    describe('Should provide decorator method', () => {
      it('location()', () => {
        expect(subject.location()).toBe('Main road 1, 00001, Coruscant');
      });
    });
  });
});
