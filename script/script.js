const popupEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__desc_elem_name');
const popupJob = document.querySelector('.popup__desc_elem_job');
const popupFormEdit = document.querySelector('.popup__container_type_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardList = document.querySelector('.elements-list');
const elementsTemplate = document.querySelector('.elements').content; //Получили содержимое template

const popupAddplace = document.querySelector('.popup_type_addplace');
const buttonAdd = document.querySelector('.profile__button');
const buttonAddClose = document.querySelector('.popup__close_add');
const addPlaceButton = document.querySelector('.popup__submit_add');
const popupAddName = document.querySelector('.popup__desc_place_name');
const popupAddLink = document.querySelector('.popup__desc_place_link');
const popupFormAdd = document.querySelector('.popup__container_type_addplace');

const popupPhoto = document.querySelector('.popup_type_photo');
const cardImage = document.querySelector('.element__image');
const photoClose = document.querySelector('.popup__close_photo');
const cardName = document.querySelector('.element__name');



function showPopupEdit() {
    popupEdit.classList.add('popup_opened');
    popupName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    popupJob.value = profileJob.textContent;
}

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}

function formEditSubmitHandler(evt) {
    evt.preventDefault(); 
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopupEdit();
}

buttonEdit.addEventListener('click', showPopupEdit);
buttonClose.addEventListener('click', closePopupEdit);
popupFormEdit.addEventListener('submit', formEditSubmitHandler);




function showPopupAddplace() {
    popupAddplace.classList.add('popup_opened');
    }

function closePopupAddplace() {
    popupAddplace.classList.remove('popup_opened');
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
        showPopupPhoto (cardImage, cardName);
    });
    return card;
}

function renderCards(cardsArray) {
    cardsArray.forEach((item) =>
    cardList.prepend(createCard(item)));
}
renderCards(initialCards);

function formAddSubmitHandler(evt) {
    evt.preventDefault(); //отключаем событие по умолчанию
    renderCards([{ name: popupAddName.value, link: popupAddLink.value }]);
    closePopupAddplace();
    evt.target.reset(); //очищаем поля формы
}

buttonAdd.addEventListener('click', showPopupAddplace);
buttonAddClose.addEventListener('click', closePopupAddplace);
popupFormAdd.addEventListener('submit', formAddSubmitHandler);


function showPopupPhoto (cardImage, cardName) {
    popupPhoto.querySelector('.popup__image').src = cardImage.src;
    popupPhoto.querySelector('.popup__image').alt = cardName.textContent;
    popupPhoto.querySelector('.popup__name').textContent = cardName.textContent;
    popupPhoto.classList.add('popup_opened');
};

function closePopupPhoto() {
    popupPhoto.classList.remove('popup_opened');
};

photoClose.addEventListener('click', closePopupPhoto);