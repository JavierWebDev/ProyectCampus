const Sidebar = document.getElementById("navbar")
const BotonesTitulos = document.querySelectorAll(".item-title")
const Dropdowns = document.querySelectorAll(".dropdown")

/* ABRIR Y CERRAR NAVBAR */

function AbrirSideBar() {
    Sidebar.classList.remove("close")

    Sidebar.classList.add("show")

    Sidebar.style.visibility = "visible"
}

function CerrarSideBar() {
    Sidebar.classList.remove("show")

    Sidebar.style.visibility = "hidden"

    Sidebar.classList.add("close")
}

document.addEventListener("DOMContentLoaded", () => {
    BotonesTitulos.forEach((boton, i) => {
        boton.addEventListener("click", () => {
            if (Dropdowns[i].style.display === "flex") {
                Dropdowns[i].style.display = "none";
            } else {
                Dropdowns[i].style.display = "flex";
            }
        });
    });
});

/* MANEJO DE LOS WEB COMPONENTS */

/* ACTIVOS */


// WEB COMPONENTS


// ACTIVOS

const AnadirActivo = document.querySelector("add-actives")
const EditarActivo = document.querySelector("update-actives")
const EliminarActivo = document.querySelector("delete-actives")
const ListarActivo = document.querySelector("show-actives")

// BOTONES

const BtnAnadirActivo = document.querySelector("#BtnAddActive")
const BtnEditarActivo = document.querySelector("#BtnEditActive")
const BtnEliminarActivo = document.querySelector("#BtnDeleteActive")
const BtnListarActivo = document.querySelector("#BtnListActive")

BtnAnadirActivo.addEventListener("click", (e) => {
    AnadirActivo.style.display = "block"

    EditarActivo.style.display = "none"
    EliminarActivo.style.display = "none"
    ListarActivo.style.display = "none"

    e.preventDefault()
    e.stopImmediatePropagation()
})

BtnEliminarActivo.addEventListener("click", (e) => {
    EliminarActivo.style.display = "block"

    EditarActivo.style.display = "none"
    AnadirActivo.style.display = "none"
    ListarActivo.style.display = "none"

    e.preventDefault()
    e.stopImmediatePropagation()
})
BtnEditarActivo.addEventListener("click", (e) => {
    EditarActivo.style.display = "block"

    EliminarActivo.style.display = "none"
    AnadirActivo.style.display = "none"
    ListarActivo.style.display = "none"

    e.preventDefault()
    e.stopImmediatePropagation()
})
BtnListarActivo.addEventListener("click", (e) => {
    ListarActivo.style.display = "block"

    EditarActivo.style.display = "none"
    AnadirActivo.style.display = "none"
    EliminarActivo.style.display = "none"

    e.preventDefault()
})

// CATEGORIAS

const AnadirCategorias = document.querySelector("add-categories")
const EditarCategorias = document.querySelector("update-categories")
const EliminarCategorias = document.querySelector("delete-categories")
const ListarCategorias = document.querySelector("show-categories")

// BOTONES

const BtnAnadirCategorias = document.querySelector("#BtnAddCategories")
const BtnEditarCategorias = document.querySelector("#BtnEditCategories")
const BtnEliminarCategorias = document.querySelector("#BtnDeleteCategories")
const BtnListarCategorias = document.querySelector("#BtnListCategories")

BtnAnadirCategorias.addEventListener("click", (e) => {
    AnadirCategorias.style.display = "block"

    EditarCategorias.style.display = "none"
    EliminarCategorias.style.display = "none"
    ListarCategorias.style.display = "flex"

    e.preventDefault()
    e.stopImmediatePropagation()
})

BtnEliminarCategorias.addEventListener("click", (e) => {
    EliminarCategorias.style.display = "block"

    EditarCategorias.style.display = "none"
    AnadirCategorias.style.display = "none"
    ListarCategorias.style.display = "none"

    e.preventDefault()
})
BtnEditarCategorias.addEventListener("click", (e) => {
    EditarCategorias.style.display = "block"

    EliminarCategorias.style.display = "none"
    AnadirCategorias.style.display = "none"
    ListarCategorias.style.display = "none"

    e.preventDefault()
    e.stopImmediatePropagation()
})
BtnListarCategorias.addEventListener("click", (e) => {
    ListarCategorias.style.display = "block"

    EditarCategorias.style.display = "none"
    AnadirCategorias.style.display = "none"
    EditarCategorias.style.display = "none"

    e.preventDefault()
})