const express = require('express');

const app=express();
const port=9000;

app.set("/",(req,res)=>{
    res.render("index.html");
});

app.listen(9000,()=>{
    console.log(`Starting Server on Port ${port}`);
});