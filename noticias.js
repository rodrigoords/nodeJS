var http = require('http');

var server = http.createServer(function(request, response){
    response.end("<html><body>Portal de notícias</doby></html>");
});

server.listen(3000);