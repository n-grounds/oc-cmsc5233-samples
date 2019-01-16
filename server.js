var http = require('http');
var server = http.createServer( function( req, res ) {
    res.writeHead( 200,
        { 'Content-Type' : 'text/plain' } );
    var url = require('url');
    var parsedUrl = url.parse(req.url);
    res.write( `${parsedUrl.query}` );
    res.end();
} );
server.listen( 8080 );
