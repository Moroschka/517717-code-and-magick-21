'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const NUMBER_WIZARDS = 4;
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;
const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const showWindowPersonage = function () {
  userDialog.classList.remove(`hidden`);
};
showWindowPersonage();

const showSimilarPersonages = function () {
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
showSimilarPersonages();

const getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

const createWizard = function () {
  const firstWizard = {};

  firstWizard.name = NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)];
  firstWizard.coatColor = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)];
  firstWizard.eyesColor = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];

  return firstWizard;
};

const createWizardsMock = function () {
  let wizardsMock = [];

  for (let i = 0; i < NUMBER_WIZARDS; i++) {
    wizardsMock.push(createWizard());
  }
  return wizardsMock;
};
const wizards = createWizardsMock();

const renderWizard = function (personages) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = personages.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = personages.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = personages.eyesColor;

  return wizardElement;
};
renderWizard(wizards);

const fillingBlockWizard = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
fillingBlockWizard();

