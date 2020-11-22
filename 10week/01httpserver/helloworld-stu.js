// ./01httpserver/helloWorld.js
var http = require('http');
var server = http.createServer();
server.on('request',(req,res)=>{
    res.write('Hello World');
    res.end();
})

server.listen(3000, ()=>{
    console.log('server on: 3000 port');
});

