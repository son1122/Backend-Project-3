const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/menu', ctrl.dashboard.getMenuDashboard);
router.get('/menuitem', ctrl.dashboard.getMenu);

module.exports = router