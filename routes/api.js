

const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/auth/login', ctrl.api.login);

module.exports = router