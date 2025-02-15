require("dotenv").config();
const mongoose=require("mongoose");
const { string } = require("zod");
const uri = process.env.MONGOURI; // Load from .env
mongoose.connect(uri);

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoschema)
module.exports = {
    todo
}