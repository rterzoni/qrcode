const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": 'text/html'});
    response.end(index);
});

const port = process.env.PORT || 1337;
server.listen(port);
