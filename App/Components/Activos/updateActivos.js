import {  getElementData, updateData  } from '/../../APIs/actives.js';

export class updateActive extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.updateActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarActivo">ingresar</button>
        <div id="activeFound"></div>
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
                 // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200)
                if (response.ok) {
                    return response.json(); // Devolver la respuesta como JSON
                } else {
                    // Si la respuesta no fue exitosa, lanzar una excepción
                    throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
                }
            })
            .then(responseData => {
                    if (responseData !== undefined && responseData !== null) {
                        const activeFound = document.getElementById("activeFound");
                        activeFound.innerHTML=`
                            <section id="AddActiveForm" class="contenedor-formulario">
                                <form id="activesForm" class="cont-form"> 
                                <div class="cont-form_inputs">
                                    <div  class="cont-input">
                                    <h3>Codigo de la transacción </h3>
                                    <input class="input-form"  id="codigoTransaccion" placeholder=" digita el codigo de la transaccion ">
                                    </div>
                                    
                                    <div class="cont-input">
                                    <h3>Nro. de formulario </h3>
                                    <input class="input-form" id="nroFormulario" placeholder=" digita el codigo de la transaccion ">
                                    </div>
                                    
                                    <div class="cont-input">
                                    <h3>Valor del producto </h3>
                                    <input class="input-form" id="valorActivo" placeholder=" digita el codigo de la transaccion ">
                                    </div>

                                    <div class="cont-input">
                                    <h3>Proveedor</h3>
                                    <input class="input-form" id="proveedorActivo" placeholder=" digita el codigo de la transaccion ">
                                    </div>

                                    <div class="cont-input">
                                    <h3>Nro serial </h3>
                                    <input class="input-form" id="serialActivo" placeholder=" digita el codigo de la transaccion ">
                                    </div> 
                                    <tables></tables> 
                                    <div class="cont-input">
                                        <h3>Empresa responsable </h3>
                                        <input class="input-form" id="empresaResponsable" placeholder=" digita el codigo de la transaccion ">
                                    </div>

                                    <div class="contenedor-inputs_seleccionar">
                                    <div class="cont-input_select">
                                        <h3 class="titulo-select">Marca </h3>
                                        <select class="input-seleccionar" id="marcaActivo">
                                        </select>
                                    </div>
                                    
                                    <div class="cont-input_select">
                                        <h3 class="titulo-select">Categoria del activo </h3>
                                        <select class="input-seleccionar" id="categoriaActivo">
                                        </select>
                                    </div>
                                    
                                    <div class="cont-input_select">
                                        <h3 class="titulo-select">Tipo de activo </h3>
                                        <select class="input-seleccionar" id="tipoActivo">
                                        </select>
                                    </div>

                                    <div class="cont-input_select">
                                        <h3 class="titulo-select">Estado </h3>
                                        <select class="input-seleccionar" id="estadoActivo">
                                        </select>
                                    </div>  
                                    </div>


                                </div>
                                <button id="BtnEnviarForm" class="input-anadir">ENVIAR</button>
                                </form>
                            </section>`
                            const frmRegistro = document.querySelector('#activesForm');
                            const endpoint = 'actives'

                            document.querySelector('#BtnEnviarForm').addEventListener("click",(e) =>{
                                let datos = Object.fromEntries(new FormData(frmRegistro).entries());


                                updateData(datos, endpoint, activoBuscado)
                                    .then(response => {
                                        // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200)
                                        if (response.ok) {
                                            return response.json(); // Devolver la respuesta como JSON
                                        } else {
                                            // Si la respuesta no fue exitosa, lanzar una excepción
                                            throw new Error(`Error en la solicitud PATCH: ${response.status} - ${response.statusText}`);
                                        }
                                    })
                                    .catch(error => {
                                        console.error('Error en la solicitud PATCH:', error.message);
                                        // Puedes manejar el error de otra manera si es necesario
                                    });
                                e.stopImmediatePropagation();
                                e.preventDefault();
                            })
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
