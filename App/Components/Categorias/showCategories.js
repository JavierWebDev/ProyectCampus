import {  getElementData} from '/../../APIs/API.js';

export class showCategories extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showCategorie();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="categoriaBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarCategoria">ingresar</button>
        <div id="categorieFoundShow"></div>
        `
    }
    
    showCategorie() {
        const endpoint = 'categories'
        const buscarActivo = this.querySelector('#buscarCategoria');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const categoriaBuscado = this.querySelector('#categoriaBuscado').value;
            getElementData(endpoint, categoriaBuscado )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                console.log(responseData)
                    if (responseData !== undefined && responseData !== null) {                     
                        const activeFound = document.getElementById("categorieFoundShow");
                        let idShow = responseData.id
                        let nameShow = responseData.nombre
                        activeFound.innerHTML=`
                            <section id="showCategoria" class="contenedor-formulario">
                                <div>
                                    <h1>id activo: ${idShow} </h1>
                                    <h1>${nameShow}</h1>
                                </div>
                            </section>`
                            

                    } else {
                        console.log("Categoria no encontrada");
                    }
                
            })
            .catch (error =>  {
                console.error('Error:', error.message);
            })
    }); 
    }
}
customElements.define("show-categories",showCategories)