// querySelector(), busca elemento html 
const formulario = document.querySelector("#formulario")
const producto = document.querySelector("#producto")
const cantidad = document.querySelector("#cantidad")
const error = document.querySelector("#error")
const tabla = document.querySelector("#tabla")
const contador = document.querySelector("#contador")
const eliminar = document.querySelector("#eliminar")

// submit, se dispara al pulsar agregar o enter 
formulario.addEventListener("submit", event => {
    // preventDefault(), evita accion por defecto del formulario (recargar pagina)
    event.preventDefault()
    agregarProducto()
})

function agregarProducto() {
    const numero = Number(cantidad.value)
    // trim(), quita espacios  
    const nombre = producto.value.trim().toLowerCase()

    if(!validarNumero(numero)) return
    if(!validarNombre(nombre)) return

    // limpia error
    error.textContent = ""

    const existente = buscarProducto(nombre)

    if(existente) {
        sumarCantidad(existente, numero)
        limpiarFormulario()
        return
    }
    const item = crearProducto(numero, nombre)  
 
    tabla.appendChild(item)

    limpiarFormulario()
    actualizarContador()
}

function validarNumero(numero) {
    if(Number.isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
        // textContent, cambia o lee texto de elemento html
        error.textContent = "Introduzca una cantidad válida"
        // focus(), pone cursor dentro de cantidad
        cantidad.focus()
        return false
    }
    return true
}

function validarNombre(nombre) {
    if(nombre === "") {
        error.textContent = "Introduzca un producto"
        producto.focus()
        return false
    }
    return true
}

function buscarProducto(nombre) {
    for(const item of tabla.children) {
        // children[1], nombre
        const nombreItem = item.children[1].textContent

        if(nombre === nombreItem) {
            return item
        }
    }
    return null
}

function sumarCantidad(item, numero) {
    // children[0], cantidad
    const actual = Number(item.children[0].textContent)
    item.children[0].textContent = actual + numero
}

function crearProducto(numero, nombre) {
    // createElement(), crea elemento html
    const item = document.createElement("tr")

    const dataCantidad = document.createElement("td")
    dataCantidad.textContent = numero

    const dataProducto = document.createElement("td")
    dataProducto.textContent = nombre

    // appendChild(), agrega elemento creado a otro html
    item.appendChild(dataCantidad)
    item.appendChild(dataProducto)

    return item
}

function limpiarFormulario() {
    producto.value = ""
    cantidad.value = 1
    producto.focus()
}

function actualizarContador() {
    // cuenta cuantas filas tiene tabla
    const numero = tabla.children.length

    // ternario
    contador.textContent = numero === 0 
        ? "Sin productos" 
        : `Cantidad de productos: ${numero}` 
}

tabla.addEventListener("click", event => {
    // busca fila que contiene el elemento pulsado
    const item = event.target.closest("tr")

    if(item) {
        comprado(item)    
    }
})

function comprado(item) {
    // classList.toggle(), agrega clase si no esta y la quita si esta
    item.classList.toggle("comprado")
}

eliminar.addEventListener("click", () => {
    const comprados = document.querySelectorAll(".comprado")

    comprados.forEach(item => {
        item.remove()
    })
    actualizarContador()
})

document.addEventListener("keydown", event => {
    // ignora si esta escribiendo en input
    if(event.target.tagName === "INPUT") return
    if(event.key === "b") document.body.classList.toggle("oscuro")
})
