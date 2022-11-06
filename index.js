let express = require('express')
let socket =require('socket.io')
let port=5000;
let app= express();

let server=app.listen(port,()=>{
    console.log(`sh3'aal ya m3alem`)
})
app.use(express.static('public'))

let io =socket(server);
io.on('connection',(socket)=>{
    console.log('User connected: ',socket.id);
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})