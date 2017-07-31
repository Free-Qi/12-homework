/**
 * Created by dllo on 17/7/31.
 */
require('console');

//log 和 info 都代表输出信息
console.log("打印输出");
console.info("打印输出2");


//warn error 警告 错误
console.warn('警告');
console.error('错误');

//dir 用于打印对象
var obj = new Object();
obj.name = "哈哈";
obj.type = 1;
console.dir(obj);

//time 和 timeEnd
console.time('flag');
for (var i =0;i<100000;i++){

}
console.timeEnd('flag');

//栈信息trace
console.trace();

//断言assert : 中断代码执行,给出错误提示
console.assert(1===2,'1不等于2');
console.log(111111);

