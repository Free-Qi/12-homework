/**
 * Created by dllo on 17/7/31.
 */
var  assert = require('assert');



//assert(参数1,参数2)
//参数1:判断项 ; 参数2 :如果判断不符,或显示出来的信息
// console.assert(2===3,'2不等于3');



//assert.deepEqual :不比较对象的 原型、连接符,运算符用 == ,类型可以不等,值要相等
//参数1 : 真实的值
//参数2 : 预料的值
//参数3 : 如果判断不符,会显示出来的信息
// assert.deepEqual({a:1},{a:'1'},"1不等于2");



//assert.deepStrictEqual :和assert.deepEqual基本相同,只是参数1和参数2的比较用 ===
// assert.deepStrictEqual({a:1},{a:'1'},"1不等于'1'");




// assert.strictEqual  用 === 去判断第一个参数,和第二个参数,第三个参数是不同时的语言信息
// assert.strictEqual(1,'1','1不等于1');


// assert.ok  和console.assert 用法基本相同,第一个参数是一个条件表达式,会返回一个tf值,,如果为false 则会返回参数2的语言信息
// assert.ok(1=='1',"1不等于1");




// assert.notStrictEqual
//第一个参数 和第二个参数中用  !==  来判断,如果返回值是false,则返回参数3的语言信息~~双重否定的意思
// assert.notStrictEqual(1,'1','不ok');




// assert.notEqual  于assert.notStrictEqual同理
//只不过参数1 和参数2 是用  != 作为判断,返回的布尔值如果是false  则返回第三个参数的语言信息!
// assert.notEqual(1,2,'也不ok');


// assert.ifError  判断括号后面的布尔值,,非零即为真
//如果是假,则没反应,如果是真的,则返回括号里面的值或表达式
// assert.ifError(12);
// assert.ifError(0);



// assert.fail
/*
* 第一个第二个参数做比较,如果第三个参数不存在,则用第四个参数取链接第一个第二个参数,也就是第四个参数是分隔符,如果第三个参数存在,则返回第三个参数
*
* */

// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2

// assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

// assert.fail('错误信息');
// 抛出 AssertionError: 错误信息

// assert.fail('a', 'b');
// 抛出 AssertionError: 'a' != 'b'

// assert.throws  :  没看懂!