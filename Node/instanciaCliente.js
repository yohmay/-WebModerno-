const contadorA = require('../Node/instanciaUnica')
const contadorB = require('../Node/instanciaUnica')

const contadorC = require('../Node/instanciaNova')()
const contadorD = require('../Node/instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)