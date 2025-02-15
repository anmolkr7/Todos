const express = require('express');
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
    res.send('Hello World');
});

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})
app.listen(PORT, () => {
    console.log(`Server is running on port PORT`);
});