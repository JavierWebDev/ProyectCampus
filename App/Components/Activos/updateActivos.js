import {  getElementData, updateData  } from '/../../APIs/API.js';

export class updateActive extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.updateActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="EditActiveForm" class="contenedor-formulario">
        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario"> Editar Activo</h1>
        </div>
          <div class="cont-form_inputs">
              <input class="input-form" id="activoBuscado" placeholder="Digita el nombre del producto">
              <a href="#" class="button-editar" id="buscarActivo">Editar</a>
          </div>

          <div id="activeFoundActualize"></div>
        `
    }
    
    updateActive() {
        const endpoint = 'actives'
        const buscarActivo = this.querySelector('#buscarActivo');
        buscarActivo.addEventListener('click', async (e) => {
            e.preventDefault();
            const activoBuscado = this.querySelector('#activoBuscado').value;
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
                        
                        const activeFound = document.getElementById("activeFoundActualize");
                        activeFound.innerHTML=`
                            <section id="AddActiveForm" class="contenedor-formulario">
                                <form id="activesFormActualize" class="cont-form"> 

                                <div  class="cont-input">
                                    <h3>Nombre Del Activo</h3>
                                    <input class="input-form" name="nombreActivo"  id="nombreActivoActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>
                                <div  class="cont-input">
                                    <h3>Codigo de la transacción </h3>
                                    <input class="input-form" name="codigoTransaccion"  id="codigoTransaccionActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>
                                
                                <div class="cont-input">
                                    <h3>Nro. de formulario </h3>
                                    <input class="input-form" name="nroFormulario" id="nroFormularioActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>
                                
                                <div class="cont-input">
                                    <h3>Valor del producto </h3>
                                    <input class="input-form" name="valorActivo" id="valorActivoActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>

                                <div class="cont-input">
                                    <h3>Proveedor</h3>
                                    <input class="input-form" name="proveedorActivo" id="proveedorActivoActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>

                                <div class="cont-input">
                                    <h3>Nro serial </h3>
                                    <input class="input-form" name="serialActivo" id="serialActivoActualize" placeholder=" digita el codigo de la transaccion ">
                                </div> 
                                <tables></tables> 
                                <div class="cont-input">
                                    <h3>Empresa responsable </h3>
                                    <input class="input-form" name="empresaResponsable" id="empresaResponsableActualize" placeholder=" digita el codigo de la transaccion ">
                                </div>

                                <div class="contenedor-inputs_seleccionar">
                                <div class="cont-input_select">
                                    <h3 class="titulo-select">Marca </h3>
                                    <select class="input-seleccionar" name="marcaActivo" id="marcaActivoActualize">
                                    </select>
                                </div>
                                
                                <div class="cont-input_select">
                                    <h3 class="titulo-select">Categoria del activo </h3>
                                    <select class="input-seleccionar" name="categoriaActivo" id="categoriaActivoActualize">
                                    </select>
                                </div>
                                
                                <div class="cont-input_select">
                                    <h3 class="titulo-select">Tipo de activo </h3>
                                    <select class="input-seleccionar" name="tipoActivo"  id="tipoActivoActualize">
                                    </select>
                                </div>

                                <div class="cont-input_select">
                                    <h3 class="titulo-select">Estado </h3>
                                    <select class="input-seleccionar" name="estadoActivo" id="estadoActivoActualize">
                                    </select>
                                </div>  
                                </div>


                            </div>
                            <a href="#" class="input-anadir" id="BtnEnviarFormActualize">Save</a>
                                </form>
                            </section>`
                            
                            

                            document.querySelector('#BtnEnviarFormActualize').addEventListener("click", async (e) => {
                                e.preventDefault();
                                const endpoint = 'actives'
                                const frmRegistro = document.querySelector('#activesFormActualize');
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
customElements.define("update-actives",updateActive)
