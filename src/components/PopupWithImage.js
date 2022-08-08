import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor({popupSelector, imagePopupSelector, namePopupSelector}) {
        super(popupSelector);
        this._imagePopup = this._popupElement.querySelector(imagePopupSelector);
        this._namePopup = this._popupElement.querySelector(namePopupSelector);
    }
    open(name, image) {
        super.open();
        this._imagePopup.src = image;
        this._imagePopup.alt = name;
        this._namePopup.textContent = name;
    }
}