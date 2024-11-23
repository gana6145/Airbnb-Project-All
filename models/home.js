const fs =require('fs');
const path=require('path');
const rootDir =require('../util/util');





const homes = [];
module.exports = class Home {
  constructor(housename,price,location) {
    this.housename = housename;
    this.price=price;
    this.location=location;
    
  }
  save() {
    homes.push(this);
    const homefile=path.join(rootDir,'data','homes.json');
    fs.writeFile(homefile,JSON.stringify(homes),error=>{
      if(error){
        console.log(error)
      }

    })
  }
  static fetchAll() {
    return homes;
  }
};

exports.homes = homes;
