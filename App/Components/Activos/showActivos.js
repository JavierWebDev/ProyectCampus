import {  getData  } from '/../../APIs/actives.js';

export class showActives extends HTMLElement {
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

}
customElements.define("show-actives",showActives)