// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;

var fs = require( 'fs' );

var uploadingCount = 0;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes will go here
app.get( '/api/states', function(req, res, next) {
    res.send( {
        data: [
            'Sweeden',
            'Norway',
        ],
    } );
} );

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);