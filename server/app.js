const express= require('express');
const app= express();
const mongoose = require('mongoose');
const path = require('path');
const search = require('./routes/search')
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))

const db = mongoose.createConnection('mongodb://127.0.0.1/wordsDB',(err,database)=>{
  if(err){
    console.log("Not Able to connect to Database");
  }else {
    console.log("connection to database was sucessful");
  }
})

search(app)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(3000, ()=> console.log('listening at 3000'))
