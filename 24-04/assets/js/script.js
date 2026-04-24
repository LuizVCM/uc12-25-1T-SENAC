// // Pego o elemento H3 POR TAG
// const titulo = document.querySelector("h3");
// //Pego o elemento button POR TAG
// const btn = document.querySelector("button");

// //Adiciono um evento ao botão
// btn.addEventListener("click", () => {
//     // Quando clicarmos no botão, a função vai adicionar uma classe ao titulo
//     titulo.classList.toggle("green")
// })


// atividade
const button1 = document.getElementById("um");
const button2 = document.getElementById("dois");
const button3 = document.getElementById("tres")
const button4 = document.getElementById("quatro")

const imagem1 = document.querySelector(".image1");
const imagem2 = document.querySelector(".image2");
const imagem3 = document.querySelector(".image3");
const imagem4 = document.querySelector(".image4");


function ver(){
    if(textContent === "Mostrar"){
        
    }
}

button1.addEventListener("click", () =>{
    imagem1.classList.toggle("image1")
    if(button1.textContent === "Mostrar"){
        button1.textContent = "Esconder"
    }else{
        button1.textContent = "Mostrar";
    }
})
button2.addEventListener("click", () =>{
    imagem2.classList.toggle("image2");
     if(button2.textContent === "Mostrar"){
        button2.textContent = "Esconder"
    }else{
        button2.textContent = "Mostrar";
    }

})
button3.addEventListener("click", () =>{
    imagem3.classList.toggle("image3")
     if(button3.textContent === "Mostrar"){
        button3.textContent = "Esconder"
    }else{
        button3.textContent = "Mostrar";
    }
})
button4.addEventListener("click", () =>{
    imagem4.classList.toggle("image4")
     if(button4.textContent === "Mostrar"){
        button4.textContent = "Esconder"
    }else{
        button4.textContent = "Mostrar";
    }
})