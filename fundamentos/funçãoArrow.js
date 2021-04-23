//armazenando uma função em uma variavel

const imprimirsoma = function(a, b){
    console.log(a + b)
}

imprimirsoma(2, 3)

//armazenando uma funcao arrow em uma variavel

const some = (a, b) => {
    return a + b
}

console.log(some(2, 3))

//retono implicito
const subtracao = (a, b) => a - b 

console.log(subtracao(2, 3)) // -1

const imprimir2 = a => console.log(a)

imprimir2('legal!!!')

// TUDO FAZ A MESMA COISA, SO ESTOU RESUMINDO


