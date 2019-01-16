var http = require('http');
var server = http.createServer( function( req, res ) {
    
    var url = require('url');
    var parsedUrl = url.parse(req.url);
    try {
        var responseText = eval( parsedUrl.query );
        res.writeHead( 200,
            { 'Content-Type' : 'text/plain' } );
        res.write( JSON.stringify( responseText ) );
    }
    catch(err) {
        res.writeHead( 500,
            { 'Content-Type' : 'text/plain' } );
        res.write( `Error evaluating ${parsedUrl.query}` );
    }
    res.end();
} );
server.listen( 8080 );
