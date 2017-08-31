var express = require('express');
var router = express.Router();

/* require all controllers */
const ctrl = require('../controllers/index');

/* routes for api */
router.get('/exchange',ctr.getExchange);

module.exports = router;
