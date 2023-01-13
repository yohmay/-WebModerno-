/* 19) O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto         Preço
100     Cachorro Quente              R$ 3,00
200     Hambúrguer Simples           R$ 4,00
300     Cheeseburguer                R$ 5,50
400     Bauru                        R$ 7,50
500     Refrigerante                 R$ 3,50
600     Suco                         R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            return quantidade * 3;
        case 200:
            return quantidade * 4;
        case 300:
            return quantidade * 5.5;
        case 400:
            return quantidade * 7.5;
        case 500:
            return quantidade * 3.5;
        case 600:
            return quantidade * 2.8;
        default:
            return "O produto não existe.";
    }
}
console.log(cardapio(100, 1));
console.log(cardapio(200, 1));
console.log(cardapio(300, 1));
console.log(cardapio(400, 1));
console.log(cardapio(500, 1));
console.log(cardapio(600, 1));
console.log(cardapio(850, 1));