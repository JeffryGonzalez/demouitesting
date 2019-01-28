import { addTwoNumbers } from './calculations';
export class Ui {

    constructor(firstNumberEl, secondNumberEl, addButtonEl, resultEl) {
        this.firstNumberEl = firstNumberEl;
        this.secondNumberEl = secondNumberEl;
        this.addButtonEl = addButtonEl;
        this.resultEl = resultEl;
        this.resultEl.innerHTML = 'TAcos';
        addButtonEl.addEventListener('click', ()=> {
            const firstNum = this.firstNumberEl.valueAsNumber;
            const secondNum = this.secondNumberEl.valueAsNumber;
            const answer = addTwoNumbers(firstNum, secondNum);
            this.resultEl.innerHTML = answer;
        });
    }

}