const usuario = [];

function agregarUsuario () {
    let nombreIngresado = prompt("Nombre:");
    let edadIngresada = parseInt(prompt("Edad:"));
    let ingresoIngresado = parseFloat(prompt("Ingreso mensual en USD:"));
    let rangoIngreso;

    if (ingresoIngresado < 500) {
        rangoIngreso = "bajo";
    } else if (ingresoIngresado <= 999) {
        rangoIngreso = "medio";
    } else {
        rangoIngreso = "alto";
    }

    usuario.push({
        nombre: nombreIngresado,
        edad: edadIngresada,
        ingreso: ingresoIngresado,
        rango: rangoIngreso
    }
    )

    for (let usuarios of usuario){
        console.log(
            usuarios.nombre + " / " +
            usuarios.edad + " años / " +
            usuarios.ingreso + " USD Mensuales / Rango "
            + usuarios.rango);        
    }
    console.log("fin usuarios");
}

function contarPorRango (){
    
    let bajo = 0;
    let medio = 0;
    let alto = 0;

    for (let usuarios of usuario){
        if (usuarios.rango === "bajo") {
            bajo++;
        } else if (usuarios.rango === "medio") {
            medio++;
        } else if (usuarios.rango === "alto") {
            alto++;
        }
    }

    console.log("----- Resumen por rango -----");
    console.log(bajo + " usuario(s) con ingreso bajo");
    console.log(medio + " usuario(s) con ingreso medio");
    console.log(alto + " usuario(s) con ingreso alto");
    console.log("fin conteo");

}

function ordenarIngresoZA() {
    usuario.sort((a,b) => b.ingreso - a.ingreso);
    for (let usuarios of usuario){
        console.log(
            usuarios.nombre + " / " +
            usuarios.edad + " años / " +
            usuarios.ingreso + " USD Mensuales / Rango "
            + usuarios.rango);        
    }
    if (usuario.length == 0) {
        console.log ("no existen usuarios")
    } else {
    console.log("usuarios ordenados");
    }
}



