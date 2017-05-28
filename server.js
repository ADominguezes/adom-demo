var express = require('express');
var app = express();
var PORT = 8080;

var middleware= require('./middleware.js')

app.use(middleware.logger);

app.get('/', middleware.requireAuthentication, function(request, response) {
    response.render('/');
});

app.use(express.static(__dirname + '/demo'));

app.listen(PORT, function() {
    console.log('Express Server started on port ' + PORT);
});
