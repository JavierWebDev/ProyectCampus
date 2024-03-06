const Sidebar = document.getElementById("navbar")
const BotonesTitulos = document.querySelectorAll("#ItemBig")
const Dropdowns = document.querySelectorAll(".dropdown")

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