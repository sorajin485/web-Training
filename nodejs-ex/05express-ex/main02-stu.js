// main.js: express 서버
var express = require('express');
var app = express();
var user = require('./routes/users-stu');


app.get('/', function(req, res) {
    res.send('<h1><u>Hello World</u></h1>');
});

app.use('/user', user);

app.listen(3000, function() {
    console.log('Example App listening on port 3000');
});