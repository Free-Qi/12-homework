/**
 * Created by dllo on 17/8/3.
 */

/*
 * node.js系统http有哪些问题
 * * */

var http = require('http');
var server = http.createServer(function (request, response) {
    if (request.url === '/1') {
        response.end('1')
    } else if (request.url === '/2') {
        response.end('2')
    } else if (request === '/3') {
        response.end('3');
    } else {
        response.end('其他')
    }
    response.end('Hello,Node.js');
});
server.listen(8080);

//connect
//npm  包管理工具
//      1.npm init
//       初始化package.json文件

//      2.npm install  依赖/模块
//        下载项目所需的依赖/模块
//        本地会生成node_modules
//      3.package中包含dependencies(依赖)
//        只需要去执行 npm install即可

//      通过npm下载的依赖/模块
var connect = require('connect');

//connect 解决判断重叠问题.
//使代码更清晰,
// 弊端 : 需要考虑代码顺序!

var app = connect();
app.use('/1',function (request,response) {
   response.end('1');
});
app.use('/2',function (request,response) {
    response.end('2');
});
app.use('/3',function (request,response) {
    response.end('3');
});
app.use('/',function (request,response) {
    response.end('其他');
});
http.createServer(app).listen(8081);


// express
// npm install express --save   下载方法

var express = require('express');
var app1  =express();
//express这只一个get请求
app1.get('/1',function (req,res) {
    res.end('1')
});
//express这只一个post请求
app1.post('/2',function (req,res) {
    res.end('2')
});
//express这只一个任意请求
app1.all('/3',function (req,res) {
    res.end('3')
});
//express这只一个任意请求
app1.all('/',function (req,res) {
    res.end('其他')
});

//加载静态资源
/*
* ecpress设置静态文件目录,使其内部资源可以直接被访问
*
*
* */

app1.use(express.static('./img'));

app1.listen(8082,function () {
   console.log('服务器监听:http://localhost:8082')
});





