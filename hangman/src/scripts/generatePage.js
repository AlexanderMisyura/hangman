import '../main.scss';

import gallowsSrc from '../assets/img/gallows.png';
import headSrc from '../assets/img/head.png';
import bodySrc from '../assets/img/body.png';
import handOneSrc from '../assets/img/hand-one.png';
import handTwoSrc from '../assets/img/hand-two.png';
import legOneSrc from '../assets/img/leg-one.png';
import legTwoSrc from '../assets/img/leg-two.png';

import getRandomQuestion from './questions';

let hangman;
let wrapper;
let imageContainer;
let gallows;
let head;
let hangBody;
let handOne;
let handTwo;
let legOne;
let legTwo;
let quizContainer;
let answer;
let hint;
let guesses;
let counter;
let keyboard;
let alphabet;
let question;

export default function generatePage() {
  question = getRandomQuestion();

  // eslint-disable-next-line no-console
  console.log('ANSWER >>>>>', question.answer);

  document.body.className = 'page';
  hangman = document.createElement('main');
  hangman.className = 'hangman';
  document.body.append(hangman);

  wrapper = document.createElement('div');
  wrapper.className = 'wrapper hangman__wrapper';
  hangman.append(wrapper);

  imageContainer = document.createElement('section');
  imageContainer.className = 'hangman__image-container';
  wrapper.append(imageContainer);

  gallows = document.createElement('img');
  gallows.className = 'hangman__image hangman__image_gallows';
  gallows.src = gallowsSrc;
  gallows.alt = 'gallows';
  imageContainer.append(gallows);

  head = document.createElement('img');
  head.className = 'hangman__image hangman__image_head';
  head.src = headSrc;
  head.alt = 'head';
  head.dataset.order = 0;
  imageContainer.append(head);

  hangBody = document.createElement('img');
  hangBody.className = 'hangman__image hangman__image_body';
  hangBody.src = bodySrc;
  hangBody.alt = 'body';
  hangBody.dataset.order = 1;
  imageContainer.append(hangBody);

  handOne = document.createElement('img');
  handOne.className = 'hangman__image hangman__image_hand-one';
  handOne.src = handOneSrc;
  handOne.alt = 'hand one';
  handOne.dataset.order = 2;
  imageContainer.append(handOne);

  handTwo = document.createElement('img');
  handTwo.className = 'hangman__image hangman__image_hand-two';
  handTwo.src = handTwoSrc;
  handTwo.alt = 'hand two';
  handTwo.dataset.order = 3;
  imageContainer.append(handTwo);

  legOne = document.createElement('img');
  legOne.className = 'hangman__image hangman__image_leg-one';
  legOne.src = legOneSrc;
  legOne.alt = 'leg one';
  legOne.dataset.order = 4;
  imageContainer.append(legOne);

  legTwo = document.createElement('img');
  legTwo.className = 'hangman__image hangman__image_leg-two';
  legTwo.src = legTwoSrc;
  legTwo.alt = 'leg two';
  legTwo.dataset.order = 5;
  imageContainer.append(legTwo);

  quizContainer = document.createElement('section');
  quizContainer.className = 'hangman__quiz';
  wrapper.append(quizContainer);

  answer = document.createElement('div');
  answer.className = 'answer';
  quizContainer.append(answer);

  question.answer.split('').forEach((_, index) => {
    const cell = document.createElement('div');
    cell.className = 'answer__cell';
    cell.dataset.id = index;
    const letter = document.createElement('div');
    letter.className = 'answer__letter';
    cell.append(letter);
    answer.append(cell);
  });

  hint = document.createElement('p');
  hint.className = 'hangman__text hangman__hint';
  hint.innerText = `Hint: ${question.question}`;
  quizContainer.append(hint);

  guesses = document.createElement('p');
  guesses.className = 'hangman__text';
  guesses.innerText = 'Incorrect guesses: ';
  counter = document.createElement('span');
  counter.className = 'hangman__counter';
  counter.innerText = '0 / 6';
  guesses.append(counter);
  quizContainer.append(guesses);

  keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  quizContainer.append(keyboard);

  alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

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

  return {
    hangman,
    wrapper,
    imageContainer,
    gallows,
    head,
    hangBody,
    handOne,
    handTwo,
    legOne,
    legTwo,
    quizContainer,
    answer,
    hint,
    guesses,
    counter,
    keyboard,
    alphabet,
    question,
  };
}
