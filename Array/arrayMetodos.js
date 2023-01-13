const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Remove o último elemento.
pilotos.pop();
console.log(pilotos);

// Para adicionar outro elemento.
pilotos.push('Verstappen');
console.log(pilotos);

// Remove o primeiro elemento.
pilotos.shift();
console.log(pilotos);

// Acrescentar um elemento no índice 0.
pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode adicionar e remover elementos.
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover elementos 
pilotos.splice(3, 1);
console.log(pilotos);

// Novo array.
const algunsPilotos1 = pilotos.slice(2);

// Criação do Array a partir de um índice até o ponto indicado.
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);