import {postData} from '../../APIs/actives.js'

export class addActives extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerHTML = /* html */ `
        <h1></h1>
        `
        
    }
}
customElements.define("add-actives",addActives)
const activo = {
    "nombre" : "juan"
}

let endpoint = "Actives"

