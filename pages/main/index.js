import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }


    getData() {
        return [
            { 
                id: 1, 
                title: "HDR", 
                text: "С помощью Mimic HDR вы сможете придать любому изображению красочности.", 
                src: "./Meduza.jpg" 
            },
            { 
                id: 2, 
                title: "Фокус", 
                text: "Создайте глубину на фотографиях с помощью размытия фона.", 
                src: "./drop2.jpg" 
            },
            { 
                id: 3, 
                title: "Дисперсия", 
                text: "Нарисуйте область на изображении и наблюдайте, как она взрывается.", 
                src: "./boom.jpg" 
            },
            { 
                id: 4, 
                title: "Отражение", 
                text: "Создавайте завораживающие зеркальные эффекты.", 
                src: "./Otragenie.png" 
            },
        ];
    }

    
    clickCard(e) {
        const cardId = parseInt(e.currentTarget.dataset.id);
        const data = this.getData().find(item => item.id === cardId);
        
        const productPage = new ProductPage(this.parent, cardId, data);
        
        
        productPage.render(() => this.render());
    }

    
    
    get pageRoot() {
        return document.getElementById('main-page-container');
    }

  
    
    render() {
        document.body.style.backgroundColor = '#0b0e11'; 
        this.parent.innerHTML = ''; 

        const html = `
            <nav style="background: rgba(24, 26, 32, 0.9); height: 65px; display: flex; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding: 0 40px;">
                <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                    <a href="#" style="color: white; text-decoration: none; font-weight: 200; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">
                        PHOTO<span style="color: #00a8ff; font-weight: 800; letter-spacing: 0px;">CORE</span>
                    </a>
                </div>
            </nav>

           <div class="container-fluid mt-5 mb-4 text-start" style="padding-left: 40px;">
                <span style="color: #00a8ff; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1.5px; font-weight: 700;">
                    Фоторедактор
                </span>
                <h1 class="text-white fw-bold mt-1 fs-4" style="letter-spacing: -0.5px; max-width: 800px;">
                    Еще больше удивительных способов редактирования
                </h1>
            </div> 

            <div id="main-page-container" class="d-flex flex-nowrap overflow-auto pb-5 custom-scroll" style="gap: 24px; padding-left: 40px; padding-right: 40px;"></div> 
        
        `; // СКРОЛЛ
        
        this.parent.insertAdjacentHTML('beforeend', html);

        const data = this.getData();
        data.forEach(item => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(item, this.clickCard.bind(this));
        });
    }
}