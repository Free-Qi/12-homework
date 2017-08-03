/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var rouder = express.Router();
rouder.get('/',function (req,res) {
   res.render('shoppingCar',{title:'购物车'})
});
module.exports=rouder;