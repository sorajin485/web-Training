// ./01httpserver/helloWorld02.js
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.write('Hello World');
    res.end();
});

server.listen(3000, () => {
    console.log('server on: 3000 port')
});