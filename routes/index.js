const routes = require("express").Router();
const todosRoutes = require("./todosRoutes");
const listRoutes = require("./listRoutes");

routes.get("/",(req,res)=>{
    res.json({
        message:"welcome to yoodo API"
    })
})

routes.use("/todos",todosRoutes);
routes.use("/list",listRoutes);

module.exports = routes;