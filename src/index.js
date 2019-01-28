import './styles.css';
import { Ui } from './ui';

const firstNumberEl = document.querySelector('#firstNumber');
const secondNumberEl = document.querySelector('#secondNumber');

const addButtonEl = document.querySelector('#btnAdd');
const resultEl = document.querySelector('#result');


new Ui(firstNumberEl, secondNumberEl, addButtonEl, resultEl);

export const PI = 3.1415927;