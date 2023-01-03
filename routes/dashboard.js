const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/menu/:id', ctrl.dashboard.getMenuDashboard);
router.get('/menuitem', ctrl.dashboard.getMenu);
router.get('/customer', ctrl.dashboard.getCustomer);
router.get('/waiter', ctrl.dashboard.getChef);
router.get('/chef', ctrl.dashboard.getWaiter);
router.get('/order', ctrl.dashboard.getOrder);
router.get('/ingredient', ctrl.dashboard.getIngredient);
router.get('/location', ctrl.dashboard.getMenu);
router.get('/seller', ctrl.dashboard.getSeller);

module.exports = router