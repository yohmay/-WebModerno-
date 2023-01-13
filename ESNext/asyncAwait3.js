function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1 
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido!')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros, tentativa = 1){
    try{
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()) {
       numeros.push(gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
    } catch(e) {
        if(tentativa > 10){
            throw "Não deu Certo"
        } else{
            gerarMegaSena(qtdeNumeros, tentativa + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)
