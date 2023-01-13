/* 
v e v -> v          v ou ? -> v         v xor v -> f   ||  f xor f -> f
v e f -> f          f ou v -> v         v xor f -> v
f e ? -> f          f ou f -> f         f xor v -> v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
   // const comprarTV32 = !!(trabalho1 ^ trabalho2); // Bitwise xor
    const comprarTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unário.

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false, true));
console.log(compras(false,false));