import { addTwoNumbers } from '../src/calculations';

describe('calculation', () => {
    it('should be able to add a couple of numbers', () => {
        expect(addTwoNumbers(10,3)).toBe(13);
    });

    it('successfully converts two strings', () => {
        
        expect(addTwoNumbers('13', '2')).toBe(15);
    });
})