const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const cors = require ('cors');
const router = require('./controller/userController');

const app = express();
app.use(cors());

app.use(bodyparser.json());
dotenv.config();
const port = process.env.PORT || 5000;
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl).then(()=>{
    console.log ("Database connected successfuly");
    app.listen(port,()=>{
        console.log("Server running at port "+port);
    });
}).catch((error)=>console.log(error));

app.use('/api/client',router);