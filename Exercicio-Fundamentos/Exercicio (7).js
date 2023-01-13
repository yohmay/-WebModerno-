/* 07) Elabore uma função cujo o objetivo é resolver a fórmula de bhaskara. Para isso, sua função deve receber três 
parâmetros, "ax2", "bx" e "c", de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
Como o retorno deve ser passado um vetor que tem 2 valores para cada possível resultado, mesmo que os resultado sejam 
iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: "Delta é negativo". */

function bhaskara (ax2, bx, c){
    let delta = (bx ** 2) - (4 * ax2 * c);
    let resultados = [];

    if(delta < 0){
        return "Delta é negativo";
    }
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2);
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2);
    resultados.push(x1);
    resultados.push(x2);
    return resultados;
}

console.log(bhaskara(3,-5,12));
console.log(bhaskara(2,1,2));
console.log(bhaskara(1,3,2));
