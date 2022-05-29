const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const popupName = document.querySelector('.popup__desc_elem_name');
const popupJob = document.querySelector('.popup__desc_elem_job');
const popupForm = popup.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

function showPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent; // Получите значение полей jobInput и nameInput из свойства value
    popupJob.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже. 

    // Вставьте новые значения с помощью textContent
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup();
}

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler); 