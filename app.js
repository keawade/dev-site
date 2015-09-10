var express = require('express'),
    http = require('http'),
    favicon = require('serve-favicon'),
    hbs = require('hbs'),
    hbsutils = require('hbs-utils')(hbs);

var routes = require('./routes/');
var app = express();

// Register partials folder (hbs)
hbsutils.registerPartials('./views/partials');
hbsutils.registerWatchedPartials('./views/partials');

// Set hbs as the view engine
app.set('view engine', 'hbs');
app.engine('html', hbs.__express);

// Set server port and IP details
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || 'localhost');

// Set public root directory
app.use(express.static('public'));

app.use(routes);

// Start server
var server = app.listen(app.get('port'), app.get('ip'), function() {
    var address = server.address();
    console.log('[metis] app running on http://%s:%s', address.address, address.port);
});
