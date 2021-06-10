function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('submit-button').addEventListener(
  'click', stopDefAction, false
);

function criarOsEstados(){
  let listaEstados = document.getElementById('states');
  let opcoesEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < opcoesEstados.length; index += 1) {
    let estado = document.createElement('option'); //criando elemento
    estado.innerText = opcoesEstados[index]; //atribuindo o valor
    listaEstados.appendChild(estado); //colocando no lugar
   }
}
window.onload = function() {
  criarOsEstados();
}