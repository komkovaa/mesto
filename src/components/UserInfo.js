export class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }
    // метод возвращает объект с данными пользователя при открытии формы
    getUserInfo() {
        return {
        name: this._nameElement.textContent,
        job: this._jobElement.textContent,
        };
    }
    //метод принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(dataUser) {
        this._nameElement.textContent = dataUser.name;
        this._jobElement.textContent = dataUser.job;
    };
}