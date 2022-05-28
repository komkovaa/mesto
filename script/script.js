let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let field1 = document.querySelector('.popup__field1');
let field2 = document.querySelector('.popup__field2');
let popupSubmit = document.querySelector('.popup__submit');


function showPopup() {
    popup.classList.toggle('popup_opened');
};

function closePopup() {
    popup.classList.toggle('popup_opened')
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    field1.getAttribute('value');
    field2.getAttribute('value');
    
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    profileName.textContent = 'Анастасия';
    profileDescription.textContent = 'Студентка';
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupSubmit.addEventListener('submit', formSubmitHandler); 