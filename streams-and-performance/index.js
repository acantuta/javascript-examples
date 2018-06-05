var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var html = fs.createReadStream(__dirname + '/index.htm', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    html.pipe(res);
}).listen(1337, '127.0.0.1');