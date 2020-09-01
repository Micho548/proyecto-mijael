/* para elegir con clik en un buscador */
$(function(){
    $(".dropdown-item").click(function(){ /* debemos selecionar el nombre de items del buscador */
        var icon_text=$(this).html(); 
        $(".jsl").html(icon_text);     /* selecionamos el nombre del boton buscador */
    })
})
$(function(){
    alert("Ing lo hize en ENGLISH por que me estoy familiarizando con el Idioma");
})
/*
var persona={
    nombre:"Limbert",
    apellido:"Aruquipa",
    estatura:1.75,
    colorOjos: "Brown"
};

document.getElementById("elemento4").innerHTML = persona.nombre + " it's my name " + 
persona.apellido + " it's my last Name" + 
persona.estatura + " my stature " + 
persona.colorOjos + " it's the color of my eyes";
*/