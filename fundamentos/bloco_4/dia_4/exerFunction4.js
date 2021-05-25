

function maior(nome){
  let nomeMaior = nome[0];
  for (let indice in nome){
    
    if (nomeMaior.length < nome[indice].length) {
      nomeMaior = nome[indice];
    }
  }
  return nomeMaior;
}

console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));