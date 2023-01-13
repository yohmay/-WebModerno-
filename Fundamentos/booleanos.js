let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;


console.log("Os Verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!"teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os Falsos");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para Finalizar");
console.log(!!('' || null || 0 || "123"));

let nome = "Maria";
console.log(nome || "Desconhecido");

