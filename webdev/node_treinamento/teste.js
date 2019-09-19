let user = {
    nome: 'Arthur',
    cidade: 'Brasília',
}
let dizOla = (user) => {
    switch (user.cidade){
        case 'São Paulo':
        console.log('A cidade é Sampa')
        break

        case 'Florianópolis':
        console.log('A cidade é Floripa')
        break

        case 'Salvador':
        console.log('A cidade é Salvador')
        break

        default:
        console.log('A cidade não foi encontrada') 
    }
}
dizOla(user)