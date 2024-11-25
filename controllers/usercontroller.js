const Home = require("../models/home");

exports.gethome = (req, res, next) => {
  Home.fetchAll(homes => {
    
    res.render("user/welcome", { homes: homes });
  });
};
exports.gethomes = (req, res, next) => {
  Home.fetchAll(homes => {
    
    res.render("user/homes", { homes: homes });
  });
};
exports.gethomedetail = (req, res, next) => {
  const homeid = req.params.homeid;
  console.log(homeid);
  
};
