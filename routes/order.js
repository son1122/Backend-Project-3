const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.order.testOrder);
router.post("/", ctrl.order.createOrder);
router.get("/:index", ctrl.order.showOrder);
router.get("/detail/:index", ctrl.order.showOrderDetail);

module.exports = router;
