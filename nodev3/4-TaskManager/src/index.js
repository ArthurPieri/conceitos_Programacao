const express = require('express')
require('./db/mongoose')
const UserRouter = require('./routers/userRouter')
const TaskRouter = require('./routers/taskRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: '1234' }, 'thisismynewcourse', { expiresIn: '1 day'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()