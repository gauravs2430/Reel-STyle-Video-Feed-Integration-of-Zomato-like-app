const express = require("express");
const foodControllers = require("../controllers/food.controllers");
const authFoodMiddleware = require("../middlewares/authFP.middleware");


const router = express.Router();


router.post("/addItem" , authFoodMiddleware.authFoodPartnerMiddleware , foodControllers.createFood);



module.exports = router ;