// Functions declaration

function calculaImc(peso, altura) {
    let imc = 0

    imc = peso / (altura*altura)

    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso >= 0 && peso < 400 ){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true
    }else{
        return false
    }
}

// Variables declaration

let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll('.paciente');

for(let i = 0; i < pacientes.length; i++){
    
    let paciente = pacientes[i]
    
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector(".info-altura") ;
    let altura = tdAltura.textContent;
    
    let tdImc = paciente.querySelector('.info-imc')
    
    let pesoEhValido = validaPeso(peso)
    let alturaEhvalida = validaAltura(altura)
    
    if (!pesoEhValido){
        console.log('Peso inválido')
        pesoEhValido = false
        tdPeso.textContent = 'Peso inválido'
        paciente.classList.add('paciente-invalido')
    }
    
    if (!alturaEhvalida){
        console.log('Altura inválida')
        alturaEhvalida = false
        tdAltura.textContent = 'Altura inválida'
        paciente.classList.add('paciente-invalido')
    }
    
    if (pesoEhValido && alturaEhvalida) {
        let imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}