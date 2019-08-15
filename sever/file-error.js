'use strict';
//socker.io server that listen for file error.
const io = require('socket.io')(3000);

io.on('error', (socket) => {
  console.log('Connected', socket.id);
  socket.on('speak', (payload) => {
    console.log('.');
    socket.broadcast.emit('message', payload);
  });
  
});