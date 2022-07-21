const overlay = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopupCloseButton = document.querySelector('.popup__close_close_edit');
const profileEditForm = document.querySelector('.popup__form_type_edit');

const cardList = document.querySelector('.elements-list');

const placeAddPopup = document.querySelector('.popup_type_addplace'); // rename to popup_type_add-place
const placeAddButton = document.querySelector('.profile__place-add-button');
const placeAddCloseButton = document.querySelector('.popup__close_add');
const placeAddForm = document.querySelector('.popup__form_type_add-place');

const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__desc');
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

function ClosePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}


function showPopup(popup) {
    popup.classList.add('popup_opened');
    //enableValidation();
    //clear();
    document.addEventListener('keydown', ClosePopupByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', ClosePopupByEsc);
}

//Опубликовать карточки
initialCards.forEach((item) => { //Обойти массив и для каждого элемента item
    //Создать экземпляр класса Card
    const card = new Card(item, '.elements');
    const cardElement = card.generateCard();

    //добавляем в DOM
    cardList.prepend(cardElement);
})

function onProfileEditButtonClick() {
    const popup = document.querySelector('.popup_type_edit');
    profileEditForm.profileName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = profileJob.textContent;
    showPopup(popup);
}

function onProfileEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileEditForm.profileName.value;
    profileJob.textContent = profileEditForm.profileJob.value;
    closePopup(evt.currentTarget.closest('.popup'));

}

function onPlaceAddFormSubmit(evt) {
    evt.preventDefault(); //отключаем событие по умолчанию
    const card = new Card({ name: placeAddForm.placeName.value, link: placeAddForm.placeLink.value }, '.elements');
    const cardElement = card.generateCard();
    cardList.prepend(cardElement);

    closePopup(evt.currentTarget.closest('.popup'));
    evt.target.reset(); //очищаем поля формы
}

profileEditButton.addEventListener('click', onProfileEditButtonClick);
profileEditPopupCloseButton.addEventListener('click', (evt) => closePopup(evt.currentTarget.closest('.popup')));
profileEditForm.addEventListener('submit', onProfileEditFormSubmit);

placeAddButton.addEventListener('click', () => showPopup(placeAddPopup));
placeAddCloseButton.addEventListener('click', (evt) => closePopup(evt.currentTarget.closest('.popup')));
placeAddForm.addEventListener('submit', onPlaceAddFormSubmit);

overlay.forEach((popup) => {
    popup.addEventListener('click', closePopupByOverlay);
})