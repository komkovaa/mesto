/*import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSelector, handleFormSubmit) {
        super(popupSelector);
        this._formSelector = this._popupSelector.querySelector(formSelector);
        this._handleFormSubmit = handleFormSubmit;

    }
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__desc');
        this._newInputValues = {};
        this._inputList.forEach((inputElement) => {
        this._newInputValues[inputElement.name] = inputElement.value});
        return this._newInputValues
    };

    setEventListeners() {
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._element.resert();
        }
        );
    }

    closePopup()
}*/