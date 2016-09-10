var config = require('./config.js');
var patrol = require('./patrol.js');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('web'));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/web/index.html'));
});

http.listen(config.clientPort, '127.0.0.1', function(){
	console.log('listening on 127.0.0.1:' + config.clientPort);
});

for(let i = 0; i < config.serviceCount; i++) {
	patrol.start(i, io)
}
