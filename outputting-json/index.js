var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var obj = {
        firstname: 'Anthony',
        lastname: 'Cantuta'
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');