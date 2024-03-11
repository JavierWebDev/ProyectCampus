import {  getElementData} from '/../../APIs/API.js';

export class showBrand extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showBrand();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="marcaBuscado" placeholder=" digita el nombre de la marca">
        <button id="buscarMarca">ingresar</button>
        <div id="brandFoundShow"></div>
        `
    }
    
    showBrand() {
        const endpoint = 'brand'
        const buscarActivo = this.querySelector('#buscarMarca');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#marcaBuscado').value;
            getElementData(endpoint, activoBuscado )
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
                        const activeFound = document.getElementById("brandFoundShow");
                        let idShow = responseData.id
                        let nameShow = responseData.nombre
                        activeFound.innerHTML=`
                            <section id="showBrand" class="contenedor-formulario">
                                <div>
                                    <h1>id marca: ${idShow} </h1>
                                    <h1>${nameShow}</h1>
                                </div>
                            </section>`
                            

                    } else {
                        console.log("Activo no encontrado");
                    }
                
            })
            .catch (error =>  {
                console.error('Error:', error.message);
            })
    }); 
    }
}
customElements.define("show-brand",showBrand)