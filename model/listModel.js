const pool = require("../database/connection");

class ListModel{
    static async getAllList(){
        try {
            const result = await pool.query("SELECT * FROM list");
            return result.rows;
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = ListModel;