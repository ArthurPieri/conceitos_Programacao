// Function declarations
function obtemInformacoesDoForm(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){
    
    let erros = []
    
    // Valida se os campos não estão em branco
    if( paciente.nome.length == 0)
        erros.push('O nome não pode estar em branco')
    if( paciente.peso.length == 0)
        erros.push('O peso não pode estar em branco')
    if( paciente.altura.length == 0)
        erros.push('A altura não pode estar em branco')
    if( paciente.gordura.length == 0)
        erros.push('O % de gordura não pode estar em branco')
    
        // Valida se o Peso é valido
    if(!validaPeso(paciente.peso))
        erros.push('O peso é inválido!') 
    // Valida se a altura é valida
    if(!validaAltura(paciente.altura))
        erros.push('A Altura é inválida!')

    return erros
}

function exibeMensagensDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''
    erros.forEach((erro) => {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })

}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

// Event declaration
let botaoAdicionar = document.querySelector('#adicionar-paciente')

// Event listeners
botaoAdicionar.addEventListener('click', () => {
    event.preventDefault()
    
    let form = document.querySelector('#form-adiciona')
    // Extraindo informacoes do paciente do form
    let paciente = obtemInformacoesDoForm(form)

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)
    
    form.reset()
    let msgErro = document.querySelector('#mensagens-erro')
    msgErro.innerHTML = ''
})