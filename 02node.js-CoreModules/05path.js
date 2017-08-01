/**
 * Created by dllo on 17/8/1.
 */
var path = require('path');

// 1.join 路径拼接

// 2.resolve 从右向左拼接,生成绝对路径

/*
* 当最终路径为绝对路径时,拼接终止.
*
*
* */



// var fullpath = path.join(__dirname,'B','a.jpg');
// console.log(fullpath);

var fullpath = path.resolve('./a','./b','./c');
console.log(fullpath);