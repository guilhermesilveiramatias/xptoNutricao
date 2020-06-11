var botaoAdicionar = document.querySelector("#buscar-pacientes");


var modal = document.querySelector("#modal");
var botaoFecharModal = document.querySelector("#modal .content .header a");

botaoAdicionar.addEventListener("click", function(){

    modal.classList.remove("invisivel");

    // Busca os pacientes da API.

    // Criando um objeto do javascript responsável por fazer requisições http. (apesar do nome xml ele consegue trafegas json)
    const xhr = new XMLHttpRequest();

    // Configurando o objeto - abrindo a conexão.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    // configurando um "escutador" de eventos para poder receber o evendo de callback (resultado) das requisições.
    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax");

        erroAjax.classList.add("invisivel");
        if (xhr.status == 200)
        {
            // técnica de utilização do ajax (requisição assíncrona com javascript)        
            var resposta = xhr.responseText;       

            // Convertendo o texto de retorno para javascript.
            // Json é um objeto nativo do javascript.
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);            
            });


            setTimeout(function(){
                modal.classList.add("invisivel");
            }, 500);
        }
        else
        {
            console.log(xhr.status);
            console.log(xhr.responseText);
            

            erroAjax.classList.remove("invisivel");
        }


    })

    // Enviando ao requisição. (aqui é que envia efetivamente);
    xhr.send();





})


botaoFecharModal.addEventListener("click", () => {modal.classList.add("invisivel")});

