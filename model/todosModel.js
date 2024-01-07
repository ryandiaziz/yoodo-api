const pool = require("../database/connection");

class TodosModel{
    static async getAllTodos(){
        const result = await pool.query("SELECT * FROM list");
        return result.rows;
    }
}

module.exports = TodosModel;