require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();
const routes = require("./routes");
const client = require("./database/connection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",routes);

app.get("/",(req,res)=>{
    res.json({
        message:"welcome to yoodo API"
    })
})

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})

client.connect(err => {
    if (!err) {
        console.log('Database connect')
    } else {
        console.log(err.message)
    }
})
