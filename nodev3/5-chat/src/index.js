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

//
io.on('connection', () => {
    console.log('New Websocket connection')
})

// Starting up the server
server.listen(port, () => {
    console.log('Server is up on port ' + port)
})