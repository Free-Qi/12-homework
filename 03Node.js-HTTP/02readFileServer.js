/**
 * Created by dllo on 17/8/2.
 */

/*通过服务器编写一个服务,读取文件内容

 *
 * 1.先创建服务
 * 2.创建需要被访问的文件
 * 3.读取文件
 * 4.获取url,根据url的pathname,进行读取文件
 * 5. 引入url模块,进行request.url的解析
 * 6. 判断路径是否正确 正确返回200,错误返回404
 * 7. 拼接绝对路径,__dirname  和 pathname
 * 8. 读取,response.end()
 * */


var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');


var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url);
    var pathname = urlObj.pathname;
    if (pathname === '/http.txt') {
        response.statusCode = 200;
        var a = path.join(__dirname, pathname);
        fs.readFile(a, 'utf-8', function (err, data) {
            response.end(data);
        });

    } else {
        response.statusCode = 404;
        response.end('文件未找到')
    }


});
server.listen(8080, function () {
    // 监听完毕时回去执行的函数
    console.log('服务运行在 http://localhost:8080')
});







