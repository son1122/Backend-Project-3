const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/:tableNumber", ctrl.orderdetail.getOrderDetailMatch);

module.exports = router;
