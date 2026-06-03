import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MainPage } from "./pages/main/index.js";
import { ajax } from './modules/ajax.js';
import { stockUrls } from './modules/stockUrls.js';


const root = document.getElementById('root');


ajax.get(stockUrls.getStocks())
    .then((data) => {
        const mainPage = new MainPage(root, data);
        mainPage.render();

        
    })
    .catch((error) => {
        console.error("Ошибка загрузки:", error);
    });