const Jimp = require("jimp");
const Scraper = require ('images-scraper')
  , google = new Scraper.Google();
const searchWordSchema = require('../model/searchWordSchema')
var mongoose=require("mongoose");


module.exports = function(app,db) {
  const saveinDb = function(req,res,next){

    console.log("in savein DB");	
    var searchInput = new searchWordSchema({
      word: req.body.input,
    })

    db.collection("searchWord").find({word: req.body.input}).toArray(function(err, result) {
        if (err) throw err;
        if(result.length == 0){
            db.collection("searchWord").insert(searchInput, {upsert:true})
        }
    })
    // db.collection().insert(searchInput)
    next();
  }


  app.post('/search',saveinDb, function (req, res) {
    var result = false;
    console.log("in post search");
    const input = req.body.input;
    google.list({
        keyword: input,
        num: 15,
        detail: true,
    })
    .then(function (res) {
        console.log('first 10 results from google', res);
        res.map((data,index)=>{
          const url = data.url;
          const extention = data.url
          const foldername=input
          console.log(url,"urlllllll");
          Jimp.read(url, function (err, image) {
          image.resize(250, 250)
             .greyscale()                 // set greyscale
             .write("../public/images/"+foldername+"/"+foldername+index+'.jpeg'); // save
              });
        })
          }).catch(function(err) {
              console.log('err', err);
          });
    })

        app.get('/getData',(req,res)=>{
        db.collection('searchWord').find({}).toArray(function(err, result) {
          if (err) throw err;
          res.json(result)
      })
      })


}
