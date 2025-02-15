const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const PORT = 3000;
app.use(express.json());

/*
body{
title:string
description:string
}
*/
app.post('/todos', (req, res) => {
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
});

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const updatePayload=req.body;
    const parsedupdatepayload=updateTodo.safeParse(updatePayload);
    if(!parsedupdatepayload.success)
    {
        res.status(411).json({
            message:"Wrong input format"
        })
        return;
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});