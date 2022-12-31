const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/', ctrl.dashboard.getDashboard);

module.exports = router