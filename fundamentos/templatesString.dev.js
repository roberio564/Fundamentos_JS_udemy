"use strict";

var nome = 'rebeca';
var concatenacao = 'Olá' + nome + '!';
var template = "\n    Ol\xE1\n    ".concat(nome, "!");
console.log(concatenacao, template); // expressoes...

console.log("1 + 1 = ".concat(1 + 1));

var up = function up(texto) {
  return texto.ToUpperCase();
};

console.log("Ei... ".concat(up('cuidado'), " "));