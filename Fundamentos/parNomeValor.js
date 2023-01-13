const saudacao = "Olá"; // Contexto Léxico 1

function exec() {
    const saudacao = "Seja Bem-vindo "; // Contexto Léxico 2
    return saudacao;
}


const Cliente = {
    nome: "PEDRO",
    idade: 32,
    peso: 90,
    endereco: {
        longradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);