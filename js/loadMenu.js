document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById('headerContainer'); 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menuContainer.innerHTML = this.responseText;
            menuContainer.style.display = 'block'; // Mostrar el contenedor
   

        }
    };
    xhttp.open("GET", "../menu.html", true);
    xhttp.send();
});

document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById('footerContainer'); 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            menuContainer.innerHTML = this.responseText;
            menuContainer.style.display = 'block'; // Mostrar el contenedor
   

        }
    };
    xhttp.open("GET", "../footer.html", true);
    xhttp.send();
});

