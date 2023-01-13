/* 13) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre
o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInt = [10, 15, 20, 25]
let vetorString = ['vet1', 'vet2', 'vet3', 'vet4']
let vetorDouble = [1.1, 1.5, 2.1, 2.5]

function vetores(){
    let uniaoVetores = []
    for(let i = 0; i < arguments.length; i++){
        uniaoVetores = uniaoVetores.concat(arguments[i])
    }
    return uniaoVetores;
}

console.log(vetores(vetorInt, vetorDouble));
console.log(vetores(vetorDouble, vetorString));