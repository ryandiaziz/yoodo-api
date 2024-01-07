const todosRoutes = require("express").Router();
const {TodosController} = require("../controllers");

todosRoutes.get("/",TodosController.getAllTodos);

module.exports = todosRoutes;