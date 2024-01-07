const listRoutes = require("express").Router();
const {ListController} = require("../controllers")

listRoutes.get("/",ListController.getAllList);

module.exports = listRoutes;