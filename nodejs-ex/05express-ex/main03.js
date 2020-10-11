// ./express-ex/main03.js

const express = require('express');
const app = express();
// const http = require('http')

app.get('/', (req, res, next) => {
    res.status(201).send('hello world!!');
  });

app.get('/send', (req, res, next) => {
  res.status(201).send('<h1>hello world!!</h1>');
});

app.get('/download', (req, res, next) => {
  res.download('./test.txt');
});

app.get('/redirect', (req, res, next) =>  {
    res.redirect('/send')
});

app.get('/json', (req, res, next) => {
    res.json({message: 'succes', code: 0})
})

// http.createServer(app).listen(3000, () => {
//     console.log('server on: 3000 PORT')
// })

app.listen(3000, function() {
    console.log('Example App listening on port 3000');
});
