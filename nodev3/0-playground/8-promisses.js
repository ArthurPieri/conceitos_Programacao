const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Deu ruim')
    //  resolve([1, 2, 3])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success: ', result)
}).catch((error) => {
    console.log('Error!', error)
})

//
//                           Fulfiled
//                          /
// Promisse == pending -->
//                          \
//                           Rejected
//
//