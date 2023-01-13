/* 19) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro 
elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem 
utilizar uma variável auxiliar. */


function trocadeValores(vetorA, vetorB){
    let vetorA = [5, 10, 15]
    let vetorB = [20, 25, 30]
    
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else{
        return 'Vetores de tamanhos diferentes'
    }
}
trocadeValores(vetorA, vetorB)

console.log('Novo Vetor A:' + vetorA);
console.log('Novo Vetor B:' + vetorB)