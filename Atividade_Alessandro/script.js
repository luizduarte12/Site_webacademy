// let botao = document.querySelector('a#add');
// botao.addEventListener('click', funcaoA);
// botao.addEventListener('click', funcaoB);

// function funcaoA(){
//     alert('A')
// }
// function funcaoB(){
//     alert('B')
// }

//---------------------Trocando o tema da página---------------------------
let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento => {
    let temaSelecionado = evento.target.value;
    //console.log(temaSelecionado); verificando no console se está buscando o tema selecionado
    if(temaSelecionado){
        mudaTema(temaSelecionado);
    }
    localStorage.setItem('tema', temaSelecionado);
});

const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('#link-tema');
    let url = "/css/estilo-tema-"+temaSelecionado+".css"
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if(tema){
    mudaTema(tema);
}
//----------------------------------------------------------------------
//------------CARREGANDO OS DADOS DA TABELA PROFISSIONAIS---------------
const carregarProfissionais = () =>{
    let url = "https://my-json-server.typicode.com/juniorlimeiras/json/profissionais";
    let tabela = document.querySelector('table');
    fetch(url).then(resposta => {
        return resposta.json();
    }).then(dados => {
        for(const item of dados){
            inserirProfissional(item);
        }
        eventoExcluir();
    }).catch(erro => {
        console.error(erro);
    });
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', url);
    // xhr.addEventListener('readystatechange', () => {
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         let dados = JSON.parse(xhr.responseText);
    //         // console.log(dados);
    //         for(const item of dados){
    //             //Criando as colunas da página profissionais
    //             let linha = document.createElement('tr');
    //             let id= document.createElement('td');
    //             let nome = document.createElement('td');
    //             let registroConselho = document.createElement('td');
    //             let email = document.createElement('td');
    //             let telefone = document.createElement('td');
    //             let unidade = document.createElement('td');
    //             let especialidade = document.createElement('td');
    //             let acoes = document.createElement('td');
    //             //preenchendo os elementos
    //             id.textContent = item.id
    //             nome.textContent = item.nome
    //             registroConselho.textContent = item.registro
    //             email.textContent = item.email
    //             telefone.textContent = item.telefone
    //             unidade.textContent = item.unidade
    //             especialidade.textContent = item.especialidade
    //             acoes.innerHTML = '<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao" href="javascript:void(0)">Excluir</a>';
    //             //Preenchendo a linha agora kkkk :)
    //             linha.appendChild(id);
    //             linha.appendChild(nome);
    //             linha.appendChild(registroConselho);
    //             linha.appendChild(email);
    //             linha.appendChild(telefone);
    //             linha.appendChild(unidade);
    //             linha.appendChild(especialidade);
    //             linha.appendChild(acoes);
    //             //Preenchendo a tabela com uma linha da tabela
    //             tabela.tBodies[0].appendChild(linha);
    //     }
    //     eventoExcluir();
    // }
    // });
    // xhr.send();
};
carregarProfissionais();

//Criando uma função para excluir um profissional lol
const eventoExcluir = () => {
    let botoes = document.querySelectorAll('a.botao#vermelho');
    for (const bt of botoes){
        bt.addEventListener('click', () => {
            bt.parentNode.parentNode.remove();
            totalTabela();
        });
    };
};

let botaoAdicionar = document.querySelector('a.botao#add');
let form = document.querySelector('form')
botaoCancelar = document.querySelector('input#vermelho');

botaoAdicionar.addEventListener('click', () => {
    form.classList.remove('inativo');
});

botaoCancelar.addEventListener('click', () => {
    form.classList.add('inativo');
    form.reset()
});

//Adicionar um funcionamento para enviar os dados do form para a tabela
let tabela = document.querySelector('table');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let profissional = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,
        registro: form.registro.value,
        email: form.email.value,
        telefone: form.telefone.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label
    };
    inserirProfissional(profissional);
    form.reset();

    eventoExcluir();

});

//função para inserir um profissional na tabela hehehhehehe
const inserirProfissional = (item) => {
    //Criando as colunas da página profissionais
    let linha = document.createElement('tr');
    let id= document.createElement('td');
    let nome = document.createElement('td');
    let registro = document.createElement('td');
    let email = document.createElement('td');
    let telefone = document.createElement('td');
    let unidade = document.createElement('td');
    let especialidade = document.createElement('td');
    let acoes = document.createElement('td');
    //preenchendo os elementos
    id.textContent = item.id
    nome.textContent = item.nome
    registro.textContent = item.registro
    email.textContent = item.email
    telefone.textContent = item.telefone
    unidade.textContent = item.unidade
    especialidade.textContent = item.especialidade
    acoes.innerHTML = '<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao" href="javascript:void(0)">Excluir</a>';
    //Preenchendo a linha agora kkkk :)
    linha.appendChild(id);
    linha.appendChild(nome);
    linha.appendChild(registro);
    linha.appendChild(email);
    linha.appendChild(telefone);
    linha.appendChild(unidade);
    linha.appendChild(especialidade);
    linha.appendChild(acoes);
    //Preenchendo a tabela com uma linha da tabela
    tabela.tBodies[0].appendChild(linha);

    totalTabela();
}

//Atividade 2------------------------
const esconderAdicionar = () =>{
    let botaoAdd = document.getElementById("add");
    botaoAdd.style.display = "none"
}
//------------------------------------

//Atividade 3
const totalTabela = () => {
    const total = document.getElementById('num');
    const totalAdd = tabela.tBodies[0].rows.length;
    total.textContent = totalAdd;
}
//Atividade 4 é no css :)
//-------------------------------------------------------------------------