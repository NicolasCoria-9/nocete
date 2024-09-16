
//Creo la funcion
function muestra_ocultar(id){

    let div = document.getElementById(id);  //declaro la variable div y la igualo al objeto document con su funcion

    if (div.style.display == "none"){       //Si el displey es igual a none se pone en flex
        div.style.display = "flex";        // y se muestra el mensaje. Si es igual a flex,                            
    }                                     // no se muestra el mensaje
    else{
        div.style.display = "none";
    }
}

