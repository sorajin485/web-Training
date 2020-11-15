// ./fileupload/multiserver02.js
const fs = require('fs');
const express = require('express')
const multer = require('multer')
let upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            // 파일 업로드 경로 설정
            cb(null, './photos/uploads');
        },
        filename: (req, file,cb) => {
            // 파일 이름 설정
            cb(null, file.originalname);
        }
    }),
}); 
let app = express()

app.get('/multi02', (req, res) => {
    fs.readFile('multi02.html', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.post('/multiupload', upload.array('file', 2), (req, res) => {
    console.log(req.body)
    console.log(req.files)
    res.status(204).end()
});

app.listen(3000, () => {
    console.log('server on 3000 port')
});
