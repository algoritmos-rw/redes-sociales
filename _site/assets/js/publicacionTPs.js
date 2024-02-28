var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];


window.onload = agregarTPsATabla;
function agregarTPsATabla() {
    var dtHoy = new Date();    
    var dtFinCuatrimestre = new Date("2022-07-28");
    
    
        var dtPublicacion = new Date("2022-03-25");
        var dtEntrega = new Date("2022-04-01");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/tp0'>TP0</a> </td>"
        else fila.innerHTML += "<td> TP0 </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-04-01");
        var dtEntrega = new Date("2022-04-04");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/adminmemoria'>Administración de Memoria</a> </td>"
        else fila.innerHTML += "<td> Administración de Memoria </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-04-04");
        var dtEntrega = new Date("2022-04-11");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/pila'>Pila</a> </td>"
        else fila.innerHTML += "<td> Pila </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-04-11");
        var dtEntrega = new Date("2022-04-18");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/cola'>Cola</a> </td>"
        else fila.innerHTML += "<td> Cola </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-04-18");
        var dtEntrega = new Date("2022-04-25");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/2022_1/tp1'>TP1</a> </td>"
        else fila.innerHTML += "<td> TP1 </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-04-25");
        var dtEntrega = new Date("2022-05-02");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/lista'>Lista</a> </td>"
        else fila.innerHTML += "<td> Lista </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-05-02");
        var dtEntrega = new Date("2022-05-09");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/hash'>Hash</a> </td>"
        else fila.innerHTML += "<td> Hash </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-05-09");
        var dtEntrega = new Date("2022-05-20");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/abb'>ABB</a> </td>"
        else fila.innerHTML += "<td> ABB </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-05-20");
        var dtEntrega = new Date("2022-05-30");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/heap'>Heap</a> </td>"
        else fila.innerHTML += "<td> Heap </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-05-30");
        var dtEntrega = new Date("2022-06-17");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/2022_1/tp2'>TP2</a> </td>"
        else fila.innerHTML += "<td> TP2 </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    
        var dtPublicacion = new Date("2022-06-17");
        var dtEntrega = new Date("2022-07-08");
        
        var tabla = document.getElementById("tabla-trabajos");
        var fila = document.createElement("tr")
        
        if (dtHoy >= dtPublicacion && dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td> <a href='/algo2/tps/2022_1/tp3'>TP3</a> </td>"
        else fila.innerHTML += "<td> TP3 </td>"
        
        var prettyPublicacion = dtPublicacion.getUTCDate() + ' de ' + monthNames[dtPublicacion.getUTCMonth()];
        var prettyEntrega = dtEntrega.getUTCDate() + ' de ' + monthNames[dtEntrega.getUTCMonth()];

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyPublicacion + "</td>"
        else fila.innerHTML += "<td> </td>"

        if (dtHoy <= dtFinCuatrimestre) fila.innerHTML += "<td>" + prettyEntrega + "</td>"
        else fila.innerHTML += "<td> </td>"

        tabla.appendChild(fila)
    

}


