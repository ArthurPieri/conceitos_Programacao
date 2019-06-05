var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura") ;
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc')
    
    var pesoEhValido = true
    var alturaEhvalida = true
    
    if (peso < 0 || peso > 300){
        console.log('Peso inválido')
        pesoEhValido = false
        tdPeso.textContent = 'Peso inválido'
        paciente.classList.add('paciente-invalido')
    }
    
    if (altura < 0 || altura > 3.00){
        console.log('Altura inválida')
        alturaEhvalida = false
        tdAltura.textContent = 'Altura inválida'
        paciente.classList.add('paciente-invalido')
    }
    
    if (pesoEhValido && alturaEhvalida) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2)
    }
}

titulo.addEventListener('click', () => {
    console.log('Olá eu fui clicado!')
})

var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', () => {
    event.preventDefault()
    console.log('Fui clicado')
})