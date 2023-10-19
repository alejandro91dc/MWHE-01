/**
 * ALEJANDRO DÍAZ CARMONA
 */
console.log ("Ejercicio de Alejandro Díaz");

function changeImage() {
    "use restrict";
    let imagen = document.getElementsByTagName("img")[0];
    let ruta_antigua = imagen.getAttribute("src");
    ruta_antigua.match("normal") ? ruta_nueva = ruta_antigua.replace("normal", "hover") : ruta_nueva = ruta_antigua.replace("hover", "normal");
    imagen.setAttribute("src", ruta_nueva);
}

function changeOpacity() {
    let scroll = window.scrollY;
    let menu = document.getElementById("menu").clientHeight;
    let max_scroll = window.innerHeight - menu; 
    if(scroll <= max_scroll){
        let opacity = scroll / max_scroll;
        let menu_element = document.getElementById("menu");
        menu_element.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    } 
}

    window.onscroll = function () {
        changeOpacity();
    }

function openMenu() {
    "use strict";
    document.getElementById("menu").children[1].style.left = "0";
}

function closeMenu() {
    "use strict";
    document.getElementById("menu").children[1].style.left = "-100%";
}

function menu() {
    "use strict"
    document.getElementById("menu").lastElementChild.style.left === "0" ? closeMenu() : openMenu();
} 

function checkPasswords() {
    let passA = document.getElementById("user_pass").value;
    let passB = document.getElementById("user_pass_r").value;
    const showErr = document.getElementsByClassName("error_msg")[0].style.display = "block";
    (passA !== passB) ? ( showErr ) : alert("Regístro correcto!");
    return false;
}
