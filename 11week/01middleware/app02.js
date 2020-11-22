// ./05express/app02.js
const express = require('express');
const http = require('http');

let app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

app.get('/users', (req, res, next) => {
  res.send('/users 접속');
});

app.get('/boards', (req, res, next) => {
  res.send('/boards 접속');
});

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);
let port = app.get('port')

// Express 서버 시작
http.createServer(app).listen(port, () => {
  console.log('server on : ' + port)
});
