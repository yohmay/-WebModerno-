function criarProduto(nome, preco){
    return {
        nome , 
        preco, 
        desconto: 0.1
    }
}
console.log(criarProduto("Computador", 1100.00));
console.log(criarProduto("Celular", 1000.00));
console.log(criarProduto("Monitor", 500.00));