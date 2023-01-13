/* 1) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando
que todos pagam R$100,00 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$50,00.
2) conveniados com idade entre 10 e 30 anos pagam R$80,00.
3) conveniados com idade acima de 30 e até 60 anos pagam R$95,00.
4) conveniados acima de 60 anos pagam R$130,00.
*/ 

function calcularPreco (idade){
    if(idade < 10){
        return "Valor a ser pago: R$50,00"
    }if(idade < 30){
        return "Valor a ser pago: R$80,00"
    }if(idade < 60 ){
        return "Valor a ser pago: R$90,00"
    }if(idade > 60){
        return "Valor a ser pago: R$130,00"
    }
}

console.log(calcularPreco(5));
console.log(calcularPreco(17));
console.log(calcularPreco(32));
console.log(calcularPreco(65));