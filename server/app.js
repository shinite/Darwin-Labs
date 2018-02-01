const express= require('express');
const app= express();
const mongoose = require('mongoose');
const path = require('path');
const search = require('./routes/search')
var cors = require('cors');
const port = process.env.PORT || 3000;
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


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

search(app,db)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, ()=> console.log('server is up!'))
