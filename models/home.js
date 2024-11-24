const fs = require("fs");
const path = require("path");
const rootDir = require("../util/util");
const homefile = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(housename, price, location) {
    this.housename = housename;
    this.price = price;
    this.location = location;
  }
  save(callback) {
    Home.fetchAll((homes) => {
      if (typeof callback !== 'function') {
        console.log('No callback function provided.');
        callback = () => {};  // Default to a no-op callback
      }
      homes.push(this);
      fs.writeFile(homefile, JSON.stringify(homes), callback);
    });
  }
  static fetchAll(callback) {
    fs.readFile(homefile, (err, data) => {
      if (err) {
        console.log(err);
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }
};
