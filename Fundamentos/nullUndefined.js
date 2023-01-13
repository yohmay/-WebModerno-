let valor; // Ausência de Valor
console.log(valor);
// console.log(valor2); - is not defined.

valor = null;
console.log(valor);
// console.log(valor.toString()); // TypeError

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log (produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null // Este produto está sem preço.
console.log(!!produto.preco);
console.log(produto);