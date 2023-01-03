const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.customer.test);
router.post("/signup", ctrl.customer.signup);
router.post("/login", ctrl.customer.login);
router.get("/verify", ctrl.customer.verify);
router.put("/edit", ctrl.customer.edit);
router.get("/data/", ctrl.customer.data);
router.get("/data/:id", ctrl.customer.dataId);
router.get("/menu", ctrl.customer.menu);
router.delete("/user", ctrl.customer.deleteUser);
module.exports = router;
