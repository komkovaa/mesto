import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector, imagePopupSelector, namePopupSelector) {
        super(popupSelector);
        this._imagePopupSelector = this._popupSelector.querySelector(imagePopupSelector);
        this._namePopupSelector = this._popupSelector.querySelector(namePopupSelector);
    }
    openPopup(name, image) {
        super.openPopup();
        this._imagePopupSelector.src = image;
        this._imagePopupSelector.alt = name;
        this._namePopupSelector.textContent = name;
    }
}