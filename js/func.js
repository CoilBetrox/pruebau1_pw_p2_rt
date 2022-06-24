function incorrecto(){
    document.getElementById("idMensaje").innerHTML="Pokémon incorrecto, la respuesta es: excadril";
    document.getElementById("idImagen").src='../img/pcolor.jpg';
    document.getElementById("idMensaje").style.color = "red";
    document.getElementById("idMensaje").style.borderColor="red";
}

function correcto(){
    document.getElementById("idMensaje").innerHTML="Felicitaciones, has seleccionado la opción correcta";
    document.getElementById("idImagen").src='../img/pcolor.jpg';
    document.getElementById("idMensaje").style.color = "yellow";
    document.getElementById("idMensaje").style.borderColor="yellow";
}

function restart(){
    document.getElementById("idMensaje").innerHTML="Pulsa Un botón";
    document.getElementById("idImagen").src='../img/pnegro.jpg';
    document.getElementById("idMensaje").style.color = "black";
    document.getElementById("idMensaje").style.borderColor="black";
}