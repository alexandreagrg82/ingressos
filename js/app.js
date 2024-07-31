let pista = 11; 
let superior = 200;
let inferior = 400;
ingressosSite();


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = parseInt(document.getElementById('qtd').value);
    
    
    if (isFinite(qtdIngresso) &&qtdIngresso <= 0) {
        alert('Você deve comprar ao menos 1 ingresso.');
        zerar();
        return;
        
    } 

    if (tipoIngresso == "pista") {
        comprarPista(qtdIngresso);
    } else if (tipoIngresso == "inferior") {
        comprarInferior(qtdIngresso);
    } else {
        comprarSuperior(qtdIngresso);
    }

    if (pista == 0 ) {
        document.getElementById('qtd-pista').textContent = 'indisponível';   
    }
    if (inferior == 0 ) {
        document.getElementById('qtd-inferior').textContent = 'indisponível';   
    }   
    if (superior == 0 ) {
        document.getElementById('qtd-superior').textContent = 'indisponível';     
    }
}


function comprarPista(qtdIngresso) {
    if (pista == 0) {
        alert('Os ingrerssos para esse setor acabaram')
        zerar();
    } else if (pista >= qtdIngresso) {
        pista = pista - qtdIngresso;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso');
        zerar();
    } else {
        alert('Quantidade indisponível.')
        zerar();
    }
}

function comprarInferior(qtdIngresso) {
    if (inferior == 0) {
        alert('Os ingrerssos para esse setor acabaram')
        zerar();
    } else if (inferior >= qtdIngresso) {
        inferior = inferior - qtdIngresso;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso');
        zerar();
    } else {
        alert('Quantidade indisponível.')
        zerar();
    }
}

function comprarSuperior(qtdIngresso) {
    if (superior == 0) {
        alert('Os ingrerssos para esse setor acabaram')
        zerar();
    } else if (superior >= qtdIngresso) {
        superior = superior - qtdIngresso;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso');
        zerar();
    } else {
        alert('Quantidade indisponível.')
        zerar();
    }
}






function zerar() {
    let zerarQtd = document.getElementById('qtd').value = "";
}



function ingressosSite() {
    document.getElementById('qtd-pista').textContent = pista;
    document.getElementById('qtd-inferior').textContent = inferior;
    document.getElementById('qtd-superior').textContent = superior;
}   




