
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('bem vinda, ' + info.personagem );
// exerc2

info['Recorrente'] = 'Sim';
console.log(info);
// exerc3

for (let key in info) {
  console.log(key);
}
// exerc4

for (let key in info) {
  console.log(info[key]);
}
// exerc5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain,',
  nota: 'O último MacPatinhas',
};


