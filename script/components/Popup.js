export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._popupCloseEsc = this._handleEscClose.bind(this);
    }

    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._popupCloseEsc);
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._popupCloseEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        };
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => this.closePopup());
        this._popupSelector.addEventListener('mousedown', (evt) => {
            /*if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            };
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup();  
            };*/
            if (evt.target === evt.currentTarget) {
                this.closePopup();
            }
        }
        );
    }
}