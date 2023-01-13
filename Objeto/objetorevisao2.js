const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua Abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'; 

console.log(carro);

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);