// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

var tip = "";


app.get("/", function(req, res) {

  res.render("home", {
    tip: tip
  });

});

app.post("/", function(req, res) {

  var billAmount = req.body.billAmount;
  var percentages = req.body.percentages;
  var numPeople = req.body.totalPeople;

  tip = (billAmount * percentages) / numPeople;
  tip = Math.round(tip * 100) / 100;
  tip = tip.toFixed(2);

  res.render("home", {tip: tip});

});

app.listen(process.env.PORT || 3000);
