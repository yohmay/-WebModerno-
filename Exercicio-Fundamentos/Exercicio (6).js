/* 6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a sengunda retornará o 
valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capital, taxadeJuros, aplicação){
    return capital + (capital * taxadeJuros * aplicação);
}

function jurosComposto(capital, taxadeJuros, aplicação){
    return capital * (1 + taxadeJuros) ** aplicação;
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));
