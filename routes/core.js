var express = require('express');

var router = module.exports = express.Router();

// Index
router.get('/', function(req, res, next) {
    res.render('core/index', {
        title: 'dev.keithwade.com'
    });
});
