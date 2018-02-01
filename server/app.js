const express= require('express');
const app= express();
const mongoose = require('mongoose');
const path = require('path');
const search = require('./routes/search')
const index = require('./routes/index')
var cors = require('cors');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.use(cors());
const publicPath = path.join(__dirname,'..', 'public')
app.use(express.static(publicPath))

const db = mongoose.createConnection('mongodb://127.0.0.1/wordsDB',(err,database)=>{
  if(err){
    console.log("Not Able to connect to Database");
  }else {
    console.log("connection to database was sucessful");
  }
})
//
//
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });



// index(app);


search(app,db)

//
// app.get('/getData',(req,res)=>{
//   console.log("in getDtae");
// })

app.get('*',(req,res)=>{
 res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port, ()=> console.log('server is up!'))
