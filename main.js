'use strict';

const numberInput = document.querySelector('.js_number_input');
const button = document.querySelector('.js_button');
const hint = document.querySelector('.js_hint');
const counter = document.querySelector('.js_counter');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

    console.log(getRandomNumber(100));

    let randomNumber = getRandomNumber(100);

    console.log(randomNumber);

function hintMessage() {
const numberInputValue = numberInput.value;
if (numberInputValue > randomNumber) {
    hint.innerHTML = `Pista: Demasiado alto`
} else if (numberInputValue < randomNumber) {
    hint.innerHTML = `Pista: Demasiado bajo`
} else if (numberInputValue == randomNumber) {
    hint.innerHTML = `¡Has ganado, campeona!`
} else if (numberInputValue % 1 === 0) {
    hint.innerHTML = `El número debe estar
    entre 1 y 100`
} else {hint.innerHTML = `El número debe estar
entre 1 y 100`
}};

// function counterMessage() {

// };

function handleClick(e) {
    e.preventDefault();
    hintMessage();
    // counterMessage()
};

button.addEventListener('click', handleClick);