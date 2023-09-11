const express=require("express");

const routes = express.Router();

routes.get("/",(req,res)=>{
    res.render("index");
});

routes.get("/second",(req,res)=>{
    res.send("that");
});

module.exports=routes;