const input = document.querySelector("input")
const lista = document.querySelector("#lista")

input.addEventListener("keydown", (event) => {
    event.key === "Enter" ? lista.textContent += `${input.value}`  : null
});