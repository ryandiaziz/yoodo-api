const listRoutes = require("express").Router();
const {ListController} = require("../controllers")

listRoutes.get("/",ListController.getAllList);
listRoutes.post("/",ListController.createList);

module.exports = listRoutes;