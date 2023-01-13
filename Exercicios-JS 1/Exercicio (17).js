/* 17) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como 
parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos, bem como a soma
dos elementos. */

function progA (n, a1, r){
    for(let i = 0; i < n; i++)
    console.log(a1 + r*i);
    console.log('Soma: ' + (n* (a1+ (a1+ (n-1) *r)))/2);
}

function progG (n, a1, r){
    for(let i = 0; i < n; i++){
        console.log(a1*(r**1));
    }
    console.log('Soma: ' + (a1* ((r**n) -1))/(r-1));
}

progA(5, 10, 15);
console.log("")
progG(1, 5, 10);