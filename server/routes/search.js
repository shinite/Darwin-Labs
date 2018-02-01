
const Jimp = require("jimp");
const Scraper = require ('images-scraper')
  , google = new Scraper.Google();
const searchWordSchema = require('../model/searchWordSchema')
var mongoose=require("mongoose");
const path = require('path');

module.exports = function(app,db) {

  app.post('/search', function (req, res) {
    var result = false;
    console.log("in post search");
    const input = req.body.input;
    google.list({
        keyword: input,
        num: 15,
        detail: true,
    })
    .then(function (res) {
        res.map((data,index)=>{
          const url = data.url;
          const extension = url.split('.')[url.split('.').length-1]
          const foldername=input
          console.log(url,"urrrllll");

          console.log("in urll function");
          Jimp.read(url, function (err, image) {
            console.log(__dirname,"dirrectory name");
          image.resize(250, 250)
             .greyscale()                 // set greyscale
             .write(path.join(__dirname,"../../public/images/"+foldername+"/"+foldername+index+".jpg")); // save
             console.log("in writeee methodd");
              });

        })
          }).catch(function(err) {

              res.send('There was some error')
          }).then(
        		function(){
            var searchInput = new searchWordSchema({
              word: req.body.input,
            })

            db.collection("searchWord").find({word: req.body.input}).toArray(function(err, result) {
                if (err) throw err;
                if(result.length == 0){
                    db.collection("searchWord").insert(searchInput, {upsert:true})
                }
            })
          }).then(function(){
            res.send('You can now view the Images')
          })
    })

    app.get('/getData',(req,res)=>{
      console.log("in getData");
        db.collection('searchWord').find({}).toArray(function(err, result) {
          if (err) throw err;
          res.json(result)
      })
      })


}
