const Home = require("../models/home");


exports.addedhome = (req, res, next) => {
  const {housename,price,location }= req.body;
  const newHome =new Home(housename,price,location);
  newHome.save();

  res.render("home", { title: "Home added" });
};

exports.addhome = (req, res, next) => {
  res.render("add-home", { title: "Add your home" });
};
