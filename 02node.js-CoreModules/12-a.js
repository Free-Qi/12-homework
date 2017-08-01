/**
 * Created by dllo on 17/8/1.
 */

var arr0 =[1,2,3,4,5,6,7,8,9];

//  1 . forEach
// arr0.forEach(function (a,b,c) {
//     console.log(a);//第一个参数a 是数组里的值
//     console.log(b);//第二个参数b 是数组里的下标
//     console.log(c);//第三个参数c 是数组
// });


//  2 . map
//用来操作数组里每一个值,可以加减,可以乘除,可以使之变成字符串,等等
//  var a = arr0.map(function (item) {
//    return (item+1)*item
// });
// console.log(a);


// //  3. filter
// // 通过条件表达式做比较,筛选和过滤出符合需求的新数组
//
// var a = arr0.filter(function (item) {
//     return 1<item&&item<4
// });
// console.log(a);//[2,3]


// 4 .some
//是只 有某些项满足条件,就会有个返回值,为true,但是如果都不满足,才会返回false
// var tf = arr0.some(function (a) {
//     return a<10 && a>5 || a>20
// });
// console.log(tf);


//every
//用关系运算符去进行判断,只要有一个不符合数组里的数就会返回false,只有全部都符合,才会返回true
// var tf = arr0.every(function (a) {
//    return a>=1;
// });
// console.log(tf);


// 6 . indexOf  判断数组里是否有符合参数的值,往往只判断第一个参数,第二个参数会被忽视!只有当第一个参数满足时候会返回参数所在的下标,如果不存在,则会返回-1
// console.log(arr0.indexOf(9,1));


// 7 . lastindexOf
//同indexOf  只是不同的是,从末尾开始查账号,而不是从头开始查找,返回值相同!
// console.log(arr0.lastIndexOf(1));


// 8 .reduce
// 第一个参数是数组第一个数,第二个参数是数组里最后一个数,第三个参数是数组长度,第四个参数是数组本身, 文档没看懂,我自己试出来的,不知道说的对不对!
// var x =arr0.reduce(function (a,b,c,d) {
//   return d
// });
// console.log(x);

//9 . reduceRight  reduceRight跟reduce相比，用法类似,实现上差异在于reduceRight是从数组的末尾开始实现  (实在看不懂了)

