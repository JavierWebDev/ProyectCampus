import { deleteData, getElementData } from '/../../APIs/API.js';

export class deleteActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }
    render() {
        this.innerHTML = /* html */ `
            <section id="ShowActiveForm">
                <div class="contenedor-inputs_buscar">
                    <input class="input-form" id="activoBuscado" placeholder=" digita el nombre del producto">
                    <button id="buscarActivo" class="button-filtrar"><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
                </div>
    
                <dialog id="VentanaConfirmarEliminar" class="cont-dialog" closed>
                    <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
    
                    <a href="#" id="BtnCancelar" class="btn-cancelar">Cancelar</a>
                    <a href="#" id="BtnEnviar" class="btn-aceptar">Aceptar</a>
                </dialog>
    
                <dialog id="VentanaDenegarEliminarActivos" class="cont-dialog" closed>
                  <h1 class="titulo-dialog">El activo no ha sido dado de baja!</h1>
    
                  <a href="#" id="BtnCerrarDenegar" class="btn-aceptar">Aceptar</a>
                </dialog>
    
                <div id="activesFoundShow" class="contenedor-mostrar"></div>
            </section>
            `;
      }
    
      deleteActive() {
        const endpoint = "actives";
        const buscarActivo = this.querySelector("#buscarActivo");
      
        addEventListener("DOMContentLoaded", async () => {
          const activoBuscado = document.querySelector("#activoBuscado").value;

          buscarActivo.addEventListener('click', )
      
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
                    <a href="#" class="button-delete_listar">X</a>
                  `;
      
                  document.querySelector("#activesFoundShow").append(clon);
                });
                
                const btnEliminarLista = document.querySelectorAll(".button-delete_listar");
      
                btnEliminarLista.forEach(boton => {
                  const modalEliminar = document.querySelector("#VentanaConfirmarEliminar");
                  const modalDenegar = document.querySelector("#VentanaDenegarEliminarActivos");
      
                  boton.addEventListener("click", (e) => {
                    const activoEstado = e.target.parentElement.querySelector('.tarjeta-listar_estado').innerText;
                    
                    if (activoEstado === "2") {
                      modalEliminar.style.display = "flex";
    
                      document.querySelector("#BtnCancelarListar").addEventListener("click", (e) => {
                        modalEliminar.style.display = "none"
                      })
                      document.querySelector("#BtnEnviarListar").addEventListener("click", (e) => {
                        deleteData(endpoint, activo)
    
                        modalEliminar.style.display = "none"
                      })
    
    
                    } else {
                      document.querySelector("#BtnCerrarDenegar").addEventListener("click", (e) => {
                        modalDenegar.style.display = "none"
                      })
    
                      modalDenegar.style.display = "flex";
                    }
      
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  });
                });
      
                // Manejador de evento para el botón cancelar
                document.querySelector("#BtnCancelarListar").addEventListener("click", (e) => {
                  const modalDenegar = document.querySelector("#VentanaDenegarEliminarActivos");
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
// customElements.define("delete-actives", deleteActives);


// const searchBar = document.getElementById('SearchInput');

// searchBar.addEventListener('input', function() {
//     const searchText = searchBar.value.toLowerCase(); 

//     const marvelHeroes = document.querySelectorAll('#ContTarjetasMarvel .tarjeta');
//     const dcHeroes = document.querySelectorAll('#ContTarjetasDC .tarjeta');
//     const titulos = document.querySelectorAll('.titulo_main')

//     marvelHeroes.forEach(hero => {
//         const heroName = hero.querySelector('.cont-titulo').textContent.toLowerCase();
//         if (heroName.includes(searchText)) {
//             hero.style.display = 'block'; 
//         } else {
//             hero.style.display = 'none';
//         }
//     });

//     dcHeroes.forEach(hero => {
//         const heroName = hero.querySelector('.cont-titulo').textContent.toLowerCase();
//         if (heroName.includes(searchText)) {
//             hero.style.display = 'block';
//         } else {
//             hero.style.display = 'none';
//         }
//     });
// });
