const Jimp = require("jimp");
const Scraper = require ('images-scraper')
  , google = new Scraper.Google();
const searchWordSchema = require('../model/searchWordSchema')
var mongoose=require("mongoose");


module.exports = function(app) {
  const saveinDb = function(req,res,next){

    console.log("in savein DB");
    var searchInput = new searchWordSchema({
      word: req.body.input
    })
    console.log(searchInput);
    searchInput.save(function(err){
      if(err)
      console.log(err);
      console.log('input word saved!');
    })
    next();
  }


  app.post('/search',saveinDb, function (req, res) {
    var result = false;
    console.log("in post search");
    const input = req.body.input;
    google.list({
        keyword: input,
        num: 2,
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
             .write("images/"+foldername+"/"+foldername+index+'.jpeg'); // save
              });
        })
          }).catch(function(err) {
              console.log('err', err);
          });
        })

}
