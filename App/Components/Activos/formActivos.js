import { postData, setId  } from '/../../../APIs/actives.js';

export class addActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.addActive();
    }
    render() {
        this.innerHTML = /* html */ `
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
      </section>
        `
    }
    
    addActive= ()=> {
        document.addEventListener('DOMContentLoaded', function(){
            const URL_API = 'http://localhost:3000'
            const endpoint = 'actives'
            const activeForm = document.querySelector('#activesForm')
            const BtnEnviar = document.querySelector('#BtnEnviarForm')

            BtnEnviarForm.addEventListener('click', (e) => {
                e.preventDefault();
        
                const codTransaccion = activeForm.querySelector('#codigoTransaccion').value;
                const nroFormulario = activeForm.querySelector('#nroFormulario').value;
                const marcaId = activeForm.querySelector('#marcaActivo').value;
                const categoriaId = activeForm.querySelector('#categoriaActivo').value;
                const tipoId = activeForm.querySelector('#tipoActivo').value;
                const valorUnitario = activeForm.querySelector('#valorActivo').value;
                const proveedorId = activeForm.querySelector('#proveedorActivo').value;
                const nroSerial = activeForm.querySelector('#serialActivo').value;
                const empresaResponsale = activeForm.querySelector('#empresaResponsable').value;
                const estadoActivo = activeForm.querySelector('#estadoActivo').value;
                let newId = 0

                setId(URL_API, endpoint)

                fetch(`${URL_API}`)
                    .then(response => response.json())
                    .then(activesData =>{
                        newId = activesData.length + 1;


                        const data = {
                            "id": `A-${newId}`,
                            "CodTransaccion": codTransaccion,
                            "nroFormulario": nroFormulario,
                            "marcaId": marcaId,
                            "categoriaId": categoriaId,
                            "tipoId": tipoId,
                            "valorUnitario": valorUnitario,
                            "proveedorId": proveedorId,
                            "nroSerial": nroSerial,
                            "empresaResponsableId": empresaResponsable,
                            "estadoId": estadoActivo
                        }  
                        postData( data,URL_API )
                    })
                
            });
              
            
        })
    }
}
customElements.define("add-actives",addActives)

