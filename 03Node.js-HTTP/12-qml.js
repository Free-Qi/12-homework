/**
 * Created by dllo on 17/8/2.
 */

/*
*
* 第一步先做一个http服务器
*
*
*
* */



var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


fs.readFile('./myimg.jpeg','binary',function (err,data) {

});


var server = http.createServer(function (request,response) {

    var urlobj = url.parse(request.url);
    var pathname = urlobj.pathname;
    if(pathname === '/image/myimg.jpeg'){
        response.statusCode = 200;
        var a = path.join(__dirname,pathname);
        fs.readFile(a,'binary',function(err,data) {
            response.end(data,'binary');

        })
    }else {
        response.statusCode = 404;
        response.end('图片没找到');
    }

});
server.listen(3000,function () {
   console.log('已经被监听');
});
