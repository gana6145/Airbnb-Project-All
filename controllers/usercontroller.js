const Home = require("../models/home");

exports.gethome = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("user/welcome", { homes: homes });
  });
};
exports.gethomes = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("user/homes", { homes: homes });
  });
  exports.addfavourite=(req,res,next) =>{
    Home.fetchAll((homes) => {
      res.render("user/favourite", { home: homes });
    });
  }
};
exports.gethomedetail = (req, res, next) => {
  const homeid = req.params.homeid;
  
  Home.findById(homeid,home=>{
    console.log(homeid,home);
    if(!home){
      console.log("home not found")
      res.render("/");
    }
    res.render("user/homesdetails" ,{ home:home} );

  })

  
};
