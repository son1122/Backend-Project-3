const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/auth/login", ctrl.api.login);

module.exports = router;
