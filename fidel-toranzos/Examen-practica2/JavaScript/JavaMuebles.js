function abrir(){
    document.getElementById("vent").style.display="block";
}

function cerrar(){
    document.getElementById("vent").style.display="none";
}

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

function mostrar(input){
    var img=document.getElementById("img");
    if(input.value=="Armario Contemporaneo"){
        img.style.visibility="visible";
    }
}