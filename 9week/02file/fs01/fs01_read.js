// ./fs/file_read/fs01_read.js
const fs = require('fs')

// 여기에 작성





fs.readFile('./test.txt', function(err, data){
    if(!err) {
        console.log('test.txt 파일읽기 성공')
        console.log(data)
        console.log(data.toString())
        return
    }
    console.log(err)
})
