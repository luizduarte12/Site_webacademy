// Funções do Cabeçalho
let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento =>{
    let temaSelecionado = evento.target.value;
    if (temaSelecionado){
        mudaTema(temaSelecionado);
        localStorage.setItem('tema', temaSelecionado);
    }

});

const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('#linkEsp');
    let url = ('/css/estilo-tema-'+ temaSelecionado + '.css');
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if(tema){
    mudaTema(tema);
}


//Fnções da tabela


let tabela = document.querySelector('table');
const inserirProfissional = (item) => {
        let linha = document.createElement('tr');
        let id = document.createElement('td');
        let nome = document.createElement('td');

        id.textContent = item.id;
        nome.textContent = item.nome;

        linha.appendChild(id);
        linha.appendChild(nome);

        tabela.tBodies[0].appendChild(linha);

};

carregarProfissionais = () => {
    let url = 'https://my-json-server.typicode.com/juniorlimeiras/json/especialidades';
    //let xhr = new XMLHttpRequest();
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        for (const item of dados) {
            inserirProfissional(item);
        }
        eventoExcluir();
    }).catch(erro => {
        console.error(erro);
    })
}

carregarProfissionais();

