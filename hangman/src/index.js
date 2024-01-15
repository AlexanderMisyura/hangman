import generatePage from './scripts/generatePage';

let guesses = 0;
let pageElements;
let imageContainer;
let answer;
let counter;
let keyboard;
let alphabet;
let question;

function reGenerate() {
  pageElements = generatePage();
  ({ imageContainer, answer, counter, keyboard, alphabet, question } =
    pageElements);
}
reGenerate();

function checkWin() {
  const answerCells = [...answer.children];
  const isWin = answerCells.every((answerCell) =>
    answerCell.classList.contains('answer__cell_visible')
  );
  if (isWin) {
    console.log('YOU WIN!');

    document.body.innerHTML = '';
    guesses = 0;
    reGenerate();

    // eslint-disable-next-line no-use-before-define
    setListeners();
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
      console.log('GAME OVER');
      document.body.innerHTML = '';
      guesses = 0;
      reGenerate();

      // eslint-disable-next-line no-use-before-define
      setListeners();
    }
  }
}

function setListeners() {
  function getClickedLetter(e) {
    const button = e.target.closest('.key');
    if (!button || button.disabled) return;
    const { key } = button.dataset;
    button.disabled = true;
    checkGuess(key);
  }
  keyboard.addEventListener('click', getClickedLetter);

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
  document.addEventListener('keypress', getPressedLetter);
}

setListeners();
