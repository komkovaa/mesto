export class Card {
    constructor(data, cardSelector, {handleLikeClick, handleDeleteLikeClick, handleDeleteCardClick, handleCardClick}) { //data - список аргументов в виде объекта, cardSelector - передаем селектор шаблона (template), handleOpenPopup - функция из index.js
        this._image = data.link;
        this._name = data.name;
        this._dataOwnerId = data.owner._id;
        this._ownerId = '280205e9db35dec727bae1c8';
        this._cardId = data._id;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteLikeClick = handleDeleteLikeClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
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
        this._deleteButton = this._element.querySelector('.element__basket');
        this._getShowBasket();

        if (this._likes.find(like => like._id === this._ownerId)) {
            this._element.querySelector('.element__chosen').classList.add('element__chosen_active');
        };

        const likeCounter = this._element.querySelector('.element__like-counter');
        likeCounter.textContent = `${this._likes.length}`;
        
        return this._element;
    }

    //Создаем метод, который показывает кнопку Корзина только на мною созданных карточках
    _getShowBasket() {
        if (this._ownerId === this._dataOwnerId) {
            this._deleteButton.classList.add('element__basket_active');
        }
    }

    toggleLike() {
        this._element.querySelector('.element__chosen').classList.toggle('element__chosen_active');
    }

    counterLike(likeArr) {
        const counterValue = this._element.querySelector('.element__like-counter')
        counterValue.textContent = likeArr.length;
    }

    _setLikeHandler() {
        const likeButton = this._element.querySelector('.element__chosen');
        if (likeButton.classList.contains('element__chosen_active')) {
            this._handleDeleteLikeClick()
         } else {
                this._handleLikeClick()
            }
    }

    _setEventListeners() {
        this._element.querySelector('.element__chosen').addEventListener('click', () => 
            this._setLikeHandler()
            //evt.target.classList.toggle('element__chosen_active');
        );

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleDeleteCardClick(this._cardId, this._element);
            //this._element.remove();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        });
    }
}