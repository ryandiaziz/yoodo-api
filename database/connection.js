
const pkg = require("pg");
const { Pool } = pkg;

const pool = new Pool({
    // connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'admin',
    database: 'yoodo'
})

module.exports = pool;