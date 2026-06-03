# Лабораторная работа №3: Компоненты и страницы

##  Общая информация
* **Студент:** Лазарева Вероника
* **Вариант:** №5 
* **Тема:** Дизайн (Инструменты редактирования)
* **Компонент:** Информер
* **Стек:** HTML5, CSS3, JS (ES6 Modules), Bootstrap 5

---

## Описание проекта
Проект представляет собой SPA-приложение (Single Page Application) для каталога дизайн-инструментов. В работе реализован модульный подход: каждая страница и элемент интерфейса являются независимыми компонентами.

### Основные возможности:
* Динамическая отрисовка карточек инструментов.
* Переход на детальную страницу товара без перезагрузки.
* Адаптивная верстка с использованием Bootstrap.

---

##  Реализация компонентов (Вариант №5)

### ProductCardComponent (Информер)
Компонент карточки реализован как класс. В методе `render` добавлена логика индивидуальной настройки для сложных изображений (например, центрирование и масштаб для 4-й карточки).

```javascript
// components/product-card/index.js
render(data, listener) {
    this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
    const element = document.getElementById(`click-card-${data.id}`);
    
    if (element) {
        element.addEventListener("click", listener);
        if (data.id === 4) {
            const img = element.querySelector('img');
            if (img) {
                img.style.objectPosition = 'center 25%';
                img.style.transform = 'scale(1.1)';
            }
        }
    }
}
```

## Дополнительное задание: Горизонтальный скролл (Horizontal Scroll)

По требованию преподавателя на главной странице реализована горизонтальная прокрутка карточек. Карточки не переносятся на новую строку, а выстраиваются в ряд, выходящий за границы экрана.

### 1. Изменения в контейнере (pages/main/index.js)

Для создания области прокрутки контейнеру заданы свойства Flexbox и запрет на перенос элементов:

```JavaScript
const html = `
    <div class="container-fluid mt-5 mb-4 text-start" style="padding-left: 40px;">
        <span style="color: #00a8ff; font-weight: 700;">Фоторедактор</span>
        <h1 class="text-white fw-bold">Еще больше удивительных способов редактирования</h1>
    </div>

    <div id="main-page-container" 
         class="d-flex flex-nowrap overflow-auto pb-5 custom-scroll" 
         style="gap: 24px; padding: 0 40px; scroll-snap-type: x mandatory;">
    </div>
`;
```
### 2. Изменения в компоненте карточки (components/product-card/index.js)
Чтобы скролл работал корректно, карточкам задана фиксированная ширина и запрет на сжатие:

```JavaScript
return `
    <div class="card" style="width: 450px; flex: 0 0 auto; margin-right: 25px; background: #1a1d21;">
        <div style="height: 250px; overflow: hidden;">
            <img src="${data.src}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        </div>
`;
```

### 3. Стилизация скроллбара (index.html)
Для интеграции скролла в темный дизайн приложения добавлены CSS-стили для кастомизации полосы прокрутки:

```html

/* Стили в теге <style> */
.custom-scroll::-webkit-scrollbar {
    height: 8px;
}
.custom-scroll::-webkit-scrollbar-track {
    background: #121417;
}
.custom-scroll::-webkit-scrollbar-thumb {
    background: #2d3238;
    border-radius: 10px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
    background: #00a8ff;
}
```
