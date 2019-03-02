var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function Reservation(name, email, phone, id) {
    this.name = name;
    this.email = email;
    this.phone=phone;
    this.id=id;
  }
// Routes
// =============================================================
//sends user to homepage index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  

  app.get("/basic.js", function(req, res) {
    res.sendFile(path.join(__dirname, "basic.js"));
  });
  
  var reservations =[
    {
      name:"Turd Ferguson",
      email: "burt.reynolds@gmail.com",
      phone: "555-555-5555",
      id: "55"
    }
  ];

  app.get("/api/reservation", function(req, res) {
    return res.json(reservations);
  });
  console.log(reservations);
  var waitList=[
    {
      name:"John Smith",
      email:"pocohantasfan123@juno.com",
      phone:"111-222-3333",
      id: "22"
    }
  ];
 

//create logic to handle reservation requests. POST requests take in JSON objects, check if any space left, add the JSON object to either reservation or waitlist array. respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation or is on the waitlist
app.post("/api/reservation", function(req, res) {
  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

  // Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
