const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/', ctrl.customer.test);
router.post('/signup', ctrl.customer.signup);
router.post('/login', ctrl.customer.login);
router.get('/verify', ctrl.customer.verify);
router.put('/edit', ctrl.customer.edit);

module.exports = router