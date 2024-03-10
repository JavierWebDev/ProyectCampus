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

// BOTONES

const BtnAnadirActivo = document.querySelector("#BtnAddActive")
const BtnEditarActivo = document.querySelector("#BtnEditActive")
const BtnEliminarActivo = document.querySelector("#BtnDeleteActive")
const BtnListarActivo = document.querySelector("#BtnListActive")

// WEB COMPONENTS

const AnadirActivo = document.querySelector("add-actives")
const EditarActivo = document.querySelector("update-actives")
const EliminarActivo = document.querySelector("delete-actives")
const ListarActivo = document.querySelector("show-actives")

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
    EditarActivo.style.display = "none"

    e.preventDefault()
    e.stopImmediatePropagation()
})