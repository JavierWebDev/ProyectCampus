import { deleteData, getElementData } from '/../../APIs/API.js';

export class deleteCategories extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="DeleteCategorieForm" class="contenedor-formulario">
      <div class="contenedor-titulo_principal">
        <h1 id="TituloFormulario" class="titulo-formulario"> Eliminar Activo</h1>
      </div>
        <div class="cont-form_inputs">
            <input class="input-form" id="categoriaBuscado" placeholder="Digita el nombre de la categoria">
            <a href="#" class="button-delete" id="buscarCategoria">Eliminar</a>
        </div>

        <dialog id="VentanaConfirmarDelCategoria" class="cont-dialog" closed>
            <h1 class="titulo-dialog">Estas seguro que deseas eliminar la Categoria?</h1>

            <a href="#" id="BtnCancelarDelCategoria" class="btn-cancelar">Cancelar</a>
            <a href="#" id="BtnEnviarDelCategoria" class="btn-aceptar">Aceptar</a>
        </dialog>
    </section>
        `;
    }

    deleteActive() {
        const btnCancelar = document.querySelector("#BtnCancelarDelCategoria")
        const BtnConfirmar = document.querySelector("#BtnEnviarDelCategoria")
        const modal = document.getElementById("VentanaConfirmarDelCategoria")
        const buscarActivo = this.querySelector('#buscarCategoria');

        buscarActivo.addEventListener('click', () => {
            modal.style.display = "flex"
        })
        btnCancelar.addEventListener('click', () => {
            modal.style.display = "none"
        })

        const endpoint = 'categories'
        BtnConfirmar.addEventListener('click', async (e) => {
            e.preventDefault();
            const CategoriaBuscado = this.querySelector('#categoriaBuscado').value;
            getElementData(endpoint, CategoriaBuscado)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                    }
                })
                .then(responseData => {
                    if (responseData !== undefined && responseData !== null) {
                        deleteData(endpoint, CategoriaBuscado);
                        console.log("Categoria eliminada correctamente");
                    } else {
                        console.log("Categoria no encontrada");
                    }

                })
                .catch(error => {
                    console.error('Error:', error.message);
                })
        });
    }
}
customElements.define("delete-categories", deleteCategories);
