import './main.scss';

import gallowsSrc from './assets/img/gallows.png';
import headSrc from './assets/img/head.png';
import bodySrc from './assets/img/body.png';
import handOneSrc from './assets/img/hand-one.png';
import handTwoSrc from './assets/img/hand-two.png';
import legOneSrc from './assets/img/leg-one.png';
import legTwoSrc from './assets/img/leg-two.png';

document.body.className = 'page';
const hangman = document.createElement('main');
hangman.className = 'hangman';
document.body.append(hangman);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper hangman__wrapper';
hangman.append(wrapper);

const imageContainer = document.createElement('section');
imageContainer.className = 'hangman__image-container';
wrapper.append(imageContainer);

const gallows = document.createElement('img');
gallows.className = 'hangman__image hangman__image_gallows';
gallows.src = gallowsSrc;
gallows.alt = 'gallows';
imageContainer.append(gallows);

const head = document.createElement('img');
head.className = 'hangman__image hangman__image_head';
head.src = headSrc;
head.alt = 'head';
head.dataset.order = 0;
imageContainer.append(head);

const hangBody = document.createElement('img');
hangBody.className = 'hangman__image hangman__image_body';
hangBody.src = bodySrc;
hangBody.alt = 'body';
hangBody.dataset.order = 1;
imageContainer.append(hangBody);

const handOne = document.createElement('img');
handOne.className = 'hangman__image hangman__image_hand-one';
handOne.src = handOneSrc;
handOne.alt = 'hand one';
handOne.dataset.order = 2;
imageContainer.append(handOne);

const handTwo = document.createElement('img');
handTwo.className = 'hangman__image hangman__image_hand-two';
handTwo.src = handTwoSrc;
handTwo.alt = 'hand two';
handTwo.dataset.order = 3;
imageContainer.append(handTwo);

const legOne = document.createElement('img');
legOne.className = 'hangman__image hangman__image_leg-one';
legOne.src = legOneSrc;
legOne.alt = 'leg one';
legOne.dataset.order = 4;
imageContainer.append(legOne);

const legTwo = document.createElement('img');
legTwo.className = 'hangman__image hangman__image_leg-two';
legTwo.src = legTwoSrc;
legTwo.alt = 'leg two';
legTwo.dataset.order = 5;
imageContainer.append(legTwo);

const quizContainer = document.createElement('section');
quizContainer.className = 'hangman__quiz';
wrapper.append(quizContainer);

const answer = document.createElement('div');
answer.className = 'answer';
quizContainer.append(answer);

// replace with actual answer
const tempWord = 'sausage';
tempWord.split('').forEach((char) => {
  const cell = document.createElement('div');
  cell.className = 'answer__cell';
  const letter = document.createElement('div');
  letter.className = 'answer__letter';
  letter.dataset.letter = char;
  cell.append(letter);
  answer.append(cell);
});

const hint = document.createElement('p');
hint.className = 'hangman__text hangman__hint';
// replace with hint
const tempHint = 'Here is a good hint for this question';
hint.innerText = `Hint: ${tempHint}`;
quizContainer.append(hint);

const guesses = document.createElement('p');
guesses.className = 'hangman__text';
guesses.innerText = 'Incorrect guesses: ';
const counter = document.createElement('span');
counter.className = 'hangman__counter';
const tries = 0;
counter.innerText = `${tries} / 6`;
counter.dataset.tries = tries;
guesses.append(counter);
quizContainer.append(guesses);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
quizContainer.append(keyboard);

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);

let keyRow;
alphabet.forEach((char, index, array) => {
  if (!keyRow) {
    keyRow = document.createElement('div');
    keyRow.className = 'keyboard__key-row';
  }
  const key = document.createElement('button');
  key.className = 'keyboard__key key';
  key.dataset.key = char;
  key.innerText = char;
  keyRow.append(key);
  if (keyRow.childElementCount >= 9 || index === array.length - 1) {
    keyboard.append(keyRow);
    keyRow = null;
  }
});
