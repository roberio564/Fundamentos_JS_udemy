const prod1 = {}
prod1.nome = 'Celular Ultra mega'

prod1.preço = 4999
prod1['desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            Blabla: 2
        }
    }
}

console.log(prod2)

//agora com JSON || so por curiosidade 

'{ "nome": "camisa polo", "preço": 79,90 }'