var appMailPort = 8001,
	http = require('http'),
	express = require('express'),
	app = express();
app.use(express.static(__dirname + '/../frontend/'));
var server = http.createServer(app).listen(appMailPort, function(){
	console.log('Listening on port %d', server.address().port);
});
