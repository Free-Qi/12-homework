/**
 * Created by dllo on 17/8/1.
 */
var url = require('url');

//定义 url
var baiduurl = 'http://www.baidu.com/1/img/1.jpg?width=200&height=200#host';
// 1 . 解析url
var urljson =url.parse(baiduurl);
// console.log(urljson);

var urlObj = {
     protocol:'http:',
     host:'www.baidu.com',
     port:8080,
     pathname:'/2/text/1.txt',
     search:'?name=zhangsan&age=20'
};
// 2 .格式化url对象
var urlstr = url.format(urlObj);
console.log(urlstr);