var express = require('express');

var router = module.exports = express.Router();

// Index
router.get('/rpsls', function(req, res, next) {
    res.render('rpsls/index', {
        title: 'Rock, Paper, Scissors, Lizard, Spock'
    });
});
