const userModel = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



async function registerUser(req,res){
    const {
        fullname , 
        email ,
        password ,
    } = req.body ;
    
    const isUserExistAlready = await userModel.findOne({
        email
    });

    if(isUserExistAlready){
        return res.status(400).json({
            message:"User Already Exists" 
        });
    }

    const hashedPassword = await bcrypt.hash(password , 10);

    const user = await userModel.create({
        fullname , 
        email , 
        password: hashedPassword 
    });

    const token = jwt.sign({
        id: user._id ,
    }, "sV8PBBfv6KGW2ej9oLSZA8");
    res.cookie("token" , token) ;

    res.status(201).json({
        message: "User Registered sucessfully" ,
        user :{
            _id : user._id ,
            email : user.email ,
            fullname : user.fullname 
        }
    });

}

async function loginUser(req,res) {

}

module.exports = {
    registerUser , 
    loginUser , 
    
}