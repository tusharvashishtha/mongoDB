const mongoose = require('mongoose');

const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://localhost/test");
        console.log("db Connected")
    }  
    catch (err){
        console.log(err)
    }
}

module.exports = dbConnect