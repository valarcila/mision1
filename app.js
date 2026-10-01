// .querySelector(), busca elemento html 
const formulario = document.querySelector("#formulario")
const producto = document.querySelector("#producto")
const cantidad = document.querySelector("#cantidad")
const error = document.querySelector("#error")
const tabla = document.querySelector("#tabla")
const contador = document.querySelector("#contador")
const eliminar = document.querySelector("#eliminar")

let productos = []

// submit, se dispara al pulsar agregar o enter 
formulario.addEventListener("submit", event => {
    // preventDefault(), evita accion por defecto del formulario (recargar pagina)
    event.preventDefault()
    agregarProducto()
})

function agregarProducto() {
    const numero = Number(cantidad.value)
    // trim(), quita espacios  
    const nombre = producto.value.trim()

    if(nombre === "") {        
        // textContent, cambia o lee texto de elemento html
        error.textContent = "Introduzca un producto"
        // focus(), pone cursor dentro de producto
        producto.focus()
        return
    }
    error.textContent = ""

    const item = crearProducto(numero, nombre)  
 
    tabla.appendChild(item)

    limpiarFormulario()
    actualizarContador()
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
    producto.focus()
}

function actualizarContador() {
    const numero = tabla.children.length

    // ternario
    contador.textContent = numero === 0 
        ? "Sin productos" 
        : `Cantidad de productos: ${numero}` 
}

eliminar.addEventListener("click", () => {
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
