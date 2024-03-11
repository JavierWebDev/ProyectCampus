import { getElementData, getData, deleteData } from "/../../APIs/API.js";

export class showActive extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.showActive();
  }
  render() {
    this.innerHTML = /* html */ `
        <section id="ShowActiveForm">
            <div class="contenedor-inputs_buscar">
                <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
                <button id="buscarActivo" class="button-filtrar"><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
            </div>

            <dialog id="VentanaDetalles" class="cont-dialog" open>

            </dialog>

            <div id="activesFoundShow" class="contenedor-mostrar"></div>
        </section>
        `;
  }

  showActive() {
    const endpoint = "actives";
    const buscarActivo = this.querySelector("#buscarActivo");
  
    addEventListener("DOMContentLoaded", async () => {
      const activoBuscado = document.querySelector("#activoBuscado").value;
  
      getData(endpoint)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              `Error en la solicitud POST: ${response.status} - ${response.statusText}`
            );
          }
        })
        .then((responseData) => {
          if (responseData !== undefined && responseData !== null) {
            responseData.forEach(activo => {
              const clon = document.createElement("div");
              clon.classList.add("contenedor-tarjeta");
  
              clon.innerHTML = `
                <h1 class="tarjeta-listar_id">${activo.id}</h1>
                <h2 class="tarjeta-listar_titulo">${activo.nombreActivo}</h2>
                <p class="tarjeta-listar_estado">${activo.estado}</p>
                <a href="#" class="button-listar"><box-icon name='info-circle' color='#ffffff' ></box-icon></a>
              `;
  
              document.querySelector("#activesFoundShow").append(clon);
            });
            
            const btnDetallesLista = document.querySelectorAll(".button-delete_listar");
  
            btnDetallesLista.forEach(boton => {
              const modalInformacion = document.querySelector("#VentanaDetalles");
  
              boton.addEventListener("click", (e) => {
                modalInformacion.style.display = "flex"
                modalInformacion.innerHTML = `
                <h1>${activo.nombreActivo}</h1>
                `
  
                e.preventDefault();
                e.stopImmediatePropagation();
              });
            });
  
            // Manejador de evento para el botón cancelar
            document.querySelector("#BtnCancelarListar").addEventListener("click", (e) => {
              const modalDenegar = document.querySelector("#VentanaDenegarListarActivos");
              modalDenegar.style.display = "none";
            });
  
          } else {
            console.log("Activo no encontrado");
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    });
  }
}
customElements.define("show-actives", showActive);
