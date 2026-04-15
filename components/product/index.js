export class ProductComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="container d-flex justify-content-center align-items-center" style="height: 90vh;">
                <div class="card border-0 shadow-lg" 
                     style="width: 1000px; max-height: 550px; background-color: #1a1d21; border-radius: 20px; overflow: hidden; display: flex; flex-direction: row;">
                    
                    <div style="flex: 1; position: relative; overflow: hidden; background: #000;">
                        <img src="${data.src}" class="img-fluid" 
                             style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0;">
                    </div>

                    <div class="p-5 d-flex flex-column justify-content-between text-start" style="flex: 1;">
                        <div>
                            <h2 class="fw-bold text-white fs-1 mb-3">${data.title}</h2>
                            <p class="fs-5" style="color: #a0a6ac; line-height: 1.6;">${data.text}</p>
                        </div>
                        
                        <div id="back-button-container">
                            </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        this.parent.innerHTML = ''; // Очищаем всё перед отрисовкой
        this.parent.insertAdjacentHTML('beforeend', this.getHTML(data));
    }
}