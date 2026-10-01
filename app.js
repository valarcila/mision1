// .querySelector(), busca elemento html 
const formulario = document.querySelector("#formulario")
const producto = document.querySelector("#producto")
const cantidad = document.querySelector("#cantidad")
const error = document.querySelector("#error")
const lista = document.querySelector("#lista")
const contador = document.querySelector("#contador")
const vaciar = document.querySelector("#vaciar")

let productos = []

function agregarProducto() {
    // .trim(), quita espacios  
    const nombre = producto.value.trim()
    const numero = Number(cantidad.value)

    if(nombre === "") {
        // .textContent, cambia o lee texto de elemento html
        error.textContent = "Introduzca un producto"
        return
    }
    error.textContent = ""

    // createElement(), crea elemento html
    const item = document.createElement("li")
    item.textContent = `${numero} x ${nombre}`

    // appendChild(), agrega elemento creado a otro html
    lista.appendChild(item)

    producto.value = ""
    cantidad.value = 1

    actualizarContador()
}

// submit, se dispara al pulsar agregar o enter 
formulario.addEventListener("submit", event => {
    // preventDefault(), evita accion por defecto del formulario (recargar pagina)
    event.preventDefault()
    agregarProducto()
})

function actualizarContador() {
    const numero = lista.children.length

    // ternario
    contador.textContent = numero === 0 
        ? contador.textContent = "Sin productos" 
        : contador.textContent = `Cantidad de productos: ${numero}` 
}