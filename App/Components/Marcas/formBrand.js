import { getData, postDatas } from '/../../../APIs/API.js';

export class addBrand extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.saveData();
    }
    render() {
      const endpoint = 'brand'
        this.innerHTML = /* html */ `
        <section id="AddBrandForm" class="contenedor-formulario">

        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario">Añadir Marca</h1>
        </div>

        <dialog id="Ventana">
          <h1>aaa</h1>
        </dialog>
        <form id="brandForm" class="cont-form">
        
        <div class="cont-form_inputs">
          <h1 class="text-id" id="ShowIDbrands"></h1>    

          <div  class="cont-input">
            <h3>Nombre De La Marca</h3>
            <input class="input-form" name="nombre"  id="nombreMarca" placeholder=" digita el codigo de la transaccion ">
          </div>
          </div>
          <a href="#" class="input-anadir" id="BtnEnviarFormBrands">Save</a>
        </form>

        <dialog id="VentanaConfirmarBrands" class="cont-dialog" closed>
        <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
  
        <a href="#" id="BtnCancelarBrands" class="btn-cancelar">Cancelar</a>
        <a href="#" id="BtnEnviarBrands" class="btn-aceptar">Aceptar</a>
      </dialog>
      </section>
        `

    }

    showData = () => {
      const endpoint = 'brand'
      const showID = document.querySelector("#ShowIDbrands")
      

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
          showID.innerHTML = `B-${responseData.length + 1}`
        })
      })
    }

    saveData = () =>{
      const frmRegistro = document.querySelector('#brandForm');
      const endpoint = 'brand'
      const showID = document.querySelector("#ShowIDbrands")
      const btnCancelar = document.querySelector("#BtnCancelarBrands")
      const BtnEnviarForm = document.querySelector("#BtnEnviarFormBrands")
      const modal = document.getElementById("VentanaConfirmarBrands")
      const inputs = document.querySelectorAll(".input-form")


      BtnEnviarForm.addEventListener("click", () => {
        modal.style.display = "flex"
      })
      btnCancelar.addEventListener("click", () => {
        modal.style.display = "none"
      })

      document.querySelector("#BtnEnviarBrands").addEventListener("click",(e) =>{
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
                    showID.innerHTML = `B-${responseData.length}`
                    inputs.forEach(element => {
                      element.value = ""
                      modal.style.display = "none"
                    });
                    
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
customElements.define("add-brands",addBrand)
