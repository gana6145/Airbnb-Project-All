
const homes = [];

exports.addedhome = (req, res, next) => {
  homes.push(req.body);
  res.render("home", { title: "Home added" });
};

exports.addhome = (req, res, next) => {
  res.render("add-home", { title: "Add your home" });
};

exports.homes = homes;
