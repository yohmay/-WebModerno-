/* 5) Desenvolva uma função JavaScript para que ela receba um valor como 0.3000000000000000004 e retorne R$0,30
(Observe a vírgula e o ponto). */           

function decimal(valorDecimal){
    valorReal = ` R$ ${valorDecimal.toFixed(2).toString().replace("." , ",")}`
    console.log(valorReal);
}
decimal(0.2 + 0.3);
