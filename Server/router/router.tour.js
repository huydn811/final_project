const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/tours')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload =  multer({storage : storage});

//get all tour
router.get("/get-all-tour", tourController.getAllTour);
//add tour
router.post("/add-tour",upload.single("avatar") ,tourController.addTour);
//get tour id
router.get("/get-tourid/:tourID", tourController.getTourID);
//update tour
router.put("/update-tour/:tourID",upload.single("avatar"), tourController.updateTour);
//delete tour
router.delete("/delete-tour/:tourID", tourController.deleteTour);

module.exports = router;