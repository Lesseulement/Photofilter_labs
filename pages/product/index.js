import { ProductComponent } from "../../components/product/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";

export class ProductPage {
    constructor(parent, id, data) {
        this.parent = parent;
        this.id = id;
        this.data = data;
    }

    render(onBack) {
        this.parent.innerHTML = '';
        
        const product = new ProductComponent(this.parent);
        product.render(this.data);

        const backBtnContainer = document.getElementById('back-button-container');
        if (backBtnContainer) {
            const backButton = new BackButtonComponent(backBtnContainer);
            backButton.render(onBack);
        }
    }
}