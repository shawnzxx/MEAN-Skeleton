/**
 * Created by shawn.zhang on 9/12/2015.
 */

var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

//set up env variable to the node default value, if node default value not been set we set one
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//create actually express application
var app = express();
//set up stylus compile function
function compile(str, path) {
    return stylus(str).set('filename', path);
}

// Set the application view engine and 'views' folder
//__dirname: The name of the directory that the currently executing script resides in.
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(bodyParser());
//open morgan middleware to logging
app.use(logger('dev'));
//open stylus middleware
//if no static route to our public directory this wont work
app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }
));
//Configure static file serving, request /public/favicon.ico, then node just server this file
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});
//* mean all request dont have specific route setting will go index.html
//and sent it back to client, let client decide which route page to go.
//Typically we should make sure all route in client will also reflect on server too.
app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);

// Log the server status to the console
console.log('Server running at http://localhost:' + port + "...");