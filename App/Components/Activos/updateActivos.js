import {  showData  } from '/../../APIs/actives.js';

export class actualizarActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
        <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
        <button id="buscarActivoActualize">ingresar</button>
        <div id="activeFound"></div>
        `
    }
    
    addActive= ()=> {
            document.addEventListener('DOMContentLoaded', function(){
                const URL_API = 'http://localhost:3000/actives'
                const buscarActivo = document.querySelector('#buscarActivoActualize');
                let activeFound = document.getElementById("activeFound");
            
                buscarActivo.addEventListener('click', async (e) =>{
                    e.preventDefault();
                    const activoBuscado = document.querySelector('#activoBuscado').value;
                    try {
                        const activoEncontrado = await showData(URL_API, activoBuscado);
                        if (activoEncontrado !== undefined && activoEncontrado !== null){
                            console.log(activoEncontrado);
                        } else {
                            console.log("Activo no encontrado");
                        }
                    } catch (error) {
                        console.error('Error:', error.message);
                    }
                }); 
            });
    }
}
customElements.define("actualizar-actives",actualizarActives)

// const activeFound = document.getElementById("activeFound");
//                             activeFound.innerHTML=`
//                             <section id="AddActiveForm" class="contenedor-formulario">
//                                 <form id="activesForm" class="cont-form"> 
//                                 <div class="cont-form_inputs">
//                                     <div  class="cont-input">
//                                     <h3>Codigo de la transacción </h3>
//                                     <input class="input-form"  id="codigoTransaccion" placeholder=" digita el codigo de la transaccion ">
//                                     </div>
                                    
//                                     <div class="cont-input">
//                                     <h3>Nro. de formulario </h3>
//                                     <input class="input-form" id="nroFormulario" placeholder=" digita el codigo de la transaccion ">
//                                     </div>
                                    
//                                     <div class="cont-input">
//                                     <h3>Valor del producto </h3>
//                                     <input class="input-form" id="valorActivo" placeholder=" digita el codigo de la transaccion ">
//                                     </div>

//                                     <div class="cont-input">
//                                     <h3>Proveedor</h3>
//                                     <input class="input-form" id="proveedorActivo" placeholder=" digita el codigo de la transaccion ">
//                                     </div>

//                                     <div class="cont-input">
//                                     <h3>Nro serial </h3>
//                                     <input class="input-form" id="serialActivo" placeholder=" digita el codigo de la transaccion ">
//                                     </div> 
//                                     <tables></tables> 
//                                     <div class="cont-input">
//                                         <h3>Empresa responsable </h3>
//                                         <input class="input-form" id="empresaResponsable" placeholder=" digita el codigo de la transaccion ">
//                                     </div>

//                                     <div class="contenedor-inputs_seleccionar">
//                                     <div class="cont-input_select">
//                                         <h3 class="titulo-select">Marca </h3>
//                                         <select class="input-seleccionar" id="marcaActivo">
//                                         </select>
//                                     </div>
                                    
//                                     <div class="cont-input_select">
//                                         <h3 class="titulo-select">Categoria del activo </h3>
//                                         <select class="input-seleccionar" id="categoriaActivo">
//                                         </select>
//                                     </div>
                                    
//                                     <div class="cont-input_select">
//                                         <h3 class="titulo-select">Tipo de activo </h3>
//                                         <select class="input-seleccionar" id="tipoActivo">
//                                         </select>
//                                     </div>

//                                     <div class="cont-input_select">
//                                         <h3 class="titulo-select">Estado </h3>
//                                         <select class="input-seleccionar" id="estadoActivo">
//                                         </select>
//                                     </div>  
//                                     </div>


//                                 </div>
//                                 <button id="BtnEnviarForm" class="input-anadir">ENVIAR</button>
//                                 </form>
//                             </section>`
//                             const activeForm = document.getElementById("AddActiveForm");
//                             const BtnEnviarForm = document.querySelector('#BtnEnviarForm')
//                             BtnEnviarForm.addEventListener('click', async (e) => {
//                                 e.preventDefault();
                        
//                                 const codTransaccion = activeForm.querySelector('#codigoTransaccion').value;
//                                 const nroFormulario = activeForm.querySelector('#nroFormulario').value;
//                                 const marcaId = activeForm.querySelector('#marcaActivo').value;
//                                 const categoriaId = activeForm.querySelector('#categoriaActivo').value;
//                                 const tipoId = activeForm.querySelector('#tipoActivo').value;
//                                 const valorUnitario = activeForm.querySelector('#valorActivo').value;
//                                 const proveedorId = activeForm.querySelector('#proveedorActivo').value;
//                                 const nroSerial = activeForm.querySelector('#serialActivo').value;
//                                 const empresaResponsable = activeForm.querySelector('#empresaResponsable').value;
//                                 const estadoActivo = activeForm.querySelector('#estadoActivo').value;
                        
//                                 const data = {
//                                     "CodTransaccion": codTransaccion,
//                                     "nroFormulario": nroFormulario,
//                                     "marcaId": marcaId,
//                                     "categoriaId": categoriaId,
//                                     "tipoId": tipoId,
//                                     "valorUnitario": valorUnitario,
//                                     "proveedorId": proveedorId,
//                                     "nroSerial": nroSerial,
//                                     "empresaResponsableId": empresaResponsable,
//                                     "estadoId": estadoActivo
//                                 }  
//                                 await updateData( data,URL_API, activoBuscado)
//                             })