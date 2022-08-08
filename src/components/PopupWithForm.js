import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, formSelector, handleFormSubmit}) {
        super(popupSelector);
        this._formElement = this._popupElement.querySelector(formSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    //метод собирает данные всех полей формы
    _getInputValues() {
       // достаём все элементы полей
        this._inputList = this._popupElement.querySelectorAll('.popup__desc');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value; //ключами объекта будут атрибуты name каждого поля
        });
        // возвращаем объект значений
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
             // добавим вызов функции _handleFormSubmit
             // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
            this.close();
        }
        );
    }

    close() {
        super.close();// вызываем родительский метод
        this._formElement.reset();// дополняем новой функциональностью: очищаем форму
    }
}