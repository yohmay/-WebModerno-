// Escopo criado a quando a função é declarada.
// Permite acessar e manipular variáveis externas.

// Contexto Léxico.

const x = "Global";
function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
