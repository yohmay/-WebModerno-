// Tagged Templates - Processa o template dentro de uma função.
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Guilherme'
const situacao = 'Aprovado'

console.log(tag`${aluno} está ${situacao}.`)
console.log(`${aluno} está ${situacao}.`)


