const {TodosModel} = require("../model");

class TodosController{
    static async getAllTodos(req,res){
        try {
            const result = await TodosModel.getAllTodos();
            res.json(result);
        } catch (error) {
            res.json({
                status:false,
                msg:error.message
            })
        }

    }
}

module.exports = TodosController;