var express = require('express')
var http = require('http')
var app = express()
app.set('port', process.env.PORT || 3000)
app.get('/', function(req, res) {
  console.log(JSON.stringify({"unix": Math.floor(new Date() / 1000)}))
})
var server = http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})