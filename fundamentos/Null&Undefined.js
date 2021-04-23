let valor// não inicializar 
console.log(valor) 
//undefined (não foi "igualada" a nada)

console.log(valor2) 
//Is not defined (não foi nem declarada)

valor = null 
console.log(valor) 
// null 
// ele não tem nenhum endereço 
console.log(valor.ToString())
// Erro!

const produto = {}
console.log(produto.preco) //undefined
// preço não está definido
console.log(produto) // {} ele é um objeto vasio

produto.preco = 3.50

console.log(produto.preco) // {precp: 3.5 } 

produto.preco = undefined // undefined (não serve pra nada)
console.log(!!produto.preco) //false 
console.log(produto) // { preco: undefined }
//se vc usar 
// delete produto.preço; vc vai zerar o valor

console.log(produto)//{}

produto.preco = null // sem preço 

console.log(!!produto.preco) // false; pq ta nulo
console.log(produto)