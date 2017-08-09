/**
 * Created by dllo on 17/8/8.
 */
var req = require('request');
var cheerio = require('cheerio');
var download  =require('./download');

var url = 'http://www.fruitday.com/';
req(url,function (error,res,body) {
    var $ = cheerio.load(body);
    var arr = [];
    


    $("body>div:nth-child(7) .good-list .pro_list .s-img>a>img").each(function (index,value) {
        arr.push($(value).attr('data-original'))
    });
    for(var i=0;i<arr.length;i++){
      var url  = arr[i];
        download(url,'fruitimage','img'+i+'.jpg')
    }

    
});