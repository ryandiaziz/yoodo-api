const pool = require("../database/connection");
const {generateID} = require("../helper/generateData");

class ListModel{
    static async getAllList(){
        try {
            const result = await pool.query("SELECT * FROM list");
            return result.rows;
        } catch (error) {
            throw(error)
        }
    }

    static async createList(name){
        try {
            const id = generateID();

            const query = {
                text: 'INSERT INTO list(list_id, list_name) VALUES($1,$2) RETURNING *',
                values: [id, name]
            }

            const result = await pool.query(query);

            return result.rows;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = ListModel;