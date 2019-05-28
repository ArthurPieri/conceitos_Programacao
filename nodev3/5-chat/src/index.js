const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMessage, generateLocationMessage} = require('./utils/messages')

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

    socket.on('join', ({ username, room }) => {
        socket.join(room)

        socket.emit('message', generateMessage('Welcome!'))
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joined`))    
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        
        io.to('bsb').emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (coords, cb) => {
        io.emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        cb()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left'))
    })
})

// Starting up the server
server.listen(port, () => {
    console.log('Server is up on port ' + port)
})