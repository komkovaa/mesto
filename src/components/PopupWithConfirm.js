import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor({popupSelector, formSelector, handleFormSubmit}) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector(formSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    open(cardId, cardElement) {
        super.open();
        this._cardId = cardId;
        this._cardToDelete = cardElement;
      }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardId, this._cardToDelete);
            this.close();
        }
        );
    }
}