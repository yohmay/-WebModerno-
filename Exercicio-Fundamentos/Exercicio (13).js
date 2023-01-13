/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */ 

function classificarDia(numero){
    switch (numero){
        case 1:
            return "Fim de semana";
        case 2:
        case 3:
        case 4:
        case 5: 
        case 6:
            return "Dia útil";
        case 7:
            return "Fim de semana";
        default:
            return "Dia inválido";
    }
}

console.log(classificarDia(1));
console.log(classificarDia(2));
console.log(classificarDia(3));
console.log(classificarDia(4));
console.log(classificarDia(5));
console.log(classificarDia(6));
console.log(classificarDia(7));
console.log(classificarDia(10));