var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }

    else if (req.url === '/api') {
        var obj = {
            firstname: 'Anthony',
            lastname: 'Cantuta'
        };

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(400);
        res.end();
    }
}).listen(1337, '127.0.0.1');