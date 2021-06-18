const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload =  multer({storage : storage});

router.post("/login", authController.login);
router.post("/register", upload.single("avatar"), authController.register);
module.exports = router;