const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(7.1));
console.log(resultado(6.7));


// Função arrow com corpo
const aprovacao = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado";
}

console.log(aprovacao(7.4));
console.log(aprovacao(4.8));
