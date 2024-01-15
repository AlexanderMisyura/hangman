const questions = [
  {
    id: 1,
    question: 'A human-powered vehicle with two wheels',
    answer: 'BICYCLE',
  },
  {
    id: 2,
    question: 'The star at the center of the Solar System',
    answer: 'SUN',
  },
  { id: 3, question: 'The natural satellite of the Earth', answer: 'MOON' },
  {
    id: 4,
    question: 'A large body of water surrounded by land',
    answer: 'LAKE',
  },
  { id: 5, question: 'A large, slow-moving mass of ice', answer: 'GLACIER' },
  { id: 6, question: 'A large, tropical, seed-bearing fruit', answer: 'MANGO' },
  { id: 7, question: 'The capital city of France', answer: 'PARIS' },
  { id: 8, question: 'A domesticated carnivorous mammal', answer: 'DOG' },
  {
    id: 9,
    question: 'A piece of furniture with a flat top and one or more legs',
    answer: 'TABLE',
  },
  {
    id: 10,
    question: 'A device for capturing visual images in the form of photographs',
    answer: 'CAMERA',
  },
  {
    id: 11,
    question:
      'A large, mainly domesticated game bird, known for its fan-shaped tail and wattled neck',
    answer: 'TURKEY',
  },
  {
    id: 12,
    question:
      'A small creature with eight thin legs that catches insects in a web',
    answer: 'SPIDER',
  },
  { id: 13, question: 'The color of snow', answer: 'WHITE' },
  {
    id: 14,
    question:
      'A sport played between two teams of eleven players with a spherical ball',
    answer: 'FOOTBALL',
  },
  {
    id: 15,
    question:
      'A musical instrument played by striking a row of wooden bars of graduated length',
    answer: 'XYLOPHONE',
  },
];

let lastQuestionId;

export default function getRandomQuestion() {
  let newId;
  let newQuestion;

  do {
    const randomIndex = Math.floor(Math.random() * questions.length);
    newQuestion = questions[randomIndex];
    newId = newQuestion.id;
  } while (lastQuestionId === newId);

  lastQuestionId = newId;
  return newQuestion;
}
