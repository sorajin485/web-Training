const express = require('express');
let app = express();

const hostname = '127.0.0.1';
const port = 3000;

var user = require('./routes/users.js');
var board = require('./routes/boards.js');

app.use('/users', user);
app.use('/boards', board);

app.listen(port, () => {
  console.log(`Express is running on http://${hostname}:${port}/`);
} );