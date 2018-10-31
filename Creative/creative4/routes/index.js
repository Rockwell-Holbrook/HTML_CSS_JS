var express = require('express');
var router = express.Router();

var myCharacters = [];

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

module.exports = router;
