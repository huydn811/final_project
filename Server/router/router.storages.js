const express = require("express");
const router = express.Router();
const storageController = require("../controller/storage.Controller");

router.get("/*/:img", storageController.viewImg);
module.exports = router;