import { getData, postDatas } from '/../../../APIs/API.js';

export class addMoves extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.saveData();
    }
    /* id, fecha, activoId, comentario, asignacionId */
    render() {
      const endpoint = 'movement'
        this.innerHTML = /* html */ `
        <section id="AddMovesForm" class="contenedor-formulario">

        <div class="contenedor-titulo_principal">
          <h1 id="TituloFormulario" class="titulo-formulario">Añadir Activo</h1>
        </div>

        <dialog id="Ventana">
          <h1>aaa</h1>
        </dialog>
        <form id="MovesForm" class="cont-form">
        
        <div class="cont-form_inputs">
          <h1 class="text-id" id="ShowIDmoves"></h1>    

          <div  class="cont-input">
            <h3>Fecha Del Movimiento</h3>
            <input class="input-form" name="fecha"  id="fecha" type="date">
          </div>
        
            <div  class="cont-input">
              <h3>Activo Del Movimiento </h3>
              <select class="input-seleccionar" name="activoId"  id="activoAsignado">
              </select>
            </div>
            
            <div class="cont-input">
              <h3>Comentario </h3>
              <input class="input-form" name="comentario" id="comentario" placeholder="Ingresa comentarios">
            </div>
            
            <div class="cont-input">
        
              <h3>Asignacion</h3>
              <input class="input-form" name="asignacionId" id="valorActivo" placeholder=" digita el codigo de la transaccion ">
            </div>
          </div>
          <a href="#" class="input-anadir" id="BtnEnviarFormMoves">Save</a>
        </form>

        <dialog id="VentanaConfirmarMoves" class="cont-dialog" closed>
        <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
  
        <a href="#" id="BtnCancelarMoves" class="btn-cancelar">Cancelar</a>
        <a href="#" id="BtnEnviarMoves" class="btn-aceptar">Aceptar</a>
      </dialog>
      </section>
        `

    }

    showData = () => {
      const endpoint = 'movement'
      const showID = document.querySelector("#ShowIDmoves")
      

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
          showID.innerHTML = `M-${responseData.length + 1}`
        })
      })
    }

    saveData = () =>{
      const frmRegistro = document.querySelector('#MovesForm');
      const endpoint = 'movement'
      const showID = document.querySelector("#ShowIDmoves")
      const btnCancelar = document.querySelector("#BtnCancelarMoves")
      const BtnEnviarForm = document.querySelector("#BtnEnviarFormMoves")
      const modal = document.getElementById("VentanaConfirmarMoves")
      const inputs = document.querySelectorAll(".input-form")


      BtnEnviarForm.addEventListener("click", () => {
        modal.style.display = "flex"
      })
      btnCancelar.addEventListener("click", () => {
        modal.style.display = "none"
      })

      document.querySelector("#BtnEnviarMoves").addEventListener("click",(e) =>{
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
                    showID.innerHTML = `M-${responseData.length}`
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
customElements.define("add-moves",addMoves)
