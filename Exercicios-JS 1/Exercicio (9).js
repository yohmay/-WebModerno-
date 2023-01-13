/* 9) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste
vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles 
estão fora do intervalo, escrevendo estas informações. */

function intervalo(vetor){
    numerosNoIntervalo = 0;
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numerosNoIntervalo++
        } 
    }
    return `${numerosNoIntervalo} Números dentro do intervalo.`
}

vetor = [1, 2, 20, 17, 18, 15, 10, 11, 2, 4];
console.log(intervalo(vetor));