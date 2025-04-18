// declarar usuarios permitidos
const identAdministrador = "adm"
const identUsuario = "usr"

// array de productos base
const productos = [
    {
        id: 1,
        nombre: "iPhone 16 - 256GB",
        descripcion:"Telefono inteligente de gran capacidad",
        precio: 1499
    },
    {
        id: 2,
        nombre: "iPad Air - 512GB",
        descripcion:"Tableta inteligente con nitidez única",
        precio: 1199
    }
]
// contador el último ID
let ultimoID = 2

//array carrito
const carrito = []

// funcion listar productos
function listarProductos() {
    console.log("--- Listar productos ---")
    for (const producto of productos) {
        console.log("ID: " + producto.id + " Nombre: " + producto.nombre)
    }
    console.log("--- Fin productos ---")
}
// funcion detalle de producto
function detalleProducto(idDetalle){
    let indiceSeleccionado = idDetalle - 1
    if (idDetalle > productos.length || idDetalle < 1 || isNaN(idDetalle)) {
        alert("El ID ingresado no existe")
    } else {
        console.log("--- Detalle de producto ---")
        console.log(
            "ID: " + idDetalle +
            " Nombre: " + productos[indiceSeleccionado].nombre + 
            " Descripción: " + productos[indiceSeleccionado].descripcion +
            " Precio: " + productos[indiceSeleccionado].precio + " USD"
        )
    }
}

//funcion agregar producto
function agregarProducto(){
    let nombreProducto = prompt("Nombre:")
    let descripcionProducto = prompt("Descripción:")
    let precioProducto = parseFloat(prompt("Precio en USD:"))
    if (!nombreProducto || !descripcionProducto || isNaN(precioProducto)) {
        alert("Error en los datos, producto no creado")
    } else {
        ultimoID++
        const nuevoProducto = {
            id: ultimoID,
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio: precioProducto
    }
    productos.push(nuevoProducto)
    console.log("--- Producto agregado ---")
    detalleProducto(ultimoID)
    }
}

function agregarAlCarrito(idCarr,qtyCarr){
    let indiceSeleccionado = idCarr - 1
    if (idCarr > productos.length || idCarr < 1 || isNaN(idCarr) || qtyCarr < 1 || isNaN(qtyCarr)) {
        alert("El ID o la cantidad son inválidos")
    } else {
        const productoCarrito = {
            id: idCarr,
            nombre: productos[indiceSeleccionado].nombre,
            descripcion: productos[indiceSeleccionado].descripcion,
            precio: productos[indiceSeleccionado].precio,
            cantidad: qtyCarr,
            monto: qtyCarr * productos[indiceSeleccionado].precio
    }
    carrito.push(productoCarrito)
    console.log("--- Producto agregado al carrito ---")
    mostrarCarrito()
    }
}

function mostrarCarrito(){
    console.log("--- Carrito actualizado ---")
    console.log("Producto, Cantidad, Precio, Monto")
    for (const item of carrito) {
        console.log(item.nombre + ", " + item.cantidad + ", " + item.precio + ", " + item.monto)
    }
}

function identificarse() {
    let tipoUsuario = parseInt(prompt("Bienvenido, ingresa tu tipo de usuario \n 1 = Administrador \n 2 = Usuario"))
    while (tipoUsuario !== 1 && tipoUsuario !== 2) {
        alert("Tipo de usuario incorrecto")
        tipoUsuario = parseInt(prompt("Bienvenido, ingresa tu tipo de usuario \n 1 = Administrador \n 2 = Usuario"))
    }
        if (tipoUsuario === 1) {
            let identificacion = prompt("Ingrese identificador de Administrador")
            while (identificacion !== identAdministrador) {
                alert("Identificador incorrecto")
                identificacion = prompt("Ingrese identificador de Administrador")
            }
            console.log("--- Administrador Autenticado ---")
            let menu = parseInt(prompt("¡Bienvenido Administrador! \n Selecciona la opción deseada: \n 1 = Listar productos \n 2 = Detalle de producto \n 3 = Agregar producto \n 4 = Cambiar perfil de usuario\n 5 = Salir"))
            while (menu !== 5) {
                switch(menu) {
                    case 1:
                        listarProductos()
                        break
                    case 2:
                        let idDetalle = parseInt(prompt("Ingresa el ID del producto"))
                        detalleProducto(idDetalle)
                        break
                    case 3:
                        agregarProducto()
                        break
                    case 4:
                        cambiarPerfil()
                        return
                    default:
                        alert("Opción incorrecta")
                }
                menu = parseInt(prompt("Selecciona la opción deseada: \n 1 = Listar productos \n 2 = Detalle de producto \n 3 = Agregar producto \n 4 = Cambiar perfil de usuario\n 5 = Salir"))
            }
            console.log("Sesión finalizada")
        } else {
            let identificacion = prompt("Ingrese identificador de Usuario")
            while (identificacion !== identUsuario) {
                alert("Identificador incorrecto")
                identificacion = prompt("Ingrese identificador de Usuario")
            }
            console.log("--- Usuario Autenticado ---")
            let menu = parseInt(prompt("¡Bienvenido Usuario! \n Selecciona la opción deseada: \n 1 = Listar productos \n 2 = Detalle de producto \n 3 = Agregar al carrito \n 4 = Cambiar perfil de usuario\n 5 = Salir"))
            while (menu !== 5) {
                switch(menu) {
                    case 1:
                        listarProductos()
                        break
                    case 2:
                        let idDetalle = parseInt(prompt("Ingresa el ID del producto"))
                        detalleProducto(idDetalle)
                        break
                    case 3:
                        let idCarr = parseInt(prompt("Ingresa el ID del producto"))
                        let qtyCarr = parseInt(prompt("Cantidad a agregar"))
                        agregarAlCarrito(idCarr,qtyCarr)
                        break
                    case 4:
                        cambiarPerfil()
                        return
                    default:
                        alert("Opción incorrecta")
                }
                menu = parseInt(prompt("Selecciona la opción deseada: \n 1 = Listar productos \n 2 = Detalle de producto \n 3 = Agregar al carrito \n 4 = Cambiar perfil de usuario\n 5 = Salir"))
            }
            console.log("Sesión finalizada")
        }
}

identificarse()

function cambiarPerfil() {
    identificarse()
}


//siguientes pasos

// admin:
// borrar productos

// usuario:
// borrar producto del carrito
// validar si existe el producto en carrito y aumentar sumar la cantidad en la misma linea