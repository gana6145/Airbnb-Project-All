const {homes} =require('../controllers/hostcontroller')

exports.gethome = (req,res,next)=>{
  res.render('welcome',{homes:homes})};