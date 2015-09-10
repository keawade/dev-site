var express = require('express');

var router = module.exports = express.Router();

router.use(require('./core'));
router.use(require('./rpsls'));
//router.use(require('./chat-anarchy'));
router.use(require('./error'));
