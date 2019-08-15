'use strict';
//connects to the sever
const io= require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('message', (payload)=> {
    console.log('.');
    console.log('heard', payload);
});
