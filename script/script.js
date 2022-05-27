let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

function showPopup() {
popup.classList.toggle('popup_opened');
};

function closePopup() {
popup.classList.toggle('popup_opened')
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);