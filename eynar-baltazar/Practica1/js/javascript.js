alert("Hola soy un mensaje externo");

let d = new Date();
    document.body.innerHTML = "<h1>El tiempo ahora es:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    "</h1>"

    function miFuncion(){ 
        //hago algo... 
        document.write("Mensaje de otro documento JS Ing") 
    }
    var numero1 = 3;
    var numero2 = 5;
    function suma_y_muestra(primerNumero, segundoNumero) {
    var resultado = primerNumero + segundoNumero;
    alert("El resultado es " + resultado);
    }
    