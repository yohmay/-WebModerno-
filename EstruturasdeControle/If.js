function BoasNoticias(nota){
    if(nota >= 7){
        console.log("Aprovado " + nota);
    }
}

BoasNoticias(8.1);
BoasNoticias(6.1);

function seForVerdade(valor){
    if(valor){
        console.log("É verdade... " + valor);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);

seForVerdade(-1);
seForVerdade("TESTE");
seForVerdade("?");
seForVerdade([]);
seForVerdade([1,2]);
seForVerdade({});

