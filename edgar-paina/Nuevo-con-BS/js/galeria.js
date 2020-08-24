var reloj = function(){
    var clock = new Date();
    var hora = clock.getHours();
    var minuto = clock.getMinutes();
    var segundo = clock.getSeconds();
    var ampm;
    ampm =(hora > 12)?"pm":"am";
    hora=(hora > 12)?hora-12:hora;
    hora=(hora < 10)?"0"+hora:hora;
    minuto=(minuto < 10)?"0"+minuto:minuto;
    segundo=(segundo < 10)?"0"+segundo:segundo;

    document.getElementById("Hora").innerHTML=hora+":"+minuto+":"+segundo+" "+ampm;
}
reloj();
setInterval(reloj, 1000);