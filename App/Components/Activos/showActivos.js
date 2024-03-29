import { getElementData, getData, deleteData } from "/../../APIs/API.js";

export class showActive extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.showActive();
  }
  render() {
    this.innerHTML = /* html */ `

        <section id="ShowActive">
            <div class="contenedor-titulo_principal">
              <h1 class="titulo-formulario">Buscar Activos</h1>
            </div>
            <div class="cont-form_inputs">
              <div class="contenedor-inputs_buscar">
                  <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
                  <button id="buscarActivo" class="button-filtrar"><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
              </div>
            </div>

            <div id="activesFoundShow" class="contenedor-mostrar"></div>
        </section>
        `;
  }

  showActive() {
    const endpoint = "actives";
    const buscarActivo = document.querySelector("#activoBuscado");

    addEventListener("DOMContentLoaded", () => {

      const SeccionMostrar = document.querySelector("#ShowActive");

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
            buscarActivo.addEventListener('input', function () {
              const contenedorMostrar = document.querySelector('#activesFoundShow')
              contenedorMostrar.innerHTML = ""

              responseData.forEach(activo => {
                const activoBuscado = document.querySelector("#activoBuscado").value;

                const clon = document.createElement("div");
                clon.classList.add("contenedor-tarjeta");

                clon.innerHTML = `
                  <h1 class="tarjeta-listar_id">${activo.id}</h1>
                  <h2 class="tarjeta-listar_titulo">${activo.nombreActivo}</h2>
                  <p class="tarjeta-listar_estado">${activo.estado}</p>
                  <a href="#" class="button-listar"><box-icon name='info-circle' color='#ffffff' ></box-icon></a>
                `;


                contenedorMostrar.appendChild(clon);
                const activoId = activo.id
                console.log(activoId)
                console.log(activoBuscado)
                if (activoId.includes(activoBuscado)) {
                  clon.style.display = 'grid'
                } else if (activoId !== activoBuscado) {
                  clon.style.display = 'none'
                }
                const btnDetallesLista = clon.querySelector(".button-listar");

                btnDetallesLista.addEventListener("click", (e) => {
                  let modal = document.createElement("dialog");
                  modal.innerHTML = `
                    <h1>${activo.id}</h1>
                    <h1>${activo.nombreActivo}</h1>
                    <p>${activo.valorActivo}</p>
                    <p>${activo.proveedorActivo}</p>
                    <p>${activo.serialActivo}</p>
                    <p>${activo.empresaResponsable}</p>
                    <a id="BtnCerrarModalListar" class="btn-cancelar_listar">X</a>
                  `;
                  modal.classList.add("cont-dialog");
                  modal.style.display = "flex";

                  SeccionMostrar.appendChild(modal);

                  const BtnCerrarDetalles = modal.querySelector("#BtnCerrarModalListar");

                  BtnCerrarDetalles.addEventListener("click", () => {
                    modal.style.display = "none";
                  });

                  e.preventDefault();
                  e.stopImmediatePropagation();
                });

              })

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
