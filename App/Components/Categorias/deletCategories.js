import { deleteData, getData } from '/../../APIs/API.js';

export class deleteCategories extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.deleteCategories();
    }
    render() {
        this.innerHTML = /* html */ `
        <section id="DeleteCategorie">
              <div class="contenedor-titulo_principal">
                  <h1 class="titulo-formulario">Eliminar Categoria</h1>
              </div>

              <div class="cont-form_inputs">
                <div class="contenedor-inputs_buscar">
                    <input class="input-form" id="categoriaBuscadoEliminar" placeholder="Digite el nombre de la categoria">
                    <button id="buscarCategoriaEliminar" class="button-filtrar"><box-icon name='trash' type='solid' color='#ffffff' ></box-icon></button>
                </div>
              </div>
    
                <dialog id="VentanaConfirmarEliminarCategoria" class="cont-dialog" closed>
                    <h1 class="titulo-dialog">Estas seguro que deseas eliminar la categoria?</h1>
    
                    <a href="#" id="BtnCancelarEliminarCategoria" class="btn-cancelar">Cancelar</a>
                    <a href="#" id="BtnEnviarEliminarCategoria" class="btn-aceptar">Aceptar</a>
                </dialog>
    
                <div id="categoriesFoundShowEliminar" class="contenedor-mostrar"></div>
            </section>
        `;
    }

    deleteCategories() {
        const endpoint = "categories";
        const buscarCategoria = document.querySelector("#categoriaBuscadoEliminar");
        
      
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
                buscarCategoria.addEventListener('input', function(){
                  const contenedorMostrar = document.querySelector("#categoriesFoundShowEliminar");
                  contenedorMostrar.innerHTML = '';

                  responseData.forEach(categoria => {
                    const categoriaBuscado = document.querySelector("#categoriaBuscadoEliminar").value;
                    
                    const clon = document.createElement("div");
                        clon.classList.add("contenedor-tarjeta");
                        clon.innerHTML = `
                            <h1 class="tarjeta-listar_id">${categoria.id}</h1>
                            <h2 class="tarjeta-listar_titulo">${categoria.nombre}</h2>
                            <a href="#" class="button-delete">X</a>
                        `;

                        contenedorMostrar.append(clon)

                    const btnEliminarLista = document.querySelectorAll(".button-delete");

                    btnEliminarLista.forEach(boton => {
                      const modalEliminar = document.querySelector("#VentanaConfirmarEliminarCategoria");

          
                      boton.addEventListener("click", (e) => {
                          modalEliminar.style.display = "flex";
        
                          document.querySelector("#BtnCancelarEliminarCategoria").addEventListener("click", (e) => {
                            modalEliminar.style.display = "none"
                          })
                          document.querySelector("#BtnEnviarEliminarCategoria").addEventListener("click", (e) => {
                            deleteData(endpoint, categoria.id)
        
                            modalEliminar.style.display = "none"
                          })
          
                        e.preventDefault();
                        e.stopImmediatePropagation();
                      });
                    });
                    
                      const categoriaId = categoria.id
                      if (categoriaId.includes(categoriaBuscado)) {
                        clon.style.display = 'grid'
                      }else if(categoriaId !== categoriaBuscado){
                        clon.style.display = 'none'
                      }
                  
                });
    
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
customElements.define("delete-categories", deleteCategories);
