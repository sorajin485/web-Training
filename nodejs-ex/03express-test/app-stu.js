// app.js
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req,res) => {
    console.log()
})


app.listen(port, () => {
    console.log(`Express is running on http://${hostname}:${port}/`);
});

// app.listen(port, () => {
//     console.log(`Express is running on localhost:3000`);
// } );
