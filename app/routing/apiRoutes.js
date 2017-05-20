// var path = require("path");
var friendData = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    var userName = req.body.name;
    var userPhoto = req.body.photo;
    // this is a result of setting `extended` to `true` in the body parser url encoded options object
    var userScore = req.body.scores;

    // stoked you found a place to use reduce in this assignment! Just wanted to make sure you're aware that it optionally takes a second argument that serves as the initial value to operate on.
    var sumUserScore = userScore.reduce(function(a, b) {
      return parseInt(a) + parseInt(b);
    });

    // get an array of difference
    // since friendData is just an array and the point of this loop is to build the difference array, you could just use the `.map` method
    // And, keep in mind, since I'm using a one line fat arrow (=>) function, there's an implicit return happening
    var difference = friendData.map( friend => Math.abs(friend.sumScores - sumUserScore) )
    // var difference = [];
    // for (var i = 0; i < friendData.length; i++) {
    //   difference.push(Math.abs(friendData[i].sumScores - sumUserScore));
    // }

    // you could also just keep track of the minimum matching friend as you're looping through the friend data.
    // It prevents you from having to potentially do two more full loops through the data set which could be
    // significant for a large enough set of data.

    // get the index of the lowest difference
    var min = Math.min.apply(null, difference);
    var matchIndex = difference.indexOf(min);


    //add your profile to the db
    friendData.push({
      // if you feel like saving a couple key strokes, you can omit the quotes from object key definitions
      "name": userName,
      "photo": userPhoto,
      "scores": userScore,
      "sumScores": sumUserScore
    });

    // console.log(difference);
    // console.log(matchIndex);
    //console.log(friendData);
    return res.json(friendData[matchIndex]);

  });
};
