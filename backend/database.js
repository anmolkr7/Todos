require("dotenv").config();
const mongoose=require("mongoose")
const uri = process.env.MONGOURI; // Load from .env
mongoose.connect(uri);
module.exports = mongoose;