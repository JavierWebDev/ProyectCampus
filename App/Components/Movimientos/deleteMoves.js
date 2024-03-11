import { deleteData, getElementData } from '/../../APIs/API.js';

export class deleteActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="DeleteMovesForm" class="contenedor-formulario">
      <div class="contenedor-titulo_principal">
        <h1 id="TituloFormulario" class="titulo-formulario"> Eliminar Movimiento</h1>
      </div>
        <div class="cont-form_inputs">
            <input class="input-form" id="activoBuscado" placeholder="Digita el nombre del producto">
            <a href="#" class="button-delete" id="buscarActivo">Eliminar</a>
        </div>

        <dialog id="VentanaConfirmar" class="cont-dialog" closed>
            <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>

            <a href="#" id="BtnCancelar" class="btn-cancelar">Cancelar</a>
            <a href="#" id="BtnEnviar" class="btn-aceptar">Aceptar</a>
        </dialog>
    </section>
        `;
    }
    
    deleteActive() {
        const endpoint = 'movement'
        const buscarActivo = this.querySelector('#buscarActivo');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#activoBuscado').value;
            getElementData(endpoint,activoBuscado)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                    if (responseData !== undefined && responseData !== null) {
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

/* id, fecha, activoId, comentario, asignacionId */