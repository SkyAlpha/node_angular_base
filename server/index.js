var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var fs = require("fs");
var http = require("http");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../web')); //set basepath to the web app.

app.get('/', function (req, res) {
  res.redirect("/"); //Angular handles the calls from here.
});


// Route that returns @return = [person].
app.get("/rest/people", function(req, res){

  var name = [ "Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"]; //Dummy list of names
  var surname = [ "Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"]; //Dummy list of surnames

  var list = []; //Creates the list of people.

  for(var i = 1; i < 10; i++) {
      var person = {}; //Creates the person JSON Object;
      person.id = i; //adds the id of the person.
      person.name = name[Math.floor((Math.random() * name.length))] + " " + surname[Math.floor((Math.random() * surname.length))]; //Randomizes to create a full name.
      person.disclosableInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
      "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
      "onsequat."; //Dummy info.

      list.push(person); //Add the person to the list of people.
  }

  res.send(list); //Send the list of people.
});


app.listen(8090); //listen on port 8090
