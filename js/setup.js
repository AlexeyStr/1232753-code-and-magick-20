'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var randomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[randomValue(0, 7)] + WIZARD_SURNAMES[randomValue(0, 7)],
    coatColor: COAT_COLOR[randomValue(0, 5)],
    eyesColor: EYES_COLOR[randomValue(0, 4)]
  },
  {
    name: WIZARD_NAMES[randomValue(0, 7)] + WIZARD_SURNAMES[randomValue(0, 7)],
    coatColor: COAT_COLOR[randomValue(0, 5)],
    eyesColor: EYES_COLOR[randomValue(0, 4)]
  },
  {
    name: WIZARD_NAMES[randomValue(0, 7)] + WIZARD_SURNAMES[randomValue(0, 7)],
    coatColor: COAT_COLOR[randomValue(0, 5)],
    eyesColor: EYES_COLOR[randomValue(0, 4)]
  },
  {
    name: WIZARD_NAMES[randomValue(0, 7)] + WIZARD_SURNAMES[randomValue(0, 7)],
    coatColor: COAT_COLOR[randomValue(0, 5)],
    eyesColor: EYES_COLOR[randomValue(0, 4)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');