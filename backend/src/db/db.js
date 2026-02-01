const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:" , err);
    });
};


module.exports = connectDB ;

