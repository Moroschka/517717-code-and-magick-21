'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const NUMBER_WIZARDS = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;
const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogClose = document.querySelector(`.setup-close`);
const userIcon = document.querySelector(`.setup-open-icon`);
const userNameInput = document.querySelector(`.setup-user-name`);
const wizardCoat = userDialog.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = userDialog.querySelector(`.setup-wizard .wizard-eyes`);
const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);

const showSimilarPersonages = function () {
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
showSimilarPersonages();

const getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
};

const createWizard = function () {
  return {
    name: NAMES[getRandomNumber(0, NAMES.length)] + ` ` + SURNAMES[getRandomNumber(0, SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
  };
};

const createWizardsMock = function () {
  let wizardsMock = [];

  for (let i = 0; i < NUMBER_WIZARDS; i++) {
    wizardsMock.push(createWizard());
  }
  return wizardsMock;
};
const wizards = createWizardsMock();

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fillBlockWizard = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
fillBlockWizard();

const onPopupEscPress = function(evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
}

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
}

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
}

userDialogOpen.addEventListener(`click`, function () {
  openPopup();
});

userDialogOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

userDialogClose.addEventListener(`click`, function () {
  closePopup();
});

userDialogClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

userNameInput.addEventListener(`input`, function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) +` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) +` символы`);
  } else {
    userNameInput.setCustomValidity(``);
}

  userNameInput.reportValidity();
});

wizardEyes.addEventListener(`click`, function () {
    wizardEyes.style.fill = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];
});

wizardCoat.addEventListener(`click`, function () {
    wizardCoat.style.fill = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)];
});

wizardFireball.addEventListener(`click`, function () {
    wizardFireball.style.backgroundColor = FIREBALL_COLORS[getRandomNumber(0, FIREBALL_COLORS.length)];
});
