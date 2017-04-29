var path = require("path");
var friendData = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req,res){
    res.json(friendData);
  });

  app.post("/api/friends", function(req,res){

    var userName = req.body.name;
    var userPhoto = req.body.photo;
    var userScore = req.body["scores[]"];

    var sumUserScore = userScore.reduce(function(a,b){
      return parseInt(a) + parseInt(b);
    });

    var difference = [];
    for(var i = 0; i < friendData.length; i++){
      difference.push(Math.abs(friendData[i].sumScores) - sumUserScore );
    }
console.log(difference);
  });
};
