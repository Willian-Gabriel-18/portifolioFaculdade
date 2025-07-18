//Variável que vai referenciar o elemento #form-contato
const formularioContato = document.querySelector("#form-contato");

//Variável que vai referenciar o botão de fechar feedback do form
const btnFecharFeedback = document.querySelector("#btnFecharFeedback");

//Variável que vai referenciar todos os projetos
const projetosContainer = document.querySelector(".projetos");

/*Configurando o evento submit do formulário, para quando for enviado validar e limpar os campos de entrada
 quando for enviar os formulários e aparecer feedback na tela */
formularioContato.addEventListener("submit", (event)=>{
    event.preventDefault();//Prevenir que vá para outra página ou que ela reinicie
    
    //Validar email
    /*O regex abaixo consulta de forma bem simples, verificando se antes do @, tem somente caracteres
    que nao sao @ e nem espaços em branco, colocando @ como símbolo obrigatório, e depois validando se tem
    algo antes do ponto e ápos.
    */
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.querySelector("#uEmail").value;//criando uma variavel para armazenar valor que o usuario deu entrada
    

    //Testa se o email bate com o regex, por gosto pessoal, deixei para limpar somente quando tudo for válido
    if (regex.test(email)) {
        const feedbackForm = document.querySelector(".form-feedback-container");//Variavél para armazenar o feedbackForm
        feedbackForm.style.display = "flex";//Alterando display para flex, para deixar elemento disponível
    
        //Limpar campos do formulário
        const entradasForm = document.querySelectorAll(".entrada-form input,textarea");//Selecionar todos campos de entrada, sendo input ou text area dentro de .entrada-form
    
        //Transformar o NodeList em array para eu poder usar o ForEach
        Array.from(entradasForm).forEach(elem => {
            elem.value = ''; //Limpando
        });
    }
    else{
        alert("Algo deu errado, tente novamente, campo email incorreto.")
    }

    
});

//Configurando o evento click do fechar feedback
btnFecharFeedback.addEventListener("click", (event)=>{
    //Alterando o display para none, para deixar o elemento feedback indisponível
    document.querySelector(".form-feedback-container").style.display = "none";
});

//Configurando eventos clique dos projetos
projetosContainer.addEventListener("click", (event)=>{
    /*Armazenar o item clicado em uma váriavel usando event.target para selecionar
    o alvo do evento, e o método closest para buscar o elemento ancestral mais próximo
    do argumento que passei, no caso, .projeto
    */
    const itemClicado = event.target.closest('.projeto');


    /* Se eu clicar em um item que NÃO tenha classe intern-link o programa deve seguir as seguintes instruções:
        1-Verifique se o id do elemento é projetoN, sendo n, qualquer numero,
        2-Se o id for projetoN, abra a página para visualização do projeto com window.open()
        OBS: Apesar da desvantagem do open nao abrir se o usuário estiver com bloqueador de popup, usei ele por conta
        de eu nao querer usar o elemento 'a' para ir para outra página e por querer que a página seja aberta em outra aba
    */

    if (!event.target.classList.contains("intern-link")){
        if(itemClicado.id === 'projeto1'){
            window.open('https://questionario-cancer.vercel.app/', '_blank');
        }

        if(itemClicado.id === 'projeto2'){
            window.open('https://prototipo-ten-sage.vercel.app/', '_blank');
        }

        if(itemClicado.id === 'projeto3'){
            window.open('https://odin-project-landing-page-twnc.vercel.app/', '_blank');
        }
    }
});
