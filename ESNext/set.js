// Não aceita repetição / Não indexada

const times = new Set()
times.add('São Paulo')
times.add('Flamengo')
times.add('Vasco')
times.add('Palmeiras')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)