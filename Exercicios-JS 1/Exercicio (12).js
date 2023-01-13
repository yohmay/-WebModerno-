/* 12) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function mediaAri(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma/vetor.length
}
vetor = [1, 5, 10, 15, 20]
console.log(mediaAri(vetor))
