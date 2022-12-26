const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.menuitem.getAllMenuItem);

module.exports = router;
