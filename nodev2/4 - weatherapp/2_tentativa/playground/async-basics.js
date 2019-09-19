console.log('starting app')

setTimeout(() => {
    console.log('Inside of callback')
}, 20)

setTimeout(() => {
    console.log('2nd timeout')
}, 0)

console.log('finishing up')