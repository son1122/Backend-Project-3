const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.order.testOrder);
router.post("/", ctrl.order.createOrder);
router.get("/detail", ctrl.order.showOrderDetail);
router.get("/table/:index", ctrl.order.orderByTable);
router.get("/:index", ctrl.order.showOrder);
router.put("/status/:tableNumber", ctrl.order.updateOrderStatus);
module.exports = router;
