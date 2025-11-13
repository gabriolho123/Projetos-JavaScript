const idadeInput = document.querySelector('#idadeUsuario');
const botao = document.querySelector('button');
const resultadoDiv = document.querySelector('#resultado');

function verificador() {
  const idade = parseInt(idadeInput.value);
  let mensagem = '';

  if (idade >= 18) {
    mensagem = "Entrada permitida!";
    resultadoDiv.style.color = "green";
  } else if (idade >= 16 && idade < 18) {
    mensagem = "Entrada permitida apenas com responsável.";
    resultadoDiv.style.color = "orange";
  } else {
    mensagem = "Entrada não permitida.";
    resultadoDiv.style.color = "red";
  }

  resultadoDiv.textContent = mensagem;
}

botao.addEventListener("click", verificador);