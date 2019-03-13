const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5c890fd65d462d4675850e1f")}, (error, user) => {
    //     if(error){
    //     /* The error is releated mostly to connection problems */
    //         return console.log('Unable to fetch')
    //     }

    // /* If the object you are looking through findOne does not exist it returns null*/
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 26}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 26}).count((error, count) => {
    //     console.log(count)

    db.collection('tasks').findOne({_id: new ObjectID("5c891081b074f54727220cde")}, (error, task) => {
        if(error){
            return console.log('Unable to fetch')
        }

        console.log(task)
        console.log('------------------------')
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })

})