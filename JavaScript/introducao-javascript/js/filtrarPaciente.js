let campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function (){
    console.log(this.value)

    let pacientes = document.querySelectorAll('.paciente')
   
    if (this.value.length > 0){
        pacientes.forEach((paciente) => {
            let nome = paciente.querySelector('.info-nome').textContent
            let expressao = new RegExp(this.value, 'i')
            !expressao.test(nome) ? paciente.classList.add('invisivel') : paciente.classList.remove('invisivel')
        })    
    }else{
        pacientes.forEach((paciente) => {
            paciente.classList.remove('invisivel')
        })
    }
})