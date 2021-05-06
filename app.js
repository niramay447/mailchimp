//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName,lastName,email);

})


app.get("/", function(req, res){
    res.sendfile(__dirname + "/Signup.html")
});
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});