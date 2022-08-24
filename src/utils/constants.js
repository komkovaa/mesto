export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditForm = document.querySelector('.popup__form_type_edit');

export const avatarButton = document.querySelector('.profile__avatar-container');
export const avatarForm = document.querySelector('.popup__form_type_avatar');

export const cardListSelector = '.elements-list';

export const placeAddButton = document.querySelector('.profile__place-add-button');
export const placeAddForm = document.querySelector('.popup__form_type_add-place');
export const placeDeleteButton = document.querySelector('.element__basket');

export const popupImage = document.querySelector('.popup__image');
export const popupName = document.querySelector('.popup__name');
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__desc_type_error',
    errorClass: 'popup__desc-error_active',
    popupTypeAddPlace: '.popup_type_addplace',
    popupFormTypeAddPlace: '.popup__form_type_add-place',
    popupAvatar: '.popup_type_avatar',
    popupFormAvatar: '.popup__form_type_avatar',
    profileAvatar: '.profile__avatar',
    popupTypeEdit: '.popup_type_edit',
    popupFormTypeEdit: '.popup__form_type_edit',
    popupTypeConfirm: '.popup_type_confirm',
    popupFormTypeConfirm: '.popup__form_type_confirm',
    popupTypeFoto: '.popup_type_photo',
    popupImage: '.popup__image',
    popupName: '.popup__name',
    profileName: '.profile__name',
    profileJob: '.profile__job'
}

export const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
    headers:
    {
        authorization: '53e96194-21e8-4c45-ae5c-35a059536ec8',
        'Content-Type': 'application/json'
    }
    //id "280205e9db35dec727bae1c8"
}

/*export const initialCards = [

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
]; */
