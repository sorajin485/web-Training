// [myApp/main.js]
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// error
app.use((req, res) => {
    res.status(404).send('File Not Found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})