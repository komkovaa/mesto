const popupElement = document.querySelector('.popup_type_photo');
const popupImage = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
const photoPopupCloseButton = document.querySelector('.popup__close_photo');
import { showPopup } from './index.js';
import { closePopup } from './index.js';

export class Card {
    constructor(data, cardSelector) { //data - список аргументов в виде объекта, cardSelector - передаем селектор шаблона (template)
        this._image = data.link;
        this._name = data.name;
        this._popup = document.querySelector('.popup');
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement; //Возвращает разметку карточки через return
    }

    //Создаем метод, который вставит данные в разметку и подготовит карточку к публикации. 
    generateCard() {
        this._setEventListeners();

        this._cardImage.src = this._image;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__name').textContent = this._name;

        return this._element;
    }

    _setEventListeners() {

        this._element.querySelector('.element__chosen').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__chosen_active');
        });

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._element.remove();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleOpenPopup()
        });

        photoPopupCloseButton.addEventListener('click', () => {
            this._handleClosePopup()
        });
    }

  

    _handleOpenPopup() {
        popupImage.src = this._image;
        popupImage.alt = this._name;
        popupName.textContent = this._name;
        showPopup(popupElement);
    }

    _handleClosePopup() {
        popupImage.src = '';
        closePopup(popupElement);
    }
}