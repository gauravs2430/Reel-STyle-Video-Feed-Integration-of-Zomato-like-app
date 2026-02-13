const foodModel = require("../models/food.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const storageServices = require("../services/storage.services");
const { v4:uuid } = require("uuid");



async function createFood(req, res) {

    if (!req.file) {
        return res.status(400).json({
            message: "Image file is required"
        });
    }

    const fileUploadResult = await storageServices.fileUpload(
        req.file.buffer,
        uuid()
    );

    const foodItem = await foodModel.create({
        foodname: req.body.foodname ,
        description: req.body.description ,
        video: fileUploadResult.url,
        foodpartner: req.foodpartner._id 
    })

    return res.status(201).json({
        message: "Food created successfully" ,
        food: foodItem  
    });
}



module.exports = {
    createFood ,

}