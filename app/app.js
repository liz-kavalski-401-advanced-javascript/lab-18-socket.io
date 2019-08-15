'use strict';

const fs = require('fs');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const faker = require('faker');


setInterval(()=>{
  socket.emit('speak', faker.hacker.phrase());
},750);


//starter code
const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
