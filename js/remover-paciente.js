

// percorrer os pacientes e incluir, para cada um deles, um escutador de evento de duplo clique.


/* UTILIZAÇÃO DA TÉCNICA DE EVENT BUBBLING - ONDE O "ESCUTADOR" FICA NO "PAI" - ISSO DEIXA O NAVEGADOR MAIS RÁPIDO. */

var pacientes = document.querySelectorAll("#tabela-pacientes");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event){   //  "event" é um objeto que conterá as informações do evento.
        var alvoEvento = event.target;    //  recupera o filho que está sendo clicado. no nosso caso a td
        var paiDoAlvo = alvoEvento.parentNode  //  recupera o pai do filho que está sendo clicado. no nosso caso a tr.
        
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(() => paiDoAlvo.remove(), 450);  //  usando uma arrow function para definição do tempo de espera.

        
    })
})






/* EXEMPLO DE COMO ADICIOANR O EVENTO NO ITEM ESPECÍFICO.
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){   //  importante: deixar tudo em minúsculo.
        this.remove();   //  "this" é uma palavra de contexto que está sempre atrelada a quem chamou o evento. 
                         // "remove" é responsável por remover o elemento do DOM
        
    })
});
*/