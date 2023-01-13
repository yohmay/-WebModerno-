// Com promise..
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (erro){
                    reject(erro)
                }
            })
        })
    }
)}

/* let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})  
*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => []. concat(...turmas))
    .then(alunos => alunos.map(alunos => alunos.nome))
    .then(nomes => console.log(nomes))
    .then(x => console.log(x))
    .catch(erro => console.log(erro.message))