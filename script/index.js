const popups = document.querySelectorAll('.popup');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopupCloseButton = document.querySelector('.popup__close_close_edit');
const profileEditForm = document.querySelector('.popup__form_type_edit');
const profileEditPopup = document.querySelector('.popup_type_edit');

const cardList = document.querySelector('.elements-list');

const placeAddPopup = document.querySelector('.popup_type_addplace'); // rename to popup_type_add-place
const placeAddButton = document.querySelector('.profile__place-add-button');
const placeAddCloseButton = document.querySelector('.popup__close_add');
const placeAddForm = document.querySelector('.popup__form_type_add-place');
const placeAddSubmitButton = document.querySelector('.popup__submit_add');

const photoPopup = document.querySelector('.popup_type_photo');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__desc_type_error',
    errorClass: 'popup__desc-error_active'
}

import { initialCards } from './cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const formValidatorAdd = new FormValidator(config, placeAddForm);
formValidatorAdd.enableValidation();
const formValidatorEdit = new FormValidator(config, profileEditForm);
formValidatorEdit.enableValidation();

function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget.closest('.popup'));
    }
}

function сlosePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

export function showPopup(popup) {
    popup.classList.add('popup_opened');
    
    document.addEventListener('keydown', сlosePopupByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', сlosePopupByEsc);
}

function createCard(item) {
    const card = new Card(item, '.elements');
    return card.generateCard();
}

initialCards.forEach((item) => {     
    //добавляем в DOM
    cardList.prepend(createCard(item));
})

export function handleClosePopup(evt) {
    closePopup(photoPopup);
}

function onProfileEditButtonClick() {
    profileEditForm.profileName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = profileJob.textContent;
    showPopup(profileEditPopup);
}

function onProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditForm.profileName.value;
    profileJob.textContent = profileEditForm.profileJob.value;
    closePopup(profileEditPopup);

}

function disableButton() {
    placeAddSubmitButton.classList.add('popup__submit_inactive');
    placeAddSubmitButton.setAttribute('disabled', true);
}

function onPlaceAddFormSubmit(evt) {
    evt.preventDefault(); 
    cardList.prepend(createCard({ name: placeAddForm.placeName.value, link: placeAddForm.placeLink.value }));
    closePopup(placeAddPopup);
    evt.target.reset(); //очищаем поля формы
    disableButton();
}

profileEditButton.addEventListener('click', onProfileEditButtonClick);
profileEditPopupCloseButton.addEventListener('click', (evt) => closePopup(profileEditPopup));
profileEditForm.addEventListener('submit', onProfileEditFormSubmit);

placeAddButton.addEventListener('click', () => showPopup(placeAddPopup));
placeAddCloseButton.addEventListener('click', (evt) => closePopup(placeAddPopup));
placeAddForm.addEventListener('submit', onPlaceAddFormSubmit);

popups.forEach((popup) => {
    popup.addEventListener('mousedown', closePopupByOverlay);
})