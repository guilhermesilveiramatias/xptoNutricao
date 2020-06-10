var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    event.preventDefault(); // event é um objeto que armazena os dados do evento.    
    //console.log("Oi, eu sou o botão e fui clicado.");



    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    //var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    exibeMensagensDeErro(erros);
    if (erros.length > 0) {
        return; //  sai da função.
    }

    var tabela = document.querySelector("#tabela-pacientes");

    // Adiciona o paciente na tabela.
    //tabela.appendChild(pacienteTr);
    adicionaPacienteNaTabela(paciente);
    
    form.reset();
})


// inclui um paciente na tabela.
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)

}

function obtemPacienteDoFormulario(form) {
    // Cria um objeto paciente.
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value.replace(',', '.'),
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value.replace(',', '.'))
    };

    return paciente;
}

// monta uma tr pronta com os dados do paciente.
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //  inclui a classe css 'paciente'

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0)
            erros.push("O nome não pode ser em branco.");
    
    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido.")

    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida");
    
    if (paciente.gordura.length == 0 )
        erros.push("A gordura não pode ser em branco.");
    
    if (paciente.peso.length == 0)
        erros.push("O peso não pode ser em branco.");
    
    if (paciente.altura.length == 0)
        erros.push("Altura naõ pode ser em branco.")
    
    
    return erros;
}



function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    
    ul.innerHTML = "";    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
    
}


// exemplo de chamada de função.
//titulo.addEventListener("click", mostraMensagem);

//function mostraMensagem(){
//    console.log("Olá, eu fui clicado!");
//}

//exemplo de chamada de função anônima.
//titulo.addEventListener("click", function(){
//    console.log("hello! i was clicked.");
//})
