// Use module export to expose middleware


var middleware = {
    requireAuthentication: function (request, response, next) {
        console.log('private route hit');
        next();
    },
    logger: function (request, response, next) {
        var date = new Date().toString()
        console.log('Request: ' + request.method + ' ' + request.originalUrl + ' ' + date);
        next();
    }
}


module.exports = middleware