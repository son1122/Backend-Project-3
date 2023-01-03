const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/", ctrl.menuitem.getAllMenuItem);
router.get("/category/:catid", ctrl.menuitem.allMenuItemByCategory);
router.get("/search", ctrl.menuitem.searchMenuItem);
module.exports = router;
