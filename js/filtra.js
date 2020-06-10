var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    // 'this' referencia o dono do evento.    
    //filtrarComIndexOf(campoFiltro.value);
    filtrarComRegEx(this.value);
   
})


/*-------------------------------------------
 * Filtra a tabela utilizando indexOf
 * -----------------------------------------*/
function filtrarComIndexOf(nome){
    //retorna a coleçaõ de pacientes.
    const pacientes = document.querySelectorAll(".paciente");    
    pacientes.forEach(paciente => {
        const tdNome = paciente.querySelector(".info-nome");
        const nome = tdNome.textContent.toUpperCase();
        
        if (nome.indexOf(campoFiltro.value.toUpperCase()) == -1 && campoFiltro.value.length > 0) {
            paciente.classList.add("invisivel");
        }
        else {
            paciente.classList.remove("invisivel");
        }
    }) 
}


function filtrarComRegEx(filtro){
    //retorna a coleçaõ de pacientes.
    const pacientes = document.querySelectorAll(".paciente");    
    pacientes.forEach(paciente => {
        const tdNome = paciente.querySelector(".info-nome");
        const nome = tdNome.textContent.toUpperCase();

        const expressao = new RegExp(filtro, "i"); // O parâmetro 'i' serve para determinar case Insensitive.
        
        if ( !expressao.test(nome) && campoFiltro.value.length > 0) {
            paciente.classList.add("invisivel");
        }
        else {
            paciente.classList.remove("invisivel");
        }
    }) 
}


