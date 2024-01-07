const listRoutes = require("express").Router();

listRoutes.get("/",(req,res)=>{
    res.json({
        msg:"Bisa masuk routes list"
    })
})

module.exports = listRoutes;