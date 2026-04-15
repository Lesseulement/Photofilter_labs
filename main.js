import { MainPage } from "./pages/main/index.js";

// Получаем корневой элемент
const root = document.getElementById('root');

// Создаем и рендерим главную страницу
const mainPage = new MainPage(root);
mainPage.render();