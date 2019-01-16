var fs = require('fs');
console.log( 'Reading contents of: ' + __filename );
fs.readFile( __filename, function(err, data) {
	if( err ) {
		return console.error(
				'Failed to read file '
				+ __filename + '\n' + err );
	}
	console.log( data.toString() );
} );
