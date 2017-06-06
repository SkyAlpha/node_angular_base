var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var fs = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../web'));

app.get('/', function (req, res) {
  res.redirect("/");
});

app.get("/jonatan", function(req, res){
  res.send("Jonatan");
});


app.listen(3000);
