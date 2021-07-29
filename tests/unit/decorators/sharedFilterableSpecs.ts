/* eslint-disable import/prefer-default-export */
import { Filterable } from '@/types';

export function sharedFilterableSpecs(subject: Filterable): void {
  return describe('Should provide filterable', () => {
    describe('attribute', () => {
      test.each([
        ['isVisible', true],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject as Record<string, any>;
        expect(object[attribute]).toBe(value);
      });
    });

    describe('method', () => {
      describe('show()', () => {
        it('And should set "isVisible to true"', () => {
          subject.isVisible = false;
          subject.show();
          expect(subject.isVisible).toBe(true);
        });
      });
      describe('hide()', () => {
        it('And should set "isVisible to false"', () => {
          subject.isVisible = true;
          subject.hide();
          expect(subject.isVisible).toBe(false);
        });
      });
    });
  });
}
