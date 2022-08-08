export class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
    }
    // метод возвращает объект с данными пользователя при открытии формы
    getUserInfo() {
        return {
        name: this._nameSelector.textContent,
        job: this._jobSelector.textContent,
        };
    }
    //метод принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(dataUser) {
        this._nameSelector.textContent = dataUser.name;
        this._jobSelector.textContent = dataUser.job;
    };
}