 var inicializarHora = function(){
    var fechaActual = new Date();
    var tiempoHoras = fechaActual.getHours();
    var tiempoMinutos = fechaActual.getMinutes();
    var tiempoSegundos = fechaActual.getSeconds();
     
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDay();
    var diaDelMes = fechaActual.getDate();
    var aActual = fechaActual.getFullYear();


    var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"
    , "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var esteMes = meses[mesActual];

    var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var diaDeHoy = diasDeLaSemana[diaActual];

 
    tiempoHoras=(tiempoHoras > 12)?tiempoHoras:tiempoHoras;
    tiempoHoras=(tiempoHoras < 10)?"0"+tiempoHoras:tiempoHoras;
    tiempoMinutos=(tiempoMinutos < 10)?"0"+tiempoMinutos:tiempoMinutos;
    tiempoSegundos=(tiempoSegundos < 10)?"0"+tiempoSegundos:tiempoSegundos;

    document.getElementById("laFecha").innerHTML=diaDeHoy+" "+diaDelMes+" de "+esteMes+" del "+aActual;
    document.getElementById("info").innerHTML=tiempoHoras+":"+tiempoMinutos+":"+tiempoSegundos+" ";

}
inicializarHora();
setInterval(inicializarHora, 1000)