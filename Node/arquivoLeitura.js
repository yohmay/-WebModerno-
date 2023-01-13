const fs = require('fs')
const { config } = require('process')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const conf = require('../Node/arquivo.json')
console.log(conf.db)

fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteudo da pasta..')
    console.log(arquivos)
})