const express = require('express')
require('./db/mongoose')
const UserRouter = require('./routers/userRouter')
const TaskRouter = require('./routers/taskRouter')

const app = express()

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

module.exports = app