var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function reservation(name, email, phone, id) {
    this.name = name;
    this.email = email;
    this.phone=phone;
    this.id=id;
  }

// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  

  var reservationsArray =[];
  var waitList=[];

  function addRes(); {
      new reservation($("#reserve_name").val(),$("#reserve_email").val(), $("#reserve_phone").val(), $("#reserve_uniqueID").val());
      if(reservationsArray.length < 5){
          reservationsArray.push(reservation);
      }
      else {
          waitList.push(reservation);
      }
    
  }