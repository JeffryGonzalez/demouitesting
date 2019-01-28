import { Ui } from '../src/ui';

describe('The User Interface', () => {

    it('creating it', () => {
        const firstNumEl = {};
        firstNumEl.valueAsNumber = 13;

        const secondNumEl = {};
        secondNumEl.valueAsNumber = 15;

        const resultEl = {};

        const addButtonEl = document.createElement('input');
        addButtonEl.type = "button";
        
        document.body.appendChild(addButtonEl);

       
        const ui = new Ui(firstNumEl, secondNumEl, addButtonEl, resultEl);

        
        ui.addButtonEl.click();

        expect(resultEl.innerHTML).toBe(28)

    });
});