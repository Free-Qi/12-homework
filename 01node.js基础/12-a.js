/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');


//open
/*
* 打开文件
* 第一个参数是文件路径
* 第二个参数是打开方式 : r,r+,rs,rs+,w,wx,w+,a,ax,a+,ax+
// *
* 第四个参数是一个回调函数
* */
// fs.open('1.txt','a+',0777,function (err) {
//    if (err){
//        return console.error(err);
//    }
//    console.log('打开成功');
//
// });



//时间戳 :第一个参数是文件路径;第二个参数是文件上次被修改时间;第三个参数是文件最后一次被访问时间;第四个参数是回调参数,会传出一个异常信息;
// fs.utimes('./1.txt',new Date(),new Date(),function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log('时间'+new Date());
// });



// 1.fs.watchFile(filename, [options], listener);
// 对文件进行监视，并且在监视到文件被修改时执行处理
// /**
//  * filename, 完整路径及文件名；
//  * [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
//  * listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
// // fs.watchFile()
//上面的没看懂!!!网上查的


// fs.link
// 看答案了,但是没看懂!
//感觉自己的自学能力太差了!
