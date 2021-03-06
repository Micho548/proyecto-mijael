$(document).ready(function () {
    $('#tablax').DataTable({
        language: {
            processing: "Tratamiento en curso...",
            search: "Buscar&nbsp;:",
            lengthMenu: "Agrupar de _MENU_ items",
            info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
            infoEmpty: "No existen datos.",
            infoFiltered: "(filtrado de _MAX_ elementos en total)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron datos con tu busqueda",
            emptyTable: "No hay datos disponibles en la tabla.",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Ultimo"
            },
            aria: {
                sortAscending: ": active para ordenar la columna en orden ascendente",
                sortDescending: ": active para ordenar la columna en orden descendente"
            }
        },
        scrollY: 540,
        lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
    });
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

var cont = 0; 
function aumento(){
    if(document.getElementById("incrementar")) {
        cont++;
        document.getElementById("incrementar").innerHTML=cont;
    }
    if(document.getElementById("ver")) {
        document.getElementById("ver").innerHTML=cont;
    }       
}

function vaciar(){
        cont=0;
        document.getElementById("incrementar").innerHTML=cont;
        document.getElementById("ver").innerHTML=cont;
    }
