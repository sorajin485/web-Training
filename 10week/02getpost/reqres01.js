// ./02getpost/reqres01.js
const http = require('http');

http.createServer( (req, res) => {
    console.log(req)
    res.writeHead(200);
    res.end('hello world');
}).listen(3000, () => {
    console.log('server on : 3000 port')
});
