const botao = document.getElementById('botaoAcionamento');

botao.onclick = async () => {

    const httpResp = await fetch('./christiano-gomides-moura.json');

    if (!httpResp.ok) {
        alert('Erro na requisição assíncrona - ' + httpResp.status);
        return;
    }

    const dados = await httpResp.json();

    // Cadastro
    document.getElementById('tituloCadastro').textContent = dados.Cadastro.Titulo;
    document.querySelector('#cadastro p').textContent = dados.Cadastro.Slogan;
    document.getElementById('botaoCadastro').textContent = dados.Cadastro.Botao;

    // Descrição
    document.querySelector('#descrição h2').textContent = dados.Descricao.TituloExplicacao;
    document.querySelector('#descrição p').textContent = dados.Descricao.Descricao;

    const explicacoes = document.querySelectorAll('#listaExplicação b');
    const listaExplicacao = dados.Descricao.ListaDescricao;
    for (let i = 0; i < explicacoes.length; i++) {
        explicacoes[i].textContent = listaExplicacao[i];
    }

    document.querySelector('#beneficios h2').textContent = dados.Descricao.TituloBeneficios;

    const beneficios = document.querySelectorAll('#listaBeneficios li');
    const listaBeneficios = dados.Descricao.Beneficios;

    for (let i = 0; i < beneficios.length; i++) {
        const b = beneficios[i].querySelector('b');
        const span = beneficios[i].querySelector('span');
        b.textContent = listaBeneficios[i].Beneficio;
        span.textContent = listaBeneficios[i].Descricao;
    }

    // Comentários e Propaganda
    document.querySelector('#comentarios h2').textContent = dados.Comentarios.Titulo;

    const comentarios = document.querySelectorAll('#comentarios article div');
    const listaComentarios = dados.Comentarios.Feedbacks;

    for (let i = 0; i < comentarios.length; i++) {
        const p = comentarios[i].querySelector('p');
        const span = comentarios[i].querySelector('span');
        p.textContent = listaComentarios[i].Comentario;
        span.textContent = listaComentarios[i].Nome;
    }

    document.querySelector('#propaganda h3').textContent = dados.Comentarios.Propaganda.Titulo;
    document.querySelector('#propaganda p').textContent = dados.Comentarios.Propaganda.Descricao;
    document.querySelector('#propaganda button').textContent = dados.Comentarios.Propaganda.Botao;
    document.querySelector('#propaganda span').textContent = dados.Comentarios.Propaganda.Slogan;

    // Assinaturas
    document.querySelector('#assinaturas h2').textContent = dados.Assinaturas.Titulo;

    const planos = document.querySelectorAll('#assinaturas article div');
    const listaPlanos = dados.Assinaturas.Planos;

    for (let i = 0; i < planos.length; i++) {
        const h4 = planos[i].querySelector('h4');
        const lis = planos[i].querySelectorAll('ul li');
        const button = planos[i].querySelector('button');
        const span = planos[i].querySelector('span');

        h4.textContent = listaPlanos[i].Plano;

        const vantagens = listaPlanos[i].Vantagens;
        for (let j = 0; j < lis.length; j++) {
            lis[j].textContent = vantagens[j];
        }

        button.textContent = listaPlanos[i].Botao;
        span.textContent = listaPlanos[i].Slogan;
    }

    // FAQ
    document.querySelector('#faq h2').textContent = dados.FAQ.Titulo;

    const Perguntas = document.querySelectorAll('#faq .perguntas');
    const listaPerguntas = dados.FAQ.Perguntas;

    for (let i = 0; i < Perguntas.length; i++) {
        const h3 = Perguntas[i].querySelector('label h3');
        const p = Perguntas[i].querySelector('.resposta p');
        h3.textContent = listaPerguntas[i].Pergunta;
        p.textContent = listaPerguntas[i].Resposta;
    }

    // Cabeçalho
    const infos = document.querySelectorAll('footer p');
    const listaInfos = dados.Cabecalho;

    for (let i = 0; i < infos.length; i++) {
        infos[i].textContent = listaInfos[i];
    }

}