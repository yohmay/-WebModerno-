/* 2) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro 
um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve 
ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o
valor a ser pago para o respectivo mês escolhido. */ 


function anuidadeCartao(mes, valorAnuidade){
    if(mes > 0 && mes < 13){
        atraso = mes - 1;
        return (valorAnuidade * ((1 + (5/100))**atraso)).toFixed(2);
    }else {
        return "Mês inválido."
    }
}

console.log(anuidadeCartao(1,100));
console.log(anuidadeCartao(2,100));
console.log(anuidadeCartao(3,100));
console.log(anuidadeCartao(4,100));
console.log(anuidadeCartao(5,100));
console.log(anuidadeCartao(6,100));
console.log(anuidadeCartao(7,100));
console.log(anuidadeCartao(8,100));
console.log(anuidadeCartao(9,100));
console.log(anuidadeCartao(10,100));
console.log(anuidadeCartao(11,100));
console.log(anuidadeCartao(12,100));
console.log(anuidadeCartao(15,100));
