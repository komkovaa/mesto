export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    //Функция, которая добавляет класс с ошибкой
    _showInputError(formInput, errorMessage) {
        // Выбираем элемент ошибки на основе уникального класса 
        const formError = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.add(this._config.inputErrorClass);
        formError.textContent = errorMessage;
        formError.classList.add(this._config.errorClass);
    };

    // Функция, которая удаляет класс с ошибкой
    _hideInputError(formInput) {
        const formError = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.remove(this._config.inputErrorClass);
        formError.textContent = '';
        formError.classList.remove(this._config.errorClass);
    }

    // Функция, которая проверяет валидность поля
    _isValid(formInput) {
        if (!formInput.validity.valid) {
            this._showInputError(formInput, formInput.validationMessage);
        } else {
            this._hideInputError(formInput);
        }
    };

    _clear() {
        const formError = this._formElement.querySelector(`.${formInput.id}-error`);
        formError.textContent = '';
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._config.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((formInput) => {
            return !formInput.validity.valid;
        })
    };

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(formInput);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
        };
}
