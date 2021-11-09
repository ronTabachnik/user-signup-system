const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const ejs = require("ejs");
const mongoose = require("mongoose");

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();


const app = express();
app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/registeredUsers", {
  useNewUrlParser: true
});
const users = {
  name: String,
  email: String,
  ip: String,
  time: String,
  message: String
};

const User = mongoose.model("User", users);
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/users", function(req, res) {
  User.find(function(err, results) {
    if (!err) {
      res.send(results);
    } else {
      res.send(err);
    }
  });
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  var exactTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

  const newUser = new User({
    name: name,
    email: email,
    ip: ip,
    time: exactTime,
    message: message
  });
  newUser.save();
  res.sendFile(__dirname + "/success.html");
  // res.sendFile(__dirname + "/failure.html");
});




app.listen(process.env.PORT || 3000, function() {
  console.log("signup server is running on port 3000");
});

// API - ae314d664ae4cd9296b2adb3a0a020bd-us20
//list is - c77a6511c8
