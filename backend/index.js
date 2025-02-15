require("dotenv").config();
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./database');
const app = express();
const cors=require("cors")
const PORT = 3000;
app.use(express.json());
app.use(cors())
/*
body{
title:string
description:string
}
*/
app.post('/todos', async(req, res) => {
    const createpayload=req.body;
    const parsedpayload=createTodo.safeParse(createpayload);
    if(!parsedpayload.success)
    {
        res.status(411).json({
            message:"You sent the wrong inputs"
        });
        return;
    }
    //put it in mongodb
    const newTodo=await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json(newTodo)
});

app.get('/todos',async(req,res)=>{
    const todos=await todo.find();
    res.json(
       { todos}
    )
})

app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parsedupdatepayload=updateTodo.safeParse(updatePayload);
    if(!parsedupdatepayload.success)
    {
        res.status(411).json({
            message:"Wrong input format"
        })
        return;
    }
    const result=await todo.updateOne({
        _id:req.body.id
    },{
        $set:{completed:true}
    })
    if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "Todo not found or already completed" });
    }
    res.json({
        message:"Todo marked as completed"
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});