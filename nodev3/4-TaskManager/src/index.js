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

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'red123456'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red123456', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()