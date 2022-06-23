const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__desc_elem_name');
const popupJob = document.querySelector('.popup__desc_elem_job');
const popupFormEdit = document.querySelector('.popup__container_type_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardList = document.querySelector('.elements__list');
const elementsTemplate = document.querySelector('.elements').content; //Получили содержимое template

const popupAddplace = document.querySelector('.popup_type_addplace');
const addButton = document.querySelector('.profile__button');
const closeAddButton = document.querySelector('.popup__close_add');
const addPlaceButton = document.querySelector('.popup__submit_add');
const popupAddName = document.querySelector('.popup__desc_place_name');
const popupAddLink = document.querySelector('.popup__desc_place_link');
const popupFormAdd = document.querySelector('.popup__container_type_addplace');

const popupPhoto = document.querySelector('.popup_type_photo');
const cardImage = document.querySelector('.element__image');
const closePhoto = document.querySelector('.popup__close_photo');
const cardName = document.querySelector('.element__name');

const initialCards = [
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
editButton.addEventListener('click', showPopupEdit);
closeButton.addEventListener('click', closePopupEdit);
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
    evt.preventDefault();
    renderCards([{ name: popupAddName.value, link: popupAddLink.value }]);
    closePopupAddplace();
}

addButton.addEventListener('click', showPopupAddplace);
closeAddButton.addEventListener('click', closePopupAddplace);
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

closePhoto.addEventListener('click', closePopupPhoto);