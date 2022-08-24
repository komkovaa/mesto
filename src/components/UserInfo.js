export class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    // метод возвращает объект с данными пользователя при открытии формы
    getUserInfo() {
        return {
        name: this._nameElement.textContent,
        job: this._jobElement.textContent,
        };
    }
    //метод принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
    };
    //метод принимает новую аватарку и добавляет на страницу
    setUserAvatar(data) {
        this._avatarElement.src = data.avatar;
      }
}