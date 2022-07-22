export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
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

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((formInput) => {
            return !formInput.validity.valid;
        })
    };

    _setEventListeners() {
        // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(formInput);
                this._toggleButtonState(this._inputList, this._buttonElement);
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
