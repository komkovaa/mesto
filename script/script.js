const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopupCloseButton = document.querySelector('.popup__close_close_edit');
const profileEditForm = document.querySelector('.popup__form_type_edit');

const cardList = document.querySelector('.elements-list');
const elementsTemplate = document.querySelector('.elements').content; //Получили содержимое template

const placeAddPopup = document.querySelector('.popup_type_addplace'); // rename to popup_type_add-place
const placeAddButton = document.querySelector('.profile__place-add-button');
const placeAddCloseButton = document.querySelector('.popup__close_add');
const placeAddForm = document.querySelector('.popup__form_type_add-place');

const photoPopup = document.querySelector('.popup_type_photo');
const photoPopupCloseButton = document.querySelector('.popup__close_photo');

function showPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


function createCard (item) {
    const card = elementsTemplate.querySelector('.element').cloneNode(true); 
    const cardImage = card.querySelector('.element__image');
    const cardName = card.querySelector('.element__name');
    cardName.textContent = item.name; 
    cardImage.src = item.link;
    cardImage.alt = item.name;
    
    card.querySelector('.element__chosen').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__chosen_active');
    }); 
    card.querySelector('.element__basket').addEventListener('click', function () {
        card.remove();
    }); 
    cardImage.addEventListener('click', function(event) {
        const popupImage = photoPopup.querySelector('.popup__image');
        const popupName = photoPopup.querySelector('.popup__name');
        popupImage.src = cardImage.src;
        popupImage.alt = cardName.textContent;
        popupName.textContent = cardName.textContent;
        showPopup(photoPopup);
    });

    return card;
}

function renderCards(cardsArray) {
    cardsArray.forEach((item) => {
        cardList.prepend(createCard(item));
    });
}

renderCards(initialCards);


function onProfileEditButtonClick() {
    const popup = document.querySelector('.popup_type_edit');
    profileEditForm.profileName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    profileEditForm.profileJob.value = profileJob.textContent;
    showPopup(popup);
}

function onProfileEditPopupCloseButtonClick(evt) {
    closePopup(evt.currentTarget.closest('.popup'));
}

function onProfileEditFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = profileEditForm.profileName.value;
    profileJob.textContent = profileEditForm.profileJob.value;
    closePopup(evt.currentTarget.closest('.popup'));
}

profileEditButton.addEventListener('click', onProfileEditButtonClick);
profileEditPopupCloseButton.addEventListener('click', onProfileEditPopupCloseButtonClick);
profileEditForm.addEventListener('submit', onProfileEditFormSubmit);

function onPlaceAddButtonClick() {
    showPopup(placeAddPopup);
}

function onPlaceAddCloseButtonClick(evt) {
    closePopup(evt.currentTarget.closest('.popup'));
}

function onPlaceAddFormSubmit(evt) {
    evt.preventDefault(); //отключаем событие по умолчанию
    cardList.prepend(createCard({ name: placeAddForm.placeName.value, link: placeAddForm.placeLink.value }));
    closePopup(evt.currentTarget.closest('.popup'));
    evt.target.reset(); //очищаем поля формы
}

placeAddButton.addEventListener('click', onPlaceAddButtonClick);
placeAddCloseButton.addEventListener('click', onPlaceAddCloseButtonClick);
placeAddForm.addEventListener('submit', onPlaceAddFormSubmit);


function onPhotoPopupCloseButtonClick(evt) {
    closePopup(evt.currentTarget.closest('.popup'));
};

photoPopupCloseButton.addEventListener('click', onPhotoPopupCloseButtonClick);