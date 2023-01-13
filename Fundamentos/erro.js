function tratarErro(erro){
    throw new Error("Ocorreu um erro!");
    // throw 10;
    // throw true;
    // throw "Mensagem";
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!");

    } catch(e){
        tratarErro(e);
    } finally{
        console.log("Final");
    }
}

const obj = { name: "Roberto" }
imprimirNome(obj);
tratarErro(erro);