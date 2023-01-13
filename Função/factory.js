const prod1 = {
    nome: "...",
    preco: 45
}
const prod2 = {
    nome: "...",
    preco: 25
}

// Function Factory

function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
console.log(criarPessoa());