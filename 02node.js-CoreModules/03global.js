/**
 * Created by dllo on 17/8/1.
 */


//不需要引入,直接引用
// 1. __dirname  完整文件夹目录(用的会多一些)
// console.log(__dirname);

// 2. __filename;  完整当前文件路径
// console.log(__filename);

// 3. exports  module.exports 导出模块

// 4. requier 引入模块

// 5.console  控制台

// 6.global  全局变量  注意 : 尽量不要在global中存放内容


// 7.module
module.exports.name = '哈哈哈';
// console.log();

// 对比 require 和 exports 以及 module.exports
// 1.核心模块在引用的时候不需要加路径,直接用使用模块名
// 2.自行编写的模块,需要添加路径
// 3.require 引入模块,引入的为模块中exports部分内容
// 4.exports 导出,导出的是对象



//exprots 与 module.exports 的区别
// 1.默认情况下,exports = module.exports
// 2.require对应的是 module.exports
// 3.当给exports或module.exports赋对象时,
//     1>如果给exports赋值,没有给module.exports赋值->导出模块在被引入时为空
//     2>如果给module.exports赋值,没给exports,再调用exports属性时,无效!

var A = require('./A');
console.log(A);

