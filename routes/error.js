var express = require('express');

var router = module.exports = express.Router();

// 404 Page Not Found handler
router.use(function(req, res) {
    console.warn('[dev-site] 404: %s', req.originalUrl);
    res.status(404).render('core/error', {
        title: "404 - Page Not Found",
        url: req.originalUrl
    });
});
