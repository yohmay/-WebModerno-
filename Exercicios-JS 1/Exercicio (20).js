/* 20) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 
0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0
a 10,0 o conceito A */

function notaFinal(nota){
    let resultado = []
    for(let i = 0; i < nota.length; i++){
        if(nota[i] >= 0 && nota[i] <= 4.9){
            resultado.push('D')
        }if(nota[i] >= 5.0 && nota[i] <= 6.9){
            resultado.push('C')
        }if(nota[i] >= 7.0 && nota[i] <= 8.9){
            resultado.push('B')
        }if(nota[i] >= 9.0 && nota[i] <= 10.0){
            resultado.push('A')
        }
    } return resultado
}
let nota = [5, 9.9, 3.9, 6.0, 10.5, 8.3, 7.2]
console.log(notaFinal(nota))