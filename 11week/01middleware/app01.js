// ./05express/app01.js
// Express 기본 모듈 불러오기
const express = require('express');
const http = require('http');
 
// 익스프레스 객체 생성
let app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);
let port = app.get('port')

// Express 서버 시작
http.createServer(app).listen(port, () => {
  console.log('server on : ' + port)
});
