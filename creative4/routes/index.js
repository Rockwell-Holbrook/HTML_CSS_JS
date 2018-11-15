var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var History = mongoose.model('SearchHistory');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('harryPotter.html', { root:  'public' });
  
});

router.get('/character/:characterName', function(req,res) {
    var myurl = "https://www.potterapi.com/v1/characters?name=" + req.params.characterName + "&key=$2a$10$qHP0eb3Zdr1ZaeDMOvJwH.LgkWvNh4x53UrQz0Wy/RTlALo5grtNO";
    console.log(myurl);
  
    const https = require('https');

    https.get(myurl, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data))
      res.status(200).json(JSON.parse(data));
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/getHistory', function(req, res, next) {
  History.find(function(err, history){
    if(err){ return next(err); }
    res.json(history);
  });
});

router.post('/getHistory', function(req, res, next) {
    console.log("in getHistory POST route"); //[1]
    console.log(req.body); //[2]
    
    var newHistory = new History(req.body); //[3]
    console.log(newHistory); //[3]
    
    newHistory.save(function(err, post) { //[4]
        if (err) return console.error(err);
        console.log(post);
         res.sendStatus(200);
     });
});

router.post('/delete', function(req, res, next) { 
    console.log("In the DELETE route?")
    
    History.remove({}, function(err) { console.log('collection removed') });

    res.sendStatus(200);
});

module.exports = router;
