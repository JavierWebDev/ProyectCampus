// import {  getElementData, getData} from '/../../APIs/API.js';

// export class showCategories extends HTMLElement {
//     constructor() {
//         super();
//         this.render();
//         this.showCategorie();
//     }
//     render() {
//         this.innerHTML = /* html */ `
//         <input class="input-form" id="categoriaBuscado" placeholder=" digita el nombre del producto">
//         <button id="buscarCategoria">ingresar</button>
//         <div id="categorieFoundShow"></div>
//         `
//     }
    
//     showCategorie() {
//         const endpoint = "actives";
//     const buscarActivo = document.querySelector("#buscarActivo");
  
//     addEventListener("DOMContentLoaded", () => {
//       const activoBuscado = document.querySelector("#activoBuscado").value;
//       const SeccionMostrar = document.querySelector("#ShowActive");
      
//       getData(endpoint)
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error(
//               `Error en la solicitud POST: ${response.status} - ${response.statusText}`
//             );
//           }
//         })
//         .then((responseData) => {
//           if (responseData !== undefined && responseData !== null) {
//             responseData.forEach(activo => {
//               const clon = document.createElement("div");
//               clon.classList.add("contenedor-tarjeta");
  
//               clon.innerHTML = `
//                 <h1 class="tarjeta-listar_id">${activo.id}</h1>
//                 <h2 class="tarjeta-listar_titulo">${activo.nombreActivo}</h2>
//                 <p class="tarjeta-listar_estado">${activo.estado}</p>
//                 <a href="#" class="button-listar"><box-icon name='info-circle' color='#ffffff' ></box-icon></a>
//               `;
  
//               document.querySelector("#activesFoundShow").appendChild(clon);
  
//               const btnDetallesLista = clon.querySelector(".button-listar");
              
//               btnDetallesLista.addEventListener("click", (e) => {
//                 let modal = document.createElement("dialog");
//                 modal.innerHTML = `
//                   <h1>${activo.id}</h1>
//                   <h1>${activo.nombreActivo}</h1>
//                   <p>${idenEstado(activo.estado)}</p>
//                   <a id="BtnCerrarModalListar" class="btn-cancelar_listar">X</a>
//                 `;
//                 modal.classList.add("cont-dialog");
//                 modal.style.display = "flex";
  
//                 SeccionMostrar.appendChild(modal);
  
//                 const BtnCerrarDetalles = modal.querySelector("#BtnCerrarModalListar");
  
//                 BtnCerrarDetalles.addEventListener("click", () => {
//                   modal.style.display = "none";
//                 });
  
//                 e.preventDefault();
//                 e.stopImmediatePropagation();
//               });
//             });
//           } else {
//             console.log("Activo no encontrado");
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error.message);
//         });
//     });
//     }
// }
// customElements.define("show-categories",showCategories)