const express = require('express');
const routes = require('./routes/main')

const app=express();
const port=9000;

app.use('',routes);

// app.use("/",(req,res)=>{
//     res.json({message: "Hello"});
// });

app.set("views","views");

app.listen(9000,()=>{
    console.log(`Starting Server on Port ${port}`);
});