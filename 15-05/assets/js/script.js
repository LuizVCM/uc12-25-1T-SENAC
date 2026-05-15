const desaparecer = document.querySelector("nav");
const botao = document.querySelector(".menu-mobile");

botao.addEventListener("click", ()=>{
    desaparecer.classList.toggle("aparecer");
})