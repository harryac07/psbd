var express = require('express');
var router = express.Router();

/* currency controllers */
const currencyCtrl = require('../controllers/index');
/* users controllers */
const  userCtrl = require('../controllers/users');
/* auth controllers */
const authCtrl = require('../controllers/auth');

/* routes for exchange api */
// router.get('/exchange',currencyCtrl.getExchange);


/* routes for users api */
router.get('/users',userCtrl.getAllUsers);
router.get('/user/:id',userCtrl.getOneUser);
router.post('/user',userCtrl.postUser);
router.put('/user/:id',userCtrl.updateUser);
router.delete('/user/:id',userCtrl.deleteUser);

/* auth */
router.post('/register',authCtrl.register);
router.post('/login',authCtrl.login);

module.exports = router;
