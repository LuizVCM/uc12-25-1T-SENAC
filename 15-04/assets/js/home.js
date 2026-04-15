// pegar cada elemento que vamos usar
// como podemos identificar estes elementos?

// entre no document HTML e pegue o elemento com o nome do id
const titulo = document.getElementById("titulo");
const botão = document.getElementById("btn");


// minha versão: 

// botão.addEventListener("click", ()=>{
  //  titulo.style.backgroundColor = 'yellow';
 //})

 function trocarCor(){
    // troca a cor do elemento quando chamado
    titulo.style.backgroundColor = 'yellow', titulo.style.fontSize = '2rem';
 }
function mensagem(){
    alert("Alerta aqui!")
}
 // adiciona um evento ao botão
 // um evento é uma ação nossa
 // addEventListener precisa de dois argumentos:
 // o primeiro é a ação ( O que dispara a função)
 // o segundo é o que ele dispara (no caso, a função)


 function trocaMensagem(){
    titulo.textContent = 'Texto trocado!';
 }
 function voltar(){
    titulo.textContent = " Meu título ";
 }

let teste =  botão.addEventListener("click", trocaMensagem);



  while(!teste === !false){
  if(botão.addEventListener("click", trocaMensagem) === true){
    trocaMensagem(){
        titulo.textContent = " Meu título"
        
    }
    
  }
  trocaMensagem === false

  }
  botão.addEventListener("click", trocaMensagem);
    botão.addEventListener("click", v);



