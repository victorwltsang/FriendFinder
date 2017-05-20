// declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
// you aren't actually using the path module in this file so there's no need to require it
// var path = require('path');

//initiate express app
var app = express();
var PORT = process.env.PORT || 3000;

// by setting the extended option to `true`, you can treat rich objects and arrays just like any other property on the request body
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT,function(){
  console.log("Listening on PORT %s",PORT);
});
