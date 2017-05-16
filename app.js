var express = require("express"),
app = express(),
strava = require("strava-v3");

// var STRAVA_ACCESS_TOKEN = "adaa94e12ea9e8d3c85ea3cd6932a7ff833b3f30";
// var STRAVA_CLIENT_ID = "16175";
// var STRAVA_CLIENT_SECRET = "3d2f97aa68d9930ee1f9a16c09b6f749b9dd53f7";
// var STRAVA_REDIRECT_URI = "getpostman.com";

var strava = require('strava-v3');
strava.activities.get({id:738632029},function(err,payload) {
  if(!err) {
    console.log(payload);
  }
  else {
    console.log(err);
  }
});



app.listen(3000,function(){console.log("Strava Testing");});
