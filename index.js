const express = require("express");

const app = express();
const port = 9000;

app.use("/",(req,res)=>{
    res.json({
        message:"Done",
    });
});

app.listen(port, () => {
    console.log(`Starting Server on Port ${port}`);
});