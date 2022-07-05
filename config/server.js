// Express v4.16.0 e superior
// --------------------------
const port = 3003

// const bodyParser = require('body-parser')
const express = require('express');
const server = express()

server.use(express.json());
server.use(express.urlencoded({
  extended: true
}));

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
