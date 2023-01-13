/* 7) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e 
calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso 
acontecerá. Utilize centímetros para as unidades de medida. */ 
function calculoTempo(alturaMenor, alturaMaior, taxaMenor, taxaMaior){
    let qtdAnos = 0;
    while(alturaMenor < alturaMaior){
        alturaMenor += taxaMenor;
        alturaMaior += taxaMaior;
        qtdAnos++
    }
    return qtdAnos
}

function crescimento(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return 'A primeira criança ultrapassará a segunda criança em 1 ano'
        }else if(taxa1 < taxa2){
            return 'A segunda criança ultrapassará a primeira criança em 1 ano'
        }else{
            return 'As crianças tem o crescimento e a altura igual'
        }
    } else {
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a criança maior'
            }else{
                return `A criança menor ultrapassará a maior em: ${calculoTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }else{
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a criança maior'
            }else{
                return `A criança menor ultrapassará a maior em: ${calculoTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

console.log(crescimento(150, 2, 130, 2));
console.log(crescimento(120, 160));