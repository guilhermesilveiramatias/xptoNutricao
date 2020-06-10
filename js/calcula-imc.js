// para criar uma variável em javascript eu utilizo a palavra var * não confunda com var do C#.
//var titulo = document.querySelector("h1");
//var titulo = document.querySelector(".titulo");  //  Seletor css para classe
//var titulo = document.querySelector("#titulo"); // seletor css para o id.

// função para calcular o imc.



var titulo = document.querySelector("[titulo]");

//console.log(titulo.textContent);
//titulo.textContent = "Casa da dinda";


//var paciente = document.querySelector("#primeiro-paciente");


var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
//console.log(pacientes.length);



for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    //var cor = "orange";
    
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    var imc = 0;

    if (!pesoValido) {
        //console.log('Peso inválido.');
        pesoValido = false;
        tdIMC.textContent = 'Peso inválido.';
        //paciente.style.backgroundColor = cor;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        //console.log('Altura inválida.');
        alturaValida = false;
        tdIMC.textContent = 'Altura inválida.';
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = cor;
        
    }


    
    
    function calculaIMC(peso, altura) {
        return (peso / (altura * altura)).toFixed(2);
    }

    if (pesoValido && alturaValida) {
        imc = calculaIMC(peso, altura);  //  Criei uma pequena função para encapsular o cálculo.
        tdIMC.textContent = imc;  //  Atualizando a coluna.
    }

    //console.log("seu peso é " + peso);
    //console.log("a sua altura é " + altura);
    //console.log("o seu imc é " + imc);
    
}


function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}



function validaAltura(altura){
    if (altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
    
    
}





