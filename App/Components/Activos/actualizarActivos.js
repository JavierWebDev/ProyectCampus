import {  showData  } from '/../../APIs/actives.js';

export class actualizarActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarActivo">ingresar</button>
        <div id="activeFound"></div>
        `
    }
    
    addActive= ()=> {
            document.addEventListener('DOMContentLoaded', function(){
                const URL_API = 'http://localhost:3000/actives'
                const buscarActivo = document.querySelector('#buscarActivo');
                let activeFound = document.getElementById("activeFound");
            
                buscarActivo.addEventListener('click', async (e) =>{
                    e.preventDefault();
                    const activoBuscado = document.querySelector('#activoBuscado').value;
                    try {
                        const activoEncontrado = await showData(URL_API, activoBuscado);
                        if (activoEncontrado !== undefined && activoEncontrado !== null){
                            console.log(activoEncontrado);
                        } else {
                            console.log("Activo no encontrado");
                        }
                    } catch (error) {
                        console.error('Error:', error.message);
                    }
                }); 
            });
    }
}
customElements.define("actualizar-actives",actualizarActives)