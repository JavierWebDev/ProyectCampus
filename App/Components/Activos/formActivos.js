import { getData, postDatas } from '/../../../APIs/actives.js';

export class addActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.saveData();
    }
    render() {
      const endpoint = 'actives'
        this.innerHTML = /* html */ `
        <section id="AddActiveForm" class="contenedor-formulario">
        
        <form id="activesForm" class="cont-form">
        
        <div class="cont-form_inputs">
          <h1 id="ShowID"></h1>    


            <div  class="cont-input">
              <h3>Codigo de la transacción </h3>
              <input class="input-form" name="codigoTransaccion"  id="codigoTransaccion" placeholder=" digita el codigo de la transaccion ">
            </div>
            
            <div class="cont-input">
              <h3>Nro. de formulario </h3>
              <input class="input-form" name="nroFormulario" id="nroFormulario" placeholder=" digita el codigo de la transaccion ">
            </div>
            
            <div class="cont-input">
              <h3>Valor del producto </h3>
              <input class="input-form" name="valorActivo" id="valorActivo" placeholder=" digita el codigo de la transaccion ">
            </div>

            <div class="cont-input">
              <h3>Proveedor</h3>
              <input class="input-form" name="proveedorActivo" id="proveedorActivo" placeholder=" digita el codigo de la transaccion ">
            </div>

            <div class="cont-input">
              <h3>Nro serial </h3>
              <input class="input-form" name="serialActivo" id="serialActivo" placeholder=" digita el codigo de la transaccion ">
            </div> 
            <tables></tables> 
            <div class="cont-input">
              <h3>Empresa responsable </h3>
              <input class="input-form" name="empresaResponsable" id="empresaResponsable" placeholder=" digita el codigo de la transaccion ">
            </div>

            <div class="contenedor-inputs_seleccionar">
              <div class="cont-input_select">
                <h3 class="titulo-select">Marca </h3>
                <select class="input-seleccionar" name="marcaActivo" id="marcaActivo">
                </select>
              </div>
              
              <div class="cont-input_select">
                <h3 class="titulo-select">Categoria del activo </h3>
                <select class="input-seleccionar" name="categoriaActivo" id="categoriaActivo">
                </select>
              </div>
              
              <div class="cont-input_select">
                <h3 class="titulo-select">Tipo de activo </h3>
                <select class="input-seleccionar" name="tipoActivo"  id="tipoActivo">
                </select>
              </div>

              <div class="cont-input_select">
                <h3 class="titulo-select">Estado </h3>
                <select class="input-seleccionar" name="estadoActivo" id="estadoActivo">
                </select>
              </div>  
            </div>


          </div>
          <a href="#" class="input-anadir" id="BtnEnviarForm">Save</a>
        </form>
      </section>
        `

    }

    showData = () => {
      const endpoint = 'actives'
      const showID = document.querySelector("#ShowID")
      const inputs = document.querySelectorAll(".input-seleccionar .input-form")

      addEventListener("DOMContentLoaded", () => {
        getData(endpoint)
        .then(response => {
          if (response.ok) {
            return response.json(); // Devolver la respuesta como JSON
        } else {
            // Si la respuesta no fue exitosa, lanzar una excepción
            throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
        }
        })
        .then(responseData => {
          showID.innerHTML = `A-${responseData.length + 1}`
        })
      })
    } 

    saveData = () =>{
      const frmRegistro = document.querySelector('#activesForm');
      const endpoint = 'actives'
      const showID = document.querySelector("#ShowID")

      document.querySelector('#BtnEnviarForm').addEventListener("click",(e) =>{
        let datos = Object.fromEntries(new FormData(frmRegistro).entries());
         datos.id = showID.innerHTML


          postDatas(datos, endpoint)
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
                 if (responseData.id === showID.innerHTML) {
                  getData(endpoint)
                  .then(responseData => {
                    showID.innerHTML = `${responseData.length}`
                  })
                 
                 }

              })
            .catch(error => {
                console.error('Error en la solicitud POST:', error.message);
                // Puedes manejar el error de otra manera si es necesario
            });
          e.stopImmediatePropagation();
          e.preventDefault();
      })
   this.showData()  
}
}
customElements.define("add-actives",addActives)
