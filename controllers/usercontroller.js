const Home = require("../models/home");

exports.gethome = (req, res, next) => {
  Home.fetchAll(homes => {
    
    res.render("welcome", { homes: homes });
  });
};
