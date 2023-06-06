// const EventEmitter = require('events');

// //EventEmitter in the class. A customEmitter is created/extended.
// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, age) => {
//   console.log(`data received. ${name} is ${age} years old.`);
// });

// customEmitter.emit('response', 'Doe', 32);

// creating server with EventEmitter mehod.
const http = require('http');

// Using EventEmitter API
const server = http.createServer();
// emits request event
// subcribe/listen/ respond to it.
server.on('request', (req, res) => {
  res.end('Welcome.');
});

server.listen(5000);
