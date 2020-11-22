// ./02getpost/http01.js
// es6 문법 적용 X
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('hello world');
}).listen(3000, function(){
    console.log('server on : 3000 port')
});


// es6 문법 적용 arrow function
// var http = require('http');
//
// http.createServer( (req, res) => {
//     res.writeHead(200);
//     res.end('hello world');
// }).listen(3000, () => {
//     console.log('server on : 3000 port')
// });
