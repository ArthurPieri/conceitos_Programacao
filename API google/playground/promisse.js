let asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b) 
            } else {
                reject('Arguments must be numbers')
            }
        }, 1000)
    }) 
}

asyncAdd(5, 7).then((result) => {
    console.log('Result: ', result)
    return asyncAdd(result, 33)
}).then ((res) => {
    console.log('Should be 45: ', res)
}).catch((errorMessage) => {
    console.log (errorMessage)
})

/*let somePromise = new Promise((resolve, reject) => {
    setTimeout (() => {
    if (true){
        resolve('Hey. It worked')  
    } else {
        reject('Unable to fulfill promise')
    }
    }, 500)
})

somePromise.then((message) => {
    console.log('sucess', message)
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})
*/
