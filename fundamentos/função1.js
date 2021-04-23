//função sem retorno 
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(2, 3) // 5
imprimirsoma (2)// NaN
imprimirsoma(2, 10, 4, 5)// 12; ela vai ignorar o 4 e o 5
imprimirsoma()//NaN

//funcão sem retorno
function soma(a, b = 1){ // se não for definido o valor de b, b = 0
    return a + b
}

console.log(soma(2, 3)) //5
console.log(soma(2)) //3
