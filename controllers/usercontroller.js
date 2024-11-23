const Home =require('../models/home')

exports.gethome = (req,res,next)=>{
  let homes= Home.fetchAll();
  
  res.render('welcome',{homes:homes})};