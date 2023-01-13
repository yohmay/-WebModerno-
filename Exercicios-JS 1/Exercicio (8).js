/* 8) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */ 

function paresImpares(numeros){
    let pares = 0;
    let impares = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] %2 == 0){
            pares++
        } else {
            impares++
        }
    }
    console.log(`${pares} Números Pares e ${impares} Números Ímpares`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
paresImpares(vetor);