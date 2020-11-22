// ./01httpserver/server_test1.js
var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    fs.access('./images/house.jpg', (err) => {
        if (err) {
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.readFile('./images/house.jpg', (err, data) => {
            res.end(data);
        });
    });
}).listen(3000, () => {
    console.log('server on 3000 port');
});