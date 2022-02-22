const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const dirClient = path.join(__dirname, '../client/build');

// # middlewares
// static file 
app.use(express.static(path.join(dirClient)));

app.get('/', (req, res) => {
  res.sendFile(path.join(dirClient, 'index.html'))
});

app.post('/', (req, res) => {
  console.log('server root post')
  res.send({ ok: true });
})

const server = http.createServer(app);
server.listen(8080, function() {
  console.log('on 8080 port');
})
