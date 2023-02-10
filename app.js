const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const cors=require('cors')
app.use(cors());
app.use(cookieParser());
app.use(express.json());
require('./Database/connec')    //Database connected file
app.use(require('./pages/Pages'));  //Accessing router exported from Pages

dotenv.config({path:'./config.env'});   //Giving path of config.env file
const PORT = process.env.PORT;   //Accessing PORT from env file

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})