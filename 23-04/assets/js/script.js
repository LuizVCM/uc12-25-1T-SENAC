let input = document.getElementById("nome");
let texto = document.getElementById("texto");
let link = document.getElementById("link")

const btn = document.getElementById("id")
const img = document.getElementById("img")

input.addEventListener("input", (event) => {
    // textContent altera apenas texto
    console.log("Digitando:", event.target.value);
    // texto.textContent = `Nome: ${event.target.value}`
    // innerHTML altera texto e permite usar tags, estilos, etc
    texto.innerHTML = `Nome: <span style = 'color:blue;'> ${event.target.value}</span>`
});

const link1 = '../../14-04/assets/images/mortal-kombat-filme-2021-foto-divulgacao.png';
const link2 = '../../14-04/assets/images/libreflix-removebg-preview.png';




btn.addEventListener("click", () => {
    if (img.getAttribute('src') == link2) {
        img.setAttribute('src', link1)
    } else {
        img.setAttribute('src', link2)
    }
})





