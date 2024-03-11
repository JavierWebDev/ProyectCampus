import {  getElementData, updateData  } from '/../../APIs/API.js';

export class updateCategories extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.updateActive();
    }   
    render() {
        this.innerHTML = /* html */ `
        <section id="EditCategorieForm" class="contenedor-formulario">
        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario"> Editar Categoria</h1>
        </div>
          <div class="cont-form_inputs">
              <input class="input-form" id="categoriaBuscado" placeholder="Digita el nombre de la categoria">
              <a href="#" class="button-editar" id="buscarCategoria">Editar</a>
          </div>

          <div id="categorieFoundActualize"></div>
        `
    }
    
    updateActive() {
        const endpoint = 'categories'
        const buscarActivo = this.querySelector('#buscarCategoria');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#categoriaBuscado').value;
            getElementData(endpoint, categoriaBuscado )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                console.log(responseData)
                    if (responseData !== undefined && responseData !== null) {
                        
                        const activeFound = document.getElementById("CategorieFoundActualize");
                        console.log(activeFound)
                        activeFound.innerHTML=`
                            <section id="AddCategorieForm" class="contenedor-formulario">

                            <div class="contenedor-titulo_principal">
                                <h1 id="TituloFormulario" class="titulo-formulario">Editar Categoria</h1>
                            </div>
                    
                            <dialog id="Ventana">
                            <h1>aaa</h1>
                            </dialog>
                            <form id="categoriesFormActualize" class="cont-form">
                            
                            <div class="cont-form_inputs">
                                <h1 class="text-id" id="ShowIDCategories"></h1>    
                    
                                <div  class="cont-input">
                                    <h3>Nombre Del Activo</h3>
                                    <input class="input-form" name="nombre"  id="nombreCategoriaActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>
                            </div>
                            <a href="#" class="input-anadir" id="BtnEnviarFormCategoriesActualize">Save</a>
                            </form>
                    
                            <dialog id="VentanaConfirmarCategories" class="cont-dialog" closed>
                            <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
                    
                            <a href="#" id="BtnCancelarCategories" class="btn-cancelar">Cancelar</a>
                            <a href="#" id="BtnEnviarCategories" class="btn-aceptar">Aceptar</a>
                        </dialog>
                        </section>`
                            
                            

                            document.querySelector('#BtnEnviarFormCategoriesActualize').addEventListener("click", async (e) => {
                                e.preventDefault();
                                const endpoint = 'categories'
                                const frmRegistro = document.querySelector('#categoriesFormActualize');
                                try {
                                    let datos = Object.fromEntries(new FormData(frmRegistro).entries());
                                    const response = await updateData(datos, endpoint, activoBuscado);
                                    console.log('Datos actualizados:', response);
                                } catch (error) {
                                    console.error('Error al enviar los datos para actualizar:', error.message);
                                }
                            });
                            

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
customElements.define("update-categories",updateCategories)
