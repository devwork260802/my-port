const express = require('express');

const app=express();
const port=9000;

app.set("/a",(req,res)=>{
    res.render("index");
});

app.listen(9000,()=>{
    console.log(`Starting Server on Port ${port}`);
});