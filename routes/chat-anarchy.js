var express = require('express'),
    http = require('http'),
    Moniker = require('moniker'),
    favicon = require('serve-favicon'),
    hbs = require('hbs');

var router = module.exports = express.Router();

var names = Moniker.generator([Moniker.adjective, Moniker.noun], {
    glue: ' '
});

router.get('/about', function(req, res, next) {
    res.render('about', {
        title: req.path,
        about: true
    });
});

router.get('/*', function(req, res, next) {
    res.render('index', {
        title: req.path
    });
});

var io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.user = names.choose();
    //console.log("%s connected.", socket.user);
    socket
        .on('join', function(room) {
            //console.log("%s joined %s", socket.user, room);
            socket.join(socket.room = room);
            io.to(socket.room).emit('joined', socket.user);
        })
        .on('message', function(message) {
            //console.log("%s: %s %s", socket.user, message, socket.room);
            io.to(socket.room).emit('message', {
                u: socket.user,
                m: message
            });
        })
        .on('disconnect', function() {
            //console.log("%s left %s", socket.user, socket.room);
            io.to(socket.room).emit('left', socket.user);
        });
});
