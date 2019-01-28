import { add as add2 } from '../src/math';
import { add } from './utils';
describe('some things', () => {

    it('should behave...', () => {
        expect(2 + 2).toBe(4);
    });
    it('can add DELETE ME', () => {
        expect(add(2,2)).toBe(4);
    });
    it('can add with the _other_ module', () => {
        expect(add2(5,10)).toBe(15);
    });
}); 