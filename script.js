// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const dia = "noite";
if (dia === "dia") {
  console.log("Claro");
} else {
  console.log("De noite");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`Numero ${i}`);
  }
}

// 03 - crie uma função que exiba uma mensagem no console
function mensagem() {
  console.log("Mensagem :)");
}
mensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostrarNome(nome) {
  console.log(`Meu nome é ${nome}`);
}
mostrarNome("Wilkson");

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirInfo(pessoa) {
  console.log(
    `Eu sou ${pessoa.nome}, tenho ${pessoa.idade} e meu estilo musical preferido é ${pessoa.estilo}`
  );
}
const pessoa = {
  nome: "Wilkson",
  idade: 30,
  estilo: "MPB",
};
exibirInfo(pessoa);
// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filmeMusica(filme, musica) {
  console.log(
    `Eu meu filme favorito é ${filme} e uma música que gosto muito é ${musica}`
  );
}
filmeMusica("Harry Potter", "Brilho Oculto");

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numeroTriplo) {
  const numero = numeroTriplo * 3;
  console.log(`O Número triplo de ${numeroTriplo} é ${numero}`);
}
triplo(50);
// 08 - crie uma função que  verifique se uma  variável é true ou false
function verdadeiroEFalso(valor) {
  if (valor) {
    console.log("verdadeiro");
  } else {
    console.log("falso");
  }
}
verdadeiroEFalso(true);

// 09 - Crie um array que receba 5 itens e exiba no console.
let array = ["casa", "carro", "violão", "piano", "prédio"];
console.log(array);

// 10 - Utilize um método para adicionar um nome ao inicio do array.
array.unshift("carlos");
console.log(array);

// 11 - Utilize um método para remover o último nome do array.
array.pop();
console.log(array);
// 12 - Utilize um método para adicionar dois nomes ao fim do array.
array.push("Maria", "João");
console.log(array);

// 13 - Utilize um método para remover o primeiro nome do array.
array.shift();
console.log(array);
// 14 - Utilize um método para adicionar no meio deste array.
let nome = ["João", "Maria", "Jose", "Pedro"];
nome.splice(2, 0, "Vinicius");
console.log(nome);

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);
