/* 14) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos 
os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verificarString(valor1, valor2){
    let stringPositiva = true;
    for(let i = 0; i < valor1.length; i++){
        let caracteresvalor1 = valor1.charAt(i).toLowerCase()
        for(let j = 0; j < valor2.length; j++){
            let caracteresvalor2  = valor2.charAt(i).toLowerCase()
            if (caracteresvalor1 == caracteresvalor2){
                stringPositiva = true;
                break
            } else{
                stringPositiva = false;
            }
        } if(!stringPositiva){
            return stringPositiva
        }
    }
    for (let i = 0; i < valor2.length; i++){
        let caracteresvalor2 = valor2.charAt(i).toLowerCase()

        for (let j = 0; j < valor1.length; j++){
            let caracteresvalor1 = valor1.charAt(j).toLowerCase()

            if(caracteresvalor1 == caracteresvalor2){
                stringPositiva = true
                break
            } else{
                stringPositiva = false
            }
        }
    }if (!stringPositiva){
        return stringPositiva
    }
    return stringPositiva
}

console.log(verificarString('String ABCD', 'String DEFG'))
console.log(verificarString('aaaaa', 'aaaaa'))