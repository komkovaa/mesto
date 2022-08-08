//Вставка элементов в раметку

export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItem = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
// Отрисовка всех элементов
    renderItems() {
        this._renderedItem.forEach((item) => {
            this._renderer(item);
        });
    }
//Принимаем DOM-элемент и добавляем его в контейнер
    addItem(item) {
        this._container.prepend(item);
    }
}