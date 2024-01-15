import generatePage from './scripts/generatePage';

let guesses = 0;
let pageElements;
let imageContainer;
let answer;
let counter;
let keyboard;
let alphabet;
let question;
let modal;
let modalBtn;
let modalContent;

function reGenerate() {
  pageElements = generatePage();
  ({
    imageContainer,
    answer,
    counter,
    keyboard,
    alphabet,
    question,
    modal,
    modalBtn,
    modalContent,
  } = pageElements);
}
reGenerate();

let isWin;

function fillModal() {
  const secretWord = document.createElement('p');
  secretWord.className = 'modal__message';
  secretWord.innerText = `The answer was ${question.answer}`;
  modalContent.prepend(secretWord);

  const message = document.createElement('p');
  if (isWin) {
    message.className = 'modal__message modal__message_win';
    message.innerText = 'Congratulations! You win!';
  } else {
    message.className = 'modal__message modal__message_lose';
    message.innerText = 'Too bad. You lost(';
  }
  modalContent.prepend(message);
}

function startNewGame() {
  document.body.innerHTML = '';
  guesses = 0;
  reGenerate();
  // eslint-disable-next-line no-use-before-define
  setListeners();
}

function checkWin() {
  const answerCells = [...answer.children];
  isWin = answerCells.every((answerCell) =>
    answerCell.classList.contains('answer__cell_visible')
  );
  if (isWin) {
    // eslint-disable-next-line no-use-before-define
    removeListeners();
    fillModal();
    modal.style.display = 'block';
  }
}

function checkGuess(guessedChar) {
  if (question.answer.includes(guessedChar)) {
    const charIndexes = [];
    [...question.answer].forEach((char, index) => {
      if (guessedChar === char) {
        charIndexes.push(index);
      }
    });

    const answerCells = [...answer.children];

    answerCells.forEach((answerCell) => {
      if (charIndexes.includes(Number(answerCell.dataset.id))) {
        const cell = answerCell;
        const letterContainer = cell.firstElementChild;
        letterContainer.innerText = guessedChar;
        cell.classList.add('answer__cell_visible');
      }
    });

    checkWin();
  } else {
    const hangImage = [...imageContainer.children].find(
      (image) => Number(image.dataset.order) === guesses
    );
    hangImage.classList.add('hangman__image_visible');
    guesses += 1;
    counter.innerText = `${guesses} / 6`;

    if (guesses >= 6) {
      // eslint-disable-next-line no-use-before-define
      removeListeners();
      fillModal();
      modal.style.display = 'block';
    }
  }
}

function getClickedLetter(e) {
  const button = e.target.closest('.key');
  if (!button || button.disabled) return;
  const { key } = button.dataset;
  button.disabled = true;
  checkGuess(key);
}

function getPressedLetter(e) {
  const key = e.key.toUpperCase();

  if (alphabet.includes(key)) {
    const button = [...keyboard.querySelectorAll('.key')].find(
      (btn) => btn.dataset.key === key
    );
    if (button.disabled) return;
    button.disabled = true;
    checkGuess(key);
  }
}

function setListeners() {
  keyboard.addEventListener('click', getClickedLetter);
  document.addEventListener('keypress', getPressedLetter);
  modalBtn.addEventListener('click', startNewGame);
}

function removeListeners() {
  keyboard.removeEventListener('click', getClickedLetter);
  document.removeEventListener('keypress', getPressedLetter);
}

setListeners();
