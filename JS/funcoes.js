function escopoSorteador() {//começo do escopo isolado
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const dados = [];
    const ordenado = [];
    
function recebeEventoForm (evento){
    evento.preventDefault();
    const entrada = form.querySelector('.entrada');
    const ordem = form.querySelector('.ordem');
    dados.push({
        entrada: String(entrada.value),
        ordem: Number(ordem.value)
    });
    console.log(dados);
    ordenacao(entrada);

    resultado.innerHTML = ordenado;
        
}//Chamar funções até esta linha

form.addEventListener ('submit', recebeEventoForm);//Aguarda o evento submit

function randomize(entrada){ //obtém o número randomico
    entradas = dados[dados.length -1].entrada.split(';');
    const randomico = Math.floor(Math.random() * entradas.length + 1);
    return randomico;
}

function classifica(entrada){ //cria um array de randomicos sem repetição
    entradas = dados[dados.length -1].entrada.split(';');
    classificacao = [];
    for (let i = 0; i < entradas.length;){       
        chave = randomize(entrada)
        for(let y = 0; y <= i;){
            if(!classificacao.includes(chave)){
                classificacao.push(chave);
                i++;
            } else {
                break;
            }
        }
    }
    return classificacao;
}

function ordenacao(entrada,parametro){//ordena o array para resposta
    entradas = dados[dados.length -1].entrada.split(';');
    Number(parametro = dados[dados.length -1].ordem); //1 - crescente, 0 - decrescente
    classificado = classifica(entrada);
    ordenado.length = 0;
        switch (parametro) {
        case 0:
            for(let i = 0; i < entradas.length;){
                ordenado[i] = classificado[i] + " - " + entradas[i];
                i++;
            }
            ordenado.sort();
            ordenado.reverse();
        break;
        case 1:
            for(let i = 0; i < entradas.length;){
                ordenado[i] = classificado[i] + " - " + entradas[i];
                i++;
            }
            ordenado.sort();
        break;
        default:
        break;
    }
    return ordenado;
}
} // término do escopo
escopoSorteador();