const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const popupName = document.querySelector('.popup__name');
const popupDesc = document.querySelector('.popup__desc');

const popupForm = popup.querySelector('.popup__container');


function showPopup() {
    popup.classList.add('popup_opened');
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

    // Получите значение полей jobInput и nameInput из свойства value
    popupName.getAttribute('value');
    popupDesc.getAttribute('value');

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = popupForm.profileName.value;
    profileDescription.textContent = popupForm.profileDesc.value;
    closePopup();
}

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler); 