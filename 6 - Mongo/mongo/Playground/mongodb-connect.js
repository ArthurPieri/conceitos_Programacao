//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

let obj = new ObjectID()

console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('deu ruim')
    }
    console.log('Deu bom! É Tois')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Alguma coisa pra fazer',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log ('Deu ruim no todo', err)
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Arthur',
        age: 25,
        location: 'Brasilia'
    }, (err, result) => {
        if (err) {
            return console.log ('Deu ruim no Users', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    })


    client.close()
})
