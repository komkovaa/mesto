//Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__desc');

//Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
    // Выбираем элемент ошибки на основе уникального класса 
    const formError = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add('popup__desc_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__desc-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput) => {
    const formError = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove('popup__desc_type_error');
    formError.textContent = '';
    formError.classList.remove('popup__desc-error_active');
}

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(formElement, formInput, formInput.validationMessage);
    } else {
        hideInputError(formElement, formInput);
    }
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__submit_inactive');
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove('popup__submit_inactive');
      buttonElement.removeAttribute('disabled');
    }
  }

const hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
     })
   }; 

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector('.popup__submit');
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
        isValid(formElement, formInput);
        toggleButtonState(inputList, buttonElement);
      });
});
};

const enableValidation = (settings) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, settings);
    });
  };

  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: '.popup__submit_inactive',
    inputErrorClass: '.popup__desc_type_error',
    errorClass: '.popup__desc-error_active'
  }); 