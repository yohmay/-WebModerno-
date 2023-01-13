
// Função em JS First-Class Object (Citizens).
// Higher-order function. - Função de alta ordem.

// Criar de forma literal.
function fun1() { }

// Armazenando em uma variável.
const fun2 = function () { }

// Armazenando em um array
const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3));

// Armazenando em um atributo de objeto.
const obj = {}
obj.falar = function () { return "Olá" }
console.log(obj.falar());

// Passar uma função com paramêtro a outra função.
function run(fun) {
    fun()
}
run(function () { console.log("Executando...") });

// Uma função pode retornar/conter uma outra função.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4);

const cincoMais = soma(2, 3);
cincoMais(4);
