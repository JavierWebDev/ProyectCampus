import { showData  } from '/../../../APIs/actives.js';

export class showActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <h2>Que Activo desea ver: </h2>
        <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarActivo"></button>
        `
    }
    
    addActive= ()=> {
        document.addEventListener('DOMContentLoaded', function(){
            const URL_API = 'http://localhost:3000/actives'
            const activoBuscado = document.querySelector('#activoBuscado')
            const buscarActivo = document.querySelector('#buscarActivo')

            buscarActivo.addEventListener('click', (e) =>{
                e.preventDefault()
                const activoEncontrado = showData(URL_API, buscarActivo)
                function searchData(){
                    if (activoEncontrado !== undefined &&  activoEncontrado != null){
                }
                
            })



                
            });
              
            
        
    }
}
customElements.define("show-actives",showActives)