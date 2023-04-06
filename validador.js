let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

 //oculta el menu una vez que seleccionamos una opcion
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion que aplica alas animaciones de las habilidades
function efectoHabilidades (){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("wordpress");
        habilidades[3].classList.add("github");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//@wiiliam martinez

