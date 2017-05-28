var express = require('express');
var app = express();
var PORT = 8080;

var middleware= require('./middleware.js')

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response) {
    response.send('about');
});

app.use(express.static(__dirname));

app.listen(PORT, function() {
    console.log('Express Server started on port ' + PORT);
});
