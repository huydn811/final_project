const express = require("express");
const router = express.Router();
const transportController = require("../controller/transport");

router.post("/add-transport", transportController.addTransport);
module.exports = router;