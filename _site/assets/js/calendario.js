window.onload = agregarTPsYParcialitosACalendario;
function agregarTPsYParcialitosACalendario(desde, hasta) {
    var tabla = document.getElementById("tabla-calendario");
    var trabajos_y_parcialitos = [];

/*    
        var dtEntrega = new Date("2022-04-01");
        var dtPublicacion = new Date("2022-03-25");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "TP0";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/tp0'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-04-04");
        var dtPublicacion = new Date("2022-04-01");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Administración de Memoria";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/adminmemoria'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-04-11");
        var dtPublicacion = new Date("2022-04-04");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Pila";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/pila'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-04-18");
        var dtPublicacion = new Date("2022-04-11");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Cola";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/cola'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-04-25");
        var dtPublicacion = new Date("2022-04-18");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "TP1";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/2022_1/tp1'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-05-02");
        var dtPublicacion = new Date("2022-04-25");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Lista";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/lista'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-05-09");
        var dtPublicacion = new Date("2022-05-02");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Hash";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/hash'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-05-20");
        var dtPublicacion = new Date("2022-05-09");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "ABB";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/abb'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-05-30");
        var dtPublicacion = new Date("2022-05-20");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "Heap";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/heap'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-06-17");
        var dtPublicacion = new Date("2022-05-30");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "TP2";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/2022_1/tp2'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
    
        var dtEntrega = new Date("2022-07-08");
        var dtPublicacion = new Date("2022-06-17");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            var label = "TP3";
            if (dtPublicacion <= new Date()) {
                label = "<a href='/algo2/tps/2022_1/tp3'>" + label + "</a>";
            }
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"Entrega de: " + label]);
        }
     */

    
        var dtEntrega = new Date("2022-04-25");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"1er parcialito (en el horario de la teórica)"]);
        }
    
        var dtEntrega = new Date("2022-05-23");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"2do parcialito (en el horario de la teórica)"]);
        }
    
        var dtEntrega = new Date("2022-06-24");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"3er parcialito (en el horario de la teórica)"]);
        }
    
        var dtEntrega = new Date("2022-06-27");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"1er recuperatorio (parcialitos 1 y 2)"]);
        }
    
        var dtEntrega = new Date("2022-07-01");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"1er recuperatorio (parcialito 3)"]);
        }
    
        var dtEntrega = new Date("2022-07-08");
        if (!desde || !hasta || (dtEntrega >= desde && dtEntrega <= hasta)) {
            trabajos_y_parcialitos.push([diadelasemana(dtEntrega),dtEntrega,"2do recuperatorio (parcialitos 1, 2 y 3)"]);
        }
    

    trabajos_y_parcialitos.sort(byDate);

    trabajos_y_parcialitos.forEach(
        function(item){
            var fila = document.createElement("tr");
            fila.innerHTML += "<td>" + item[0] + "</td>";
            fila.innerHTML += "<td>" + prettyfecha(item[1]) + "</td>";
            fila.innerHTML += "<td>" + item[2] + "</td>";
            tabla.appendChild(fila);
        }
    );

    return trabajos_y_parcialitos;
}

function diadelasemana(fecha){
    var numero = fecha.getDay();
    if (numero == 0) return 'Lunes'
    if (numero == 4) return 'Viernes'
}

function prettyfecha(fecha){
    return fecha.getUTCDate() + '/' + (fecha.getUTCMonth()+1) + '/' + (fecha.getFullYear());
}

function byDate(a,b) {
    return a[1] - b[1];
}
