var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
      var campgrounds = [
         {name: "Salmon Creek", image:"https://upload.wikimedia.org/wikipedia/commons/6/67/Suttle_Lake%2C_South_Shore_Campground%2C_USFS.jpg"}
         ]
      res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function (){
   console.log("Yelp Camp Server Running...") 
});