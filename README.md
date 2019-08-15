# lab-18-socket.io

### Author: Liz Kavalski

### Links and Resources
* [![Build Status](https://travis-ci.com/liz-kavalski-401-advanced-javascript/lab-18-socket.io.svg?branch=master)](https://travis-ci.com/liz-kavalski-401-advanced-javascript/lab-18-socket.io)
* [submission PR](https://github.com/liz-kavalski-401-advanced-javascript/lab-18-socket.io/pull/1)

#### Documentation
* jsdoc (Server assignments)

### Modules
#### `server/socket.io.server.js`
listens for a connect the between the app.js and logger.js and broadcast the message
#### `server/file-error.js`
listens for a file-error and broadcast the message
#### `server/socket.io.server.js`
listens for a file-save and broadcast the 
#### `logger/logger.js`
connect the server
#### `socket.io.server.js`
connect the between the app.js and logger.js


### Setup
#### create a JSON Package:
* npm i:
  * "faker"
  * "jest"
  * "jsdoc"
  * "socket.io"
  * "socket.io-client"


#### Running the app
In the treminal run `socket.io.server.js`, `logger.js` and the `app.js` 
* it should populate in the treminal.
  
#### Tests
* No test are written at this point

#### UML
![UML-lab18](/Lab-18-umm.jpg)
