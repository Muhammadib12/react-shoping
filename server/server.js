const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/Routes.js');



const app = express();

app.use(bodyParser.json());
app.use('/',router);
const connectionLink = 'mongodb://localhost/react-shop-card';
mongoose.connect(connectionLink,{
    
}).then(res => console.log("Connect"));




app.listen(5001,()=>{
    console.log("Runnig")
})