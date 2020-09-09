// bulit in modules
const path = require('path');
const http = require('http');

// user define module
const color = require('./utils/getRandomColor')
console.log(color.randomColor());
// 3rd party modules
const express = require('express');
const socketIO = require('socket.io');

// constant variables
const app = express();
const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 2100;
const server = http.createServer(app);//create http server
const io = socketIO(server);

let timer = 5000;
let myVar;

io.on('connection', socket => {
    socket.on('event', data => { console.log(data); });

    socket.on('join', (params, callback) => {
        socket.emit('newMessage', { color: color.randomColor(), date: new Date().toLocaleTimeString() });
        myVar = setInterval(() => {
            socket.emit('newMessage', { color: color.randomColor(), date: new Date().toLocaleTimeString() });
        }, timer)
    });

    // send message
    socket.on('createMessage', (messages) => {
        console.log(messages.text);
        timer = messages.text
        clearInterval(myVar)
        myVar = setInterval(() => {
            socket.emit('newMessage', { color: color.randomColor(), date: new Date().toLocaleTimeString() });
        }, timer)
    })
    socket.on('disconnect', () => { console.log('disconnect'); });
});

app.use(express.static(publicPath));

// start  server
server.listen(port, () => {
    console.log(`server is up on ${port}`);
})