const div = document.querySelector("div");
const btn = document.querySelector("button");

let numero = 0;

btn.addEventListener("click", () => {
    let elemento = document.createElement("button");
    elemento.classList.add("teste");
    elemento.addEventListener("click", () => {
        elemento.remove();
    })
    elemento.textContent = numero
    elemento.style.color = "yellow"


    div.appendChild(elemento)
    numero++

})
