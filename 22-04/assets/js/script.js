// Guarda qual pergunta está ativa (começa na posição 0 do array)
let currentQuestionIndex = 0;

// Pega todas as perguntas do HTML
/*
document.getElementoById -> pega apenas Um elemento
document.querySelectorAll -> pega Todos os elementos de uma classe e retorna uma lista
*/
const questions = document.querySelectorAll(".card");

// Função para ativar a ppróxima pergunta
function activateQuestion() {
   /*
   questions[currentQuestionIndex] -> acessa a pergunta atual dentro da lista
   
   classList.add("active") -> adiciona a classe "active"
   Essa classe faz a pergunta aparecer na tela (via CSS)
   */
   questions[currentQuestionIndex].classList.add("active");

}

// Função chamada quando se clica em uma resposta
function answer(isCorrect) {

   // Se a resposta estiver correta
   if (isCorrect) {
      /*
      classList.remove("active") -> remove a classe
      Isso faz a pergunta atual sumir da tela
      */
      questions[currentQuestionIndex].classList.remove("active");


      /*
      Avança para a próxima pergunta
      currentQuestionIndex + 1 -> vai para a próxima posição do array
      */
      currentQuestionIndex = currentQuestionIndex + 1;


      //Ativa (mostra) a próxima pergunta
      activateQuestion();
   } else {

      // Se estiver errada
      console.log("Errrrrrrrrrorooooooouuuuuuuuu");
   }
}

// Seleciona todos os botões de resposta
const buttons = document.querySelectorAll(".botoes");

/*
Percorre todos os botões
buttons.length -> quantidade de botões
*/
let pontos = 0;
for (let i = 0; i < buttons.length; i++) {

   /*
   addEventListener -> adicona um evento ao botão
   "click" -> quando clicar
   */
   let ponto = document.querySelectorAll(".ponto");
   let ponto1 = document.getElementById("ponto");
   
   buttons[i].addEventListener("click", () => {
      /*
      classList.contains("correct") -> verifica se o botão tem a classe "correct"
  
      Se tiver -> retorna true (resposta correta)
      Se não tiver -> retorna false (resposta errada)
      */

      isCorrect = buttons[i].classList.contains("correct");
      answer(isCorrect)
         
         pontos++
         ponto1.textContent = `Pontos: ${pontos}`
     
   })
}






