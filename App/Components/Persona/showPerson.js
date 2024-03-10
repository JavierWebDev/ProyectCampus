import {  getElementData} from '/../../APIs/actives.js';

export class showActive extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarActivo">ingresar</button>
        <div id="activeFoundShow"></div>
        `
    }
    
    showActive() {
        const endpoint = 'actives'
        const buscarActivo = this.querySelector('#buscarActivo');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#activoBuscado').value;
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
                        const activeFound = document.getElementById("activeFoundShow");
                        let idShow = responseData.id
                        let nameShow = responseData.nombreActivo
                        let estadoShow = responseData.estado
                        activeFound.innerHTML=`
                            <section id="showActive" class="contenedor-formulario">
                                <div>
                                    <h1>id activo: ${idShow} </h1>
                                    <h1>${nameShow}</h1>
                                    <h1>${estadoShow}</h1>
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
customElements.define("show-actives",showActive)