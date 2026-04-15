export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
    return `
        <div class="card border-0 shadow-sm" id="click-card-${data.id}" data-id="${data.id}" 
             style="width: 450px; flex: 0 0 auto; margin-right: 25px; background-color: #1a1d21; border-radius: 20px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease;">
            
            <div style="height: 250px; width: 100%; overflow: hidden;">
                <img src="${data.src}" alt="${data.title}" 
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>

            <div class="card-body" style="padding: 25px; background: #1a1d21;">
                <h4 class="card-title fw-bold" style="color: #ffffff; margin-bottom: 10px;">${data.title}</h4>
                <div style="color: #6c757d; font-size: 0.9rem; border-top: 1px solid #2d3238; mt-3; pt-3;">
                    Инструмент дизайна
                </div>
            </div>
        </div>
    `;
}
    render(data, listener) {
        // Отрисовываем карточку
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
        
        // Находим элемент в DOM
        const element = document.getElementById(`click-card-${data.id}`);
        
        if (element) {
            // Добавляем слушатель клика для перехода на страницу товара
            element.addEventListener("click", listener);

            // ТОЧЕЧНАЯ ПРАВКА: Приближаем/центрируем 4-ю карточку (Отражение)
            // Если в данных ID 4-й карточки равен 4
            if (data.id === 4) {
                const img = element.querySelector('img');
                if (img) {
                    // Смещаем картинку, чтобы узел был выше и не обрезался снизу
                    img.style.objectPosition = 'center 25%';
                    // Можно даже чуть-чуть увеличить масштаб только для этой картинки
                    img.style.transform = 'scale(1.1)';
                }
            }
        }
    }
}