import {  getElementData, updateData  } from '/../../APIs/API.js';

export class updateBrand extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.updateBrand();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="EditBrandForm" class="contenedor-formulario">
        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario"> Editar Marca</h1>
        </div>
          <div class="cont-form_inputs">
              <input class="input-form" id="marcaBuscado" placeholder="Digita el nombre de la marca">
              <a href="#" class="button-editar" id="buscarMarca">Editar</a>
          </div>

          <div id="brandFoundActualize"></div>
        `
    }
    
    updateBrand() {
        const endpoint = 'brand'
        const buscarActivo = this.querySelector('#buscarMarca');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#marcaBuscado').value;
            getElementData(endpoint, activoBuscado )
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
                        
                        const activeFound = document.getElementById("brandFoundActualize");
                        console.log(activeFound)
                        activeFound.innerHTML=`
                        <section id="AddBrandForm" class="contenedor-formulario">
                            <div class="contenedor-titulo_principal">
                                <h1 id="TituloFormulario" class="titulo-formulario">Editar Marca</h1>
                            </div>
                    
                            <dialog id="Ventana">
                                <h1>aaa</h1>
                            </dialog>
                            <form id="brandFormActualize" class="cont-form">
                                
                                <div class="cont-form_inputs">
                                    <h1 class="text-id" id="ShowIDbrands"></h1>    
                            
                                    <div  class="cont-input">
                                        <h3>Nombre De La Marca</h3>
                                        <input class="input-form" name="nombre"  id="nombreMarcaActualize" placeholder=" digita el codigo de la transaccion ">
                                    </div>
                                </div>
                                <a href="#" class="input-anadir" id="BtnEnviarFormBrandsActualize">Save</a>
                            </form>
                    
                            <dialog id="VentanaConfirmarCategories" class="cont-dialog" closed>
                                <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
                        
                                <a href="#" id="BtnCancelarBrands" class="btn-cancelar">Cancelar</a>
                                <a href="#" id="BtnEnviarBrands" class="btn-aceptar">Aceptar</a>
                            </dialog>
                        </section>`
                            
                            

                            document.querySelector('#BtnEnviarFormBrandsActualize').addEventListener("click", async (e) => {
                                e.preventDefault();
                                const endpoint = 'brand'
                                const frmRegistro = document.querySelector('#brandFormActualize');
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
customElements.define("update-brand",updateBrand)
