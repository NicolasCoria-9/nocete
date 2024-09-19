
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


const productosLink = document.getElementById('productosLink');
    const productosMenu = document.getElementById('productosMenu');

    productosLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir la redirección
        productosMenu.style.display = productosMenu.style.display === 'block' ? 'none' : 'block';
    });

