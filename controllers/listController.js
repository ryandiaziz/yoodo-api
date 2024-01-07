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
}

module.exports = ListController;