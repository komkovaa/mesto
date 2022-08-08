export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditForm = document.querySelector('.popup__form_type_edit');

export const cardListSelector = '.elements-list';

export const placeAddButton = document.querySelector('.profile__place-add-button');
export const placeAddForm = document.querySelector('.popup__form_type_add-place');

export const popupImage = document.querySelector('.popup__image');
export const popupName = document.querySelector('.popup__name');
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__desc_type_error',
    errorClass: 'popup__desc-error_active'
}

export const initialCards = [

    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },

    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },

    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },

    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },

    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },

    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 
