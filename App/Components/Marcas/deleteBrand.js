import { deleteData, getElementData } from '/../../APIs/API.js';

export class deleteBrand extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteBrand();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="DeleteBrandForm" class="contenedor-formulario">
      <div class="contenedor-titulo_principal">
        <h1 id="TituloFormulario" class="titulo-formulario"> Eliminar Marca</h1>
      </div>
        <div class="cont-form_inputs">
            <input class="input-form" id="marcaBuscado" placeholder="Digita el nombre de la marca">
            <a href="#" class="button-delete" id="buscarMarca">Eliminar</a>
        </div>

        <dialog id="VentanaConfirmar" class="cont-dialog" closed>
            <h1 class="titulo-dialog">Estas seguro que deseas eliminar la marca?</h1>

            <a href="#" id="BtnCancelarMarca" class="btn-cancelar">Cancelar</a>
            <a href="#" id="BtnEnviarMarca" class="btn-aceptar">Aceptar</a>
        </dialog>
    </section>
        `;
    }
    
    deleteBrand() {
        const endpoint = 'brand'
        const buscarActivo = this.querySelector('#buscarMarca');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#marcaBuscado').value;
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
                        console.log("Marca eliminada correctamente");
                    } else {
                        console.log("Marca no encontrada");
                    }
                
            })
            .catch (error =>  {
                console.error('Error:', error.message);
            })
    }); 
    }
}
customElements.define("delete-brand", deleteBrand);
