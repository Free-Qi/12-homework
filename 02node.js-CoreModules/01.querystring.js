/**
 * Created by dllo on 17/8/1.
 */

var querystring = require('querystring');

//查询字符串
//http://www.baidu.com/1/img?width=100&height=200
var str = 'width=100&height=200';
// 1 . parse将字符串解析成 json 对象
//    参数1:要解析的字符串;
//    参数2:键值对间链接方式  例 : & key=value&keyvalue
//    参数3:键值间链接方式    例 : = key=value
//    参数4:选项  解析函数,最大解析条数

var obj = querystring.parse(str);
console.dir(obj);

//2. stringify   将 json 对象字符串化
//    参数1:需要字符串化的对象;
//    参数2:键值对间链接方式  例 : & key=value&keyvalue
//    参数3:键值间链接方式    例 : = key=value
//    参数4:选项  字符串化函数

var json = {
    name:'啊狗',
    age:'18',
    sex:'男'
};
var strquery = querystring.stringify(json);
console.log(strquery);

