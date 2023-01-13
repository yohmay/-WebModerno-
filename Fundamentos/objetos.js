const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4999.90;
prod1["Desconto"] = 0.40; // Evitar atributos com espaço.

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    valor: 79.90,
    obj:  {
        desconto: 0.40,
    }
}
console.log(prod2);

const prod3 = {
    nome: "Calça Jeans",
    valor: 110.00,
}
'{"nome": "Calça Jeans", "preco": 110.00}';