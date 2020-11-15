// ./fileupload/singleserver.js
const fs = require('fs');




app.get(         , (req, res) => {
    fs.readFile('single.html', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});






app.listen(3000, () => {
    console.log('server on 3000 port')
});
