//Вставка элементов в раметку

export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
// Отрисовка всех элементов
    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
//Принимаем DOM-элемент и добавляем его в контейнер
    addItem(item) {
        this._container.prepend(item);
    }

    removeItem(item) {
        item.remove();
        item = null;
    }
}