import { ajax } from './modules/ajax.js';
import { stockUrls } from './modules/stockUrls.js';

let isSecondRequestDone = false; 
let pendingFirstRequestExecute = null; 

export function initTeacherTask(renderCallback) {
    // Рисуем блок кнопок на экране
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(21, 23, 27, 0.95);
        border: 2px solid #00a8ff;
        padding: 15px;
        border-radius: 10px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0 0 15px rgba(0,168,255,0.3);
    `;

    container.innerHTML = `
        <h4 style="margin:0; color:#00a8ff; font-family:sans-serif; font-size:14px; text-align:center;">ЛР №5: Доп. Задание</h4>
        <button id="btn-req-1" style="background:#2d3238; color:white; border:1px solid #444; padding:8px; cursor:pointer; border-radius:5px; text-align:left;">1. Запрос (Удалить 1-ю через 5с)</button>
        <button id="btn-req-2" style="background:#2d3238; color:white; border:1px solid #444; padding:8px; cursor:pointer; border-radius:5px; text-align:left;">2. Запрос (Удалить 2-ю сразу)</button>
        <button id="btn-req-3" style="background:#00a8ff; color:white; border:none; padding:8px; cursor:pointer; border-radius:5px; font-weight:bold;">3. Запрос (Найти все карточки)</button>
        <div id="task-status" style="font-size:11px; color:#aaa; font-family:sans-serif; max-width:220px;">Ожидание нажатия...</div>
    `;

    document.body.appendChild(container);
    const statusDiv = document.getElementById('task-status');

    // 1 ЗАПРОС: Удаление первой карточки (ID: 1 или "1") с таймаутом 5 секунд
    document.getElementById('btn-req-1').addEventListener('click', () => {
        statusDiv.style.color = '#ffaa00';
        statusDiv.innerText = "Запрос 1: Запущен таймер 5 сек...";
        
        setTimeout(() => {
            const executeDeletion = () => {
                ajax.delete(stockUrls.removeStockById(1), (res, status) => {
                    statusDiv.style.color = '#00ff00';
                    statusDiv.innerText = "Запрос 1 выполнен! Карточка 1 удалена.";
                });
            };

            if (isSecondRequestDone) {
                executeDeletion();
            } else {
                statusDiv.style.color = '#ff5555';
                statusDiv.innerText = "Таймер 5с вышел! Ждём Запрос 2 для удаления...";
                pendingFirstRequestExecute = executeDeletion;
            }
        }, 5000);
    });

    // 2 ЗАПРОС: Мгновенное удаление второй карточки (ID: 2)
    document.getElementById('btn-req-2').addEventListener('click', () => {
        statusDiv.style.color = '#ffaa00';
        statusDiv.innerText = "Выполняется Запрос 2...";
        
        ajax.delete(stockUrls.removeStockById(2), (res, status) => {
            isSecondRequestDone = true;
            statusDiv.style.color = '#00ff00';
            statusDiv.innerText = "Запрос 2 выполнен! Карточка 2 удалена.";

            // Схема: если Запрос 1 уже отсчитал время и ждал нас — запускаем его!
            if (pendingFirstRequestExecute) {
                statusDiv.innerText += " Включаем отложенный Запрос 1!";
                pendingFirstRequestExecute();
                pendingFirstRequestExecute = null;
            }
        });
    });

    // 3 ЗАПРОС: Найти все карточки (Обновить интерфейс данными из базы)
    document.getElementById('btn-req-3').addEventListener('click', () => {
        statusDiv.style.color = '#00a8ff';
        statusDiv.innerText = "Запрос 3: Загрузка списка...";
        
        ajax.get(stockUrls.getStocks(), (data) => {
            if (data) {
                statusDiv.style.color = '#00ff00';
                statusDiv.innerText = "Данные обновлены!";
                renderCallback(data); // Отдаем массив карточек обратно на перерисовку
            }
        });
    });
}