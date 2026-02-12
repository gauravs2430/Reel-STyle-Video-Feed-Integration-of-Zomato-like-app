const foodModel = require("../models/food.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const storageServices = require("../services/storage.services");
const { v4:uuid } = require("uuid");



async function createFood(req, res) {

    const foodpartner = req.foodpartner;

    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.file) {
        return res.status(400).json({
            message: "Image file is required"
        });
    }

    const fileUploadResult = await storageServices.fileUpload(
        req.file.buffer,
        uuid()
    );

    console.log(fileUploadResult);

    return res.status(200).json({
        message: "Executed"
    });
}



module.exports = {
    createFood ,

}