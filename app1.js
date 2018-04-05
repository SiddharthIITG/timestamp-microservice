var express = require('express')
var app = express()

app.get('/a', function(req, res) {
  res.send(JSON.stringify({"unix": Math.floor(new Date() / 1000)}))
})
