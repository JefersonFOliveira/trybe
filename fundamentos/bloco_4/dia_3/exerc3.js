
let n = 5;
let ast = '*';
let linha = [];
// let coluna = n;

for (let index = 0; index < n; index += 1) {
  linha[index] = ' ';
}
for (let index = linha.length-1; index >= 0; index -= 1){
  linha[index] = '*';
  console.log(linha.join(''));
}
// console.log(linha[4]);

