const express = require('express');
const app = express();
const commodityRoutes = express.Router();

// Require commodity model in our routes module
let commodity = require('../models/commodity');


// Defined get data(index or listing) route
commodityRoutes.route('/').get(function (req, res) {
    commodity.find(function (err,data){
    if(err){
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});






module.exports = commodityRoutes;