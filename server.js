var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send('hello express');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express Server started on port ' + PORT);
});
