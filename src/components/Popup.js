export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseEsc = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._popupCloseEsc);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._popupCloseEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    setEventListeners() {
        this._popupElement.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popupElement.addEventListener('mousedown', (evt) => {
            /*if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            };
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup();  
            };*/
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        }
        );
    }
}