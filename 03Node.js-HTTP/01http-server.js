/**
 * Created by dllo on 17/8/2.
 */

var http  = require('http');
var url = require('url');

//resquest  请求
//response  相应
var server = http.createServer(function (resquest,response) {


    // 1.请求  由客户端设置

    //请求行
    console.log('请求方法:', resquest.method);

    //请求头
    console.log('请求头',resquest.headers);

    //请求体
    console.log('请求体'+resquest.body);

    // console.log('请求地址'+resquest.url);
    var objurl = url.parse(resquest.url);
    // console.log(objurl);





    // 2. 相应  由服务器设置

    // 1>状态行  一个状态码对应一个状态描述.
    response.statusCode = 304;
    // 2>设置响应头  调用一次只能设置一个头信息!
    response.setHeader('Data','Wed, 02 Aug 2017 03:59:05 GMT');

    // 2>设置状态码以及相应头,响应头为json对象,键值对为多个
    //   需要符合响应头列表
    var obj = {
      'Content-Language':'zh'
    };

    response.writeHead(404,obj);
    //4>设置相应体  真正展示在页面上的东西
    response.end('Hello,Node.Js');
});
server.listen(8080);
