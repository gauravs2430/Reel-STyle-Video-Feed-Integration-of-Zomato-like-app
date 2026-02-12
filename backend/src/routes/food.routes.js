const express = require("express");
const foodControllers = require("../controllers/food.controllers");
const authFoodMiddleware = require("../middlewares/authFP.middleware");
const multer = require("multer");

const upload = multer({
    storage:multer.memoryStorage(),
});


const router = express.Router();

// food route and controllers.
router.post("/addItem" , authFoodMiddleware.authFoodPartnerMiddleware , upload.single("video"), foodControllers.createFood);

module.exports = router;