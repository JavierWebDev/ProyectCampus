import { deleteData, getElementData } from '/../../APIs/actives.js';

export class deleteCategories extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="DeleteActiveForm" class="contenedor-formulario">
      <div class="contenedor-titulo_principal">
        <h1 id="TituloFormulario" class="titulo-formulario"> Eliminar Activo</h1>
      </div>
        <div class="cont-form_inputs">
            <input class="input-form" id="categoriaBuscado" placeholder="Digita el nombre del producto">
            <a href="#" class="button-delete" id="buscarCategoria">Eliminar</a>
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
        const endpoint = 'actives'
        const buscarActivo = this.querySelector('#buscarCategoria');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#categoriaBuscado').value;
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
customElements.define("delete-categories", deleteCategories);