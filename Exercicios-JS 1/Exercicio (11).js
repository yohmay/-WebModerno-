/* 11) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function numerosNegativos(vetor){
    let negativos = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos++
        }
    }
    return negativos
}

vetor = [10, -4, 8, -9, -7, -5, -6, 20]
console.log("Existem:", numerosNegativos(vetor), "negativos")
