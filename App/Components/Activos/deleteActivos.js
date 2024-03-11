import { deleteData, getData } from '/../../APIs/API.js';

export class deleteActives extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteActive();
    }
    render() {
        this.innerHTML = /* html */ `
            <section id="DeleteActive">
              <div class="contenedor-titulo_principal">
                  <h1 class="titulo-formulario">Eliminar Activo</h1>
              </div>

              <div class="cont-form_inputs">
                <div class="contenedor-inputs_buscar">
                    <input class="input-form" id="activoBuscadoEliminar" placeholder=" digita el nombre del producto">
                    <button id="buscarActivoEliminar" class="button-filtrar"><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
                </div>
              </div>
    
                <dialog id="VentanaConfirmarEliminar" class="cont-dialog" closed>
                    <h1 class="titulo-dialog">Estas seguro que deseas eliminar el activo?</h1>
    
                    <a href="#" id="BtnCancelarEliminar" class="btn-cancelar">Cancelar</a>
                    <a href="#" id="BtnEnviarEliminar" class="btn-aceptar">Aceptar</a>
                </dialog>
    
                <dialog id="VentanaDenegarEliminarActivos" class="cont-dialog" closed>
                  <h1 class="titulo-dialog">El activo no ha sido dado de baja!</h1>
    
                  <a href="#" id="BtnCerrarDenegarEliminar" class="btn-aceptar">Aceptar</a>
                </dialog>
    
                <div id="activesFoundShowEliminar" class="contenedor-mostrar"></div>
            </section>
            `;
      }
    
      deleteActive() {
        const endpoint = "actives";
        const buscarActivo = document.querySelector("#activoBuscadoEliminar");
        
      
        addEventListener("DOMContentLoaded", async () => {
          
          
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
                buscarActivo.addEventListener('input', function(){
                  const contenedorMostrar = document.querySelector("#activesFoundShowEliminar");
                  contenedorMostrar.innerHTML = '';

                  responseData.forEach(activo => {
                    const activoBuscado = document.querySelector("#activoBuscadoEliminar").value;
                    
                    const clon = document.createElement("div");
                        clon.classList.add("contenedor-tarjeta");
                        clon.innerHTML = `
                            <h1 class="tarjeta-listar_id">${activo.id}</h1>
                            <h2 class="tarjeta-listar_titulo">${activo.nombreActivo}</h2>
                            <p class="tarjeta-listar_estado">${activo.estado}</p>
                            <a href="#" class="button-delete">X</a>
                        `;

                        contenedorMostrar.append(clon)

                    const btnEliminarLista = document.querySelectorAll(".button-delete");

                    btnEliminarLista.forEach(boton => {
                      const modalEliminar = document.querySelector("#VentanaConfirmarEliminar");
                      const modalDenegar = document.querySelector("#VentanaDenegarEliminarActivos");
          
                      boton.addEventListener("click", (e) => {
                        const activoEstado = e.target.parentElement.querySelector('.tarjeta-listar_estado').innerText;
                        
                        if (activoEstado === "2") {
                          modalEliminar.style.display = "flex";
        
                          document.querySelector("#BtnCancelarEliminar").addEventListener("click", (e) => {
                            modalEliminar.style.display = "none"
                          })
                          document.querySelector("#BtnEnviarEliminar").addEventListener("click", (e) => {
                            deleteData(endpoint, activo.id)
        
                            modalEliminar.style.display = "none"
                          })
        
        
                        } else {
                          document.querySelector("#BtnCerrarDenegarEliminar").addEventListener("click", (e) => {
                            modalDenegar.style.display = "none"
                          })
        
                          modalDenegar.style.display = "flex";
                        }
          
                        e.preventDefault();
                        e.stopImmediatePropagation();
                      });
                    });
                    
                      const activoNombre = activo.id
                      if (activoNombre.includes(activoBuscado)) {
                        clon.style.display = 'grid'
                      }else if(activoNombre !== activoBuscado){
                        clon.style.display = 'none'
                      }
                  
                });
    
                });

      
                document.querySelector("#BtnCancelarEliminar").addEventListener("click", (e) => {
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
customElements.define("delete-actives", deleteActives);


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
