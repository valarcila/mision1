// .querySelector(), busca elemento html 
const formulario = document.querySelector("#formulario")
const producto = document.querySelector("#producto")
const cantidad = document.querySelector("#cantidad")
const error = document.querySelector("#error")
const lista = document.querySelector("#lista")
const contador = document.querySelector("#contador")
const vaciar = document.querySelector("#vaciar")

let productos = []

// submit, se dispara al pulsar agregar o enter 
formulario.addEventListener("submit", event => {
    // preventDefault(), evita accion por defecto del formulario (recargar pagina)
    event.preventDefault()
    agregarProducto()
})

function agregarProducto() {
    // trim(), quita espacios  
    const nombre = producto.value.trim()
    const numero = Number(cantidad.value)

    if(nombre === "") {        
        // textContent, cambia o lee texto de elemento html
        error.textContent = "Introduzca un producto"
        // focus(), pone cursor dentro de producto
        producto.focus()
        return
    }
    error.textContent = ""

    const item = crearProducto(nombre, numero)

    // appendChild(), agrega elemento creado a otro html
    lista.appendChild(item)

    limpiarFormulario()
    actualizarContador()
}

function crearProducto(nombre, numero) {
    // createElement(), crea elemento html
    const item = document.createElement("li")
    item.textContent = `${numero} x ${nombre}`

    item.addEventListener("click", () => {
        comprado(item)    
    })

    return item
}

function comprado(item) {
    // classList.toggle(), agrega clase si no esta y la quita si esta
    item.classList.toggle("comprado")
}

function limpiarFormulario() {
    producto.value = ""
    cantidad.value = 1
}

function actualizarContador() {
    const numero = lista.children.length

    // ternario
    contador.textContent = numero === 0 
        ? "Sin productos" 
        : `Cantidad de productos: ${numero}` 
}

vaciar.addEventListener("click", () => {
    const comprados = document.querySelectorAll(".comprado")

    comprados.forEach(item => {
        item.remove()
    })

    actualizarContador()
})

document.addEventListener("keydown", event => {

    if(event.target.tagName === "INPUT") {
        return
    }

    if(event.key === "b") {
        document.body.classList.toggle("oscuro")
    }
})