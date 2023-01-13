/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */ 

function numInteiro(numero){
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(numInteiro(3));
console.log(numInteiro(26));
console.log(numInteiro(33));

