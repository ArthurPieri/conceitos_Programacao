let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(' Hey, it worked!')
    // reject(' Unable to fulfill promise')
    },2500)
})

somePromise.then((message) => {
    console.log(' Sucess :', message)
}, (errorMsg) => {
    console.log(' Error: ', errorMsg)
})