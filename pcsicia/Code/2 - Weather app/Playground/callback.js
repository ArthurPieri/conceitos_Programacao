let getUser = (id, callback) => {
    let user = {
        name: 'Arthur',
        id: id
    }
    setTimeout(() => {
        callback(user)        
    }, 3000)

}

getUser(31, (user) => {
    console.log(user)
})