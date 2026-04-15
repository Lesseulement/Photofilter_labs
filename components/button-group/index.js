export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document.getElementById("back-button").addEventListener("click", listener);
    }

    render(listener) {
        this.parent.insertAdjacentHTML('beforeend', `<button id="back-button" class="btn btn-outline-light rounded-pill px-4">← Назад</button>`);
        this.addListeners(listener);
    }
}