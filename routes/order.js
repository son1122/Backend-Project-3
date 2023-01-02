const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.order.testOrder);
router.post("/", ctrl.order.createOrder);
router.get("/detail", ctrl.order.showOrderDetail);
router.get("/table/:index", ctrl.order.orderByTable);
// router.put("/table/:index", ctrl.order.checkOut)
router.get("/:index", ctrl.order.showOrder);
// router.get("/detail/:index", ctrl.order.orderDetailByTable);
router.put("/status/:tableNumber", ctrl.order.updateOrderStatus);
module.exports = router;
