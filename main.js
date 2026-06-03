import { MainPage } from "./pages/main/index.js";
import { ajax } from "./modules/ajax.js"; // Путь правильный, папка modules в корне!

const root = document.getElementById('root');
const URL = 'http://localhost:3000/stocks'; // Адрес твоего бэкенда

// Делаем GET-запрос к серверу за данными
ajax.get(URL, (dataFromServer) => {
    
    // Если сервер пустой или выдал ошибку, создаем пустой массив, чтобы сайт не упал
    const modelsData = dataFromServer || [];

    // Передаем полученные с сервера данные в конструктор страницы
    const mainPage = new MainPage(root, modelsData); 

    // Отрисовываем страницу
    mainPage.render();
});