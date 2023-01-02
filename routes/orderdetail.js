const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/:tableNumber", ctrl.orderdetail.getOrderDetailMatch);

module.exports = router;
