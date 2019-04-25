const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

// Starting express
const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

// Define paths for express config
const publicFolder = path.join(__dirname,'../public')

// Setting the public folder to express
app.use(express.static(publicFolder))

// Starting Socket io connection
io.on('connection', (socket) => {
    console.log('New Websocket connection')

    socket.emit('Welcome', 'Welcome to the chat')
    // socket.emit('countUpdated', count)

    // socket.on('increment', () => {
    //     count++
    //     io.emit('countUpdated', count)
    // })
})

// Starting up the server
server.listen(port, () => {
    console.log('Server is up on port ' + port)
})