const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.querySelector('.popup__form_type_edit');

const cardListSelector = '.elements-list';

const placeAddButton = document.querySelector('.profile__place-add-button');
const placeAddForm = document.querySelector('.popup__form_type_add-place');

const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__desc_type_error',
    errorClass: 'popup__desc-error_active'
}

import { initialCards } from '../utils/cards.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const formValidatorAdd = new FormValidator(config, placeAddForm);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, profileEditForm);
formValidatorEdit.enableValidation();

const profileEditPopup = new Popup ('.popup_type_edit');
profileEditPopup.setEventListeners();

const placeAddPopup = new Popup ('.popup_type_addplace');
placeAddPopup.setEventListeners();

const photoPopup = new PopupWithImage (
    '.popup_type_photo',
    '.popup__image',
    '.popup__name',
);
photoPopup.setEventListeners();

function onProfileEditButtonClick() {
    profileEditForm.profileName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = profileJob.textContent;
    profileEditPopup.openPopup();
}

function onProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditForm.profileName.value;
    profileJob.textContent = profileEditForm.profileJob.value;
    profileEditPopup.closePopup();
}

const createCard = (item) => {
    const card = new Card(item, '.elements', handleOpenPopup);
    return card.generateCard();
};

const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        cards.addItem(createCard(item));
    }
    }, 
    cardListSelector
    );
cards.renderItems();

function onPlaceAddFormSubmit(evt) {
    evt.preventDefault(); 
    cards.addItem(createCard({ name: placeAddForm.placeName.value, link: placeAddForm.placeLink.value }));
    placeAddPopup.closePopup();
    evt.target.reset(); //очищаем поля формы
    formValidatorAdd.disableButton();
}

function handleOpenPopup (name, image) {
    popupImage.src = image;
    popupImage.alt = name;
    popupName.textContent = name;
    photoPopup.openPopup(name, image);
}

profileEditButton.addEventListener('click', onProfileEditButtonClick);
profileEditForm.addEventListener('submit', onProfileEditFormSubmit);

placeAddButton.addEventListener('click', () => placeAddPopup.openPopup());
placeAddForm.addEventListener('submit', onPlaceAddFormSubmit);