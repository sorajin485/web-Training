// ./05express/app01.js
const http = require('http');
const express = require('express');

let app = express();
app.get('/',(req,res,next)=>{
  res.send('hello exporess');
});

// 기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);
let port = app.get('port');

// Express 서버 시작
http.createServer(app).listen(app.get('port'), () => {
  console.log('server on : ' + port)
});
