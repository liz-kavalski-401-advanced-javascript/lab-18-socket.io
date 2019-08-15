'use strict';
//socker.io server that listen for file save.
const io = require('socket.io')(3000);

io.on('file-save', (socket) => {
  console.log('save', socket.id);
  socket.on('speak', (payload) => {
    console.log('.');
    socket.broadcast.emit('message', payload);
  });
  
});