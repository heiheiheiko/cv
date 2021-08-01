import BaseAvatar from '@/components/BaseAvatar.vue';
import MountService from './MountService';

const mountService = new MountService(BaseAvatar);
let subject: any;

describe('BaseAvatar', () => {
  describe('with default props', () => {
    beforeEach(() => {
      const props = { };
      mountService.withProps(props);
      subject = mountService.buildWrapper();
    });

    it('should return an avatar with default size', () => {
      expect(subject.html()).toContain('h-10 w-10');
    });
    it('should return an avatar with default color', () => {
      expect(subject.html()).toContain('bg-gray');
    });
    it('should return an avatar with no gradient color', () => {
      expect(subject.html()).not.toContain('bg-gradient-to-r');
    });
  });

  describe('with size props:', () => {
    it.each([
      ['tiny', 'h-6 w-6'],
      ['small', 'h-8 w-8'],
      ['normal', 'h-10 w-10'],
      ['large', 'h-12 w-12'],
      ['huge', 'h-14 w-14'],
    ])('"%s"', (propValue, expectedClass) => {
      const props = { size: propValue };
      mountService.withProps(props);
      subject = mountService.buildWrapper();

      expect(subject.html()).toContain(expectedClass);
    });
  });

  describe('with color props:', () => {
    it.each([
      ['red', 'bg-red'],
    ])('"%s"', (propValue, expectedClass) => {
      const props = { color: propValue };
      mountService.withProps(props);
      subject = mountService.buildWrapper();

      expect(subject.html()).toContain(expectedClass);
    });
  });

  describe('with color and colorGradient props:', () => {
    it.each([
      ['red', 'blue', 'bg-gradient-to-r from-red to-blue'],
    ])('"%s" and "%s"', (colorValue, colorGradientValue, expectedClass) => {
      const props = { color: colorValue, colorGradient: colorGradientValue };
      mountService.withProps(props);
      subject = mountService.buildWrapper();

      expect(subject.html()).toContain(expectedClass);
    });
  });
});
