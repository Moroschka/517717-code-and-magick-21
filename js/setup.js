'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;
const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);

userDialog.classList.remove(`hidden`);

const getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

const wizards = [
  {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  },
  {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  },
  {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  },
  {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  }
];

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fillingBlockWizard = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
fillingBlockWizard();

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
