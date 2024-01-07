const {ListModel} = require("../model");

class ListController{
    static async getAllList(req,res){
        try {
            const result = await ListModel.getAllList();
            res.json({
                status:true,
                data:result
            })
        } catch (error) {
            res.json({
                status:false,
                message:error.message
            })
        }
    }

    static async createList(req,res){
        try {
            const {name} = req.body;
            const result = await ListModel.createList(name);
            res.json({
                status:true,
                data:result
            })
        } catch (error) {
            res.json({
                status:false,
                message:error.message
            })
        }
    }
}

module.exports = ListController;