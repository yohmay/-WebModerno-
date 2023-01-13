const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString',{
    value: function(){ return Object.values(this) },
    enumerable: false
})

// A partir de um índice. 
console.log(quaseArray[0]);

// Utilizando o to.String().
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray);

