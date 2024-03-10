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
        <section id="AddCategorieForm" class="contenedor-formulario">

        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario">Añadir Activo</h1>
        </div>

        <dialog id="Ventana">
          <h1>aaa</h1>
        </dialog>
        <form id="activesForm" class="cont-form">
        
        <div class="cont-form_inputs">
          <h1 class="text-id" id="ShowID"></h1>    

          <div  class="cont-input">
            <h3>Nombre Del Activo</h3>
            <input class="input-form" name="nombreActivo"  id="nombreActivo" placeholder=" digita el codigo de la transaccion ">
          </div>
          </div>
          <a href="#" class="input-anadir" id="BtnEnviarForm">Save</a>
        </form>

        <dialog id="VentanaConfirmar" class="cont-dialog" closed>
        <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
  
        <a href="#" id="BtnCancelar" class="btn-cancelar">Cancelar</a>
        <a href="#" id="BtnEnviar" class="btn-aceptar">Aceptar</a>
      </dialog>
      </section>
        `

    }

    showData = () => {
      const endpoint = 'actives'
      const showID = document.querySelector("#ShowID")
      

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
          showID.innerHTML = `C-${responseData.length + 1}`
        })
      })
    }

    saveData = () =>{
      const frmRegistro = document.querySelector('#activesForm');
      const endpoint = 'actives'
      const showID = document.querySelector("#ShowID")
      const btnCancelar = document.querySelector("#BtnCancelar")
      const BtnEnviarForm = document.querySelector("#BtnEnviarForm")
      const modal = document.getElementById("VentanaConfirmar")
      const inputs = document.querySelectorAll(".input-form")


      BtnEnviarForm.addEventListener("click", () => {
        modal.style.display = "flex"
      })
      btnCancelar.addEventListener("click", () => {
        modal.style.display = "none"
      })

      document.querySelector("#BtnEnviar").addEventListener("click",(e) =>{
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
                    showID.innerHTML = `C-${responseData.length}`
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
customElements.define("add-actives",addActives)
