const btn = document.querySelector("button");
const div = document.querySelector("div");


const div1 = document.createElement("div");
btn.addEventListener("click", () => {
    
    div1.classList.add("div1");
    div.appendChild(div1);
})

const btn2 = document.getElementById("dois");

// elemento.children é um array que contém todos os filhos de um elemento
// remove() remove um elemento
btn2.addEventListener("click", () => {
    if(div.children.length > 0) {
        div.children[0].remove();
    }
    
})

