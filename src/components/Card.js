export class Card {
    constructor(data, ownerId, cardSelector, {handleLikeClick, handleDeleteLikeClick, handleDeleteCardClick, handleCardClick}) { //data - список аргументов в виде объекта, cardSelector - передаем селектор шаблона (template), handleOpenPopup - функция из index.js
        this._image = data.link;
        this._name = data.name;
        this._dataOwnerId = data.owner._id;
        this._ownerId = ownerId;
        this._cardId = data._id;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__chosen');
        this._likeCounter = this._element.querySelector('.element__like-counter');
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
            this._likeButton.classList.add('element__chosen_active');
        };
        
        this._likeCounter.textContent = `${this._likes.length}`;
        
        return this._element;
    }

    //Метод, который показывает кнопку Корзина только на мною созданных карточках
    _getShowBasket() {
        if (this._ownerId === this._dataOwnerId) {
            this._deleteButton.classList.add('element__basket_active');
        }
    }
    
    //Метод меняет состояние кнопки
    toggleLike() {
        this._likeButton.classList.toggle('element__chosen_active');
    }

    counterLike(likeArr) {
        this._likeCounter.textContent = likeArr.length;
    }

    _setLikeHandler() {
        if (this._likeButton.classList.contains('element__chosen_active')) {
            this._handleDeleteLikeClick()
         } else {
                this._handleLikeClick()
            }
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => 
            this._setLikeHandler()
            //evt.target.classList.toggle('element__chosen_active');
        );

        this._element.querySelector('.element__basket').addEventListener('click', () => {
            this._handleDeleteCardClick(this._cardId, this._element);
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        });
    }
}