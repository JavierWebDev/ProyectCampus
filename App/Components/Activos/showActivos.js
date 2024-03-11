import { getElementData, getData } from "/../../APIs/API.js";

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

            <div id="activesFoundShow" class="contenedor-mostrar"></div>
        </section>
        `;
  }

  showActive() {
    const endpoint = "actives";
    const buscarActivo = this.querySelector("#buscarActivo");
    addEventListener("DOMContentLoaded", async () => {
      const activoBuscado = document.querySelector('#activoBuscado').value;
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
          console.log(responseData);
          if (responseData !== undefined && responseData !== null) {
            responseData.forEach(activo => {
                const clon = document.createElement("div")
                clon.classList.add("contenedor-tarjeta")

                clon.innerHTML=`
            
                <h1 class="tarjeta-listar_id">${activo.id}</h1>
        
                <h2 class="tarjeta-listar_titulo">${activo.nombreActivo}</h2>
        
                <p class="tarjeta-listar_estado">${activo.estado}</p>
            
                <a href="#" class="button-delete" id="BtnEliminarActivoListar">X</a>

                    
                `

                document.querySelector("#activesFoundShow").append(clon)
            })
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
