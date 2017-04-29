// declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initiate express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT,function(){
  console.log("Listening on PORT%s",PORT);
});
