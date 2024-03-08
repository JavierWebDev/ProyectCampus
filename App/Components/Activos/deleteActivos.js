import { deleteData, getElementData } from '/../../APIs/actives.js';

export class deleteActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }

    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder="Digita el nombre del producto">
        <button id="buscarActivo">Eliminar</button>
        <div id="activeFound"></div>
        `;
    }
    
    deleteActive() {
        const endpoint = 'actives'
        const buscarActivo = this.querySelector('#buscarActivo');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#activoBuscado').value;
            getElementData(endpoint,activoBuscado)
            .then(response => {
                 // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200)
                if (response.ok) {
                    return response.json(); // Devolver la respuesta como JSON
                } else {
                    // Si la respuesta no fue exitosa, lanzar una excepción
                    throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                    const activoEncontrado = responseData.find(activo => activo === activoBuscado);
                    if (activoEncontrado !== undefined && activoEncontrado !== null) {
                        deleteData( endpoint, activoBuscado);
                        console.log("Activo eliminado correctamente");
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
customElements.define("delete-actives", deleteActives);
