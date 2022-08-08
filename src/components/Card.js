export class Card {
    constructor(data, cardSelector, handleCardClick) { //data - список аргументов в виде объекта, cardSelector - передаем селектор шаблона (template), handleOpenPopup - функция из index.js
        this._image = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick(this._name, this._image);
        });
    }
}