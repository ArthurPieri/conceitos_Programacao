let botaoBuscar = document.querySelector('#buscar-pacientes')

botaoBuscar.addEventListener('click', () => {
    console.log('Buscando pacientes...')

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', () => {
        
        if (xhr.status == 200){
            document.querySelector('#erro-ajax').classList.add('invisivel')
            let pacientes = JSON.parse(xhr.responseText)
        
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente)
            })    
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            document.querySelector('#erro-ajax').classList.remove('invisivel')
        }


    })

    xhr.send()
})