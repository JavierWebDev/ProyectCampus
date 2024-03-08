import { deleteData, showData } from '/../../APIs/actives.js';

export class deleteActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }

    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder="Digita el nombre del producto">
        <button id="buscarActivo">Eliminar</button>
        <div id="activeFound"></div>
        `;
    }
    
    addActive() {
        const URL_API = 'http://localhost:3000/actives';
        const buscarActivo = this.querySelector('#buscarActivo');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#activoBuscado').value;
            try {
                const activoEncontrado = await showData(URL_API, activoBuscado);
                if (activoEncontrado !== undefined && activoEncontrado !== null) {
                    await deleteData(URL_API, activoBuscado);
                    console.log("Activo eliminado correctamente");
                } else {
                    console.log("Activo no encontrado");
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }); 
    }
}
customElements.define("delete-actives", deleteActives);
