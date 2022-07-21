/*
const formElement = document.querySelector('.popup__form');
const formInput = document.querySelector('.popup__desc');
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__desc',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__desc_type_error',
    errorClass: 'popup__desc-error_active'
}

//Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage, config) => {
    // Выбираем элемент ошибки на основе уникального класса 
    const formError = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(config.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput, config) => {
    const formError = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(config.inputErrorClass);
    formError.textContent = '';
    formError.classList.remove(config.errorClass);
}

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput, config) => {
    if (!formInput.validity.valid) {
        showInputError(formElement, formInput, formInput.validationMessage, config);
    } else {
        hideInputError(formElement, formInput, config);
    }
};

const clear = () => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formError.textContent = '';
}

const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

const hasInvalidInput = (inputList) => { //проверяет, все ли поля форма валидны
    return inputList.some((formInput) => {
        return !formInput.validity.valid;
     })
   }; 

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
        isValid(formElement, formInput, config);
        toggleButtonState(inputList, buttonElement, config);
      });
});
};

const enableValidation = (formElement, config) => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, config);
    });
  };