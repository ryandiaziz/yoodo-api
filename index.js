require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({
        msg:"Berhasil"
    })
});

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})
