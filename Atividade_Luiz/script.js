//let botao = document.querySelector('a#add');
//botao.addEventListener('click', () => {alert('Clicado')});
//botao.addEventListener('click', funcaoA);
//botao.addEventListener('click', funcaob);

//function funcaoA(){
    //alert('A');
//}

//function funcaob(){
    //alert('B');
//}

let selectTema = document.querySelector('select#tema');
selectTema.addEventListener('change', evento =>{
    let temaSelecionado = evento.target.value;
    //console.log(temaSelecionado);
    if (temaSelecionado){
        mudaTema(temaSelecionado);
        localStorage.setItem('tema', temaSelecionado);
    }
  
});


const mudaTema = (temaSelecionado) => {
    let linkTema = document.querySelector('#link-Tema');
    let url = ('/css/estilo-tema-'+ temaSelecionado + '.css');
    linkTema.href = url;
}

let tema = localStorage.getItem('tema');
if(tema){
    mudaTema(tema);
}


carregarProfissionais = () =>{
    let url = 'https://my-json-server.typicode.com/juniorlimeiras/json/profissionais';
    //let xhr = new XMLHttpRequest();
    let tabela = document.querySelector('table');
    fetch(url).then(resposta =>{
        return resposta.json();
    }).then(dados =>{
        for (const item of dados){
            inserirProfissional(item);
        }
        eventoExcluir();
    }).catch(erro =>{
        console.error(erro);
    })
    // xhr.open('GET', url);
    // xhr.addEventListener('readystatechange', () =>{
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         dados = JSON.parse(xhr.responseText);
    //         //console.log(dados);

    //         for ( const item of dados){
    //             let linha = document.createElement('tr');
    //             let id = document.createElement('td');
    //             let nome = document.createElement('td');
    //             let registro = document.createElement('td');
    //             let telefone = document.createElement('td');
    //             let email = document.createElement('td');
    //             let unidade = document.createElement('td');
    //             let especialidade = document.createElement('td');
    //             let acoes = document.createElement('td');

    //             id.textContent = item.id;
    //             nome.textContent = item.nome;
    //             registro.textContent = item.registro;
    //             telefone.textContent = item.telefone;
    //             email.textContent = item.email;
    //             unidade.textContent = item.unidade
    //             especialidade.textContent = item.especialidade
    //             acoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao"
    //                                 href="javascript:void(0)">Excluir</a>`
    //             linha.appendChild(id);
    //             linha.appendChild(nome);
    //             linha.appendChild(registro);
    //             linha.appendChild(email);
    //             linha.appendChild(telefone);
    //             linha.appendChild(unidade);
    //             linha.appendChild(especialidade);
    //             linha.appendChild(acoes);

    //             tabela.tBodies[0].appendChild(linha);
    //         }
    //     }
    //     eventoExcluir();
    // });
    // xhr.send();
}

carregarProfissionais();


const eventoExcluir= () =>{
    let botoes = document.querySelectorAll('a.botao#vermelho');
    for (const bt of botoes){
        bt.addEventListener('click', () =>{
            bt.parentNode.parentNode.remove();
        });
    };
};


let botaoAdicionar = document.querySelector('a.botao#add');
let form = document.querySelector('form');

let botaoCancelar = document.querySelector('input#vermelho');



botaoAdicionar.addEventListener('click', () => {
    form.classList.remove('inativo');
    botaoAdicionar.classList.add('oculto');
});

botaoCancelar.addEventListener('click', () =>{
    form.classList.add('inativo');
    botaoAdicionar.classList.remove('oculto');
    form.reset();
});

let tabela = document.querySelector('table');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    let profissional = {
        id: tabela.tBodies[0].rows.length + 1,
        nome: form.nome.value,
        registro: form.registro.value,
        telefone: form.telefone.value,
        email: form.email.value,
        unidade: form.unidade.options[form.unidade.selectedIndex].label,
        especialidade: form.especialidade.options[form.especialidade.selectedIndex].label
    };
    console.log(profissional);
    inserirProfissional(profissional);
    form.reset();
    form.classList.add('inativo');
    botaoAdicionar.classList.remove('oculto');
    eventoExcluir();

});

const inserirProfissional = (item) => {
        let linha = document.createElement('tr');
        let id = document.createElement('td');
        let nome = document.createElement('td');
        let registro = document.createElement('td');
        let telefone = document.createElement('td');
        let email = document.createElement('td');
        let unidade = document.createElement('td');
        let especialidade = document.createElement('td');
        let acoes = document.createElement('td');

        id.textContent = item.id;
        //nome.textContent = item.nome;
        nome.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao"
                        href="javascript:void(0)">Excluir</a>`
        registro.textContent = item.registro;
        telefone.textContent = item.telefone;
        email.textContent = item.email;
        unidade.textContent = item.unidade
        especialidade.textContent = item.especialidade
        acoes.innerHTML = `<a class="botao" href="javascript:void(0)">Editar</a> <a id="vermelho" class="botao"
                                    href="javascript:void(0)">Excluir</a>`
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(registro);
        linha.appendChild(email);
        linha.appendChild(telefone);
        linha.appendChild(unidade);
        linha.appendChild(especialidade);
        linha.appendChild(acoes);

        tabela.tBodies[0].appendChild(linha);
};

const atualizarTotalProfissionais = () => {
    let totalProfissionais = tabela.tBodies[0].rows.length;
    document.querySelector('#total-profissionais').textContent = totalProfissionais;
};







