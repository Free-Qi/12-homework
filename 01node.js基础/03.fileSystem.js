/**
 * Created by dllo on 17/7/31.
 */
//文件系统
var fs =require('fs');


//读取文件 :
//参数1 : 路径;参数2:读取文件编码格式默认为二进制(Buffer);参数3:回调函数(包含两个参数err和data,其中data为读取内容的结果)
fs.readFile('1.txt','utf-8',function (err,data) {
    if(err){
        return;
    }
    console.log(data);
});




var opations = {
  //  flag:默认为w :覆盖,,,
  //   a为追加
  flag:"a"
};
//写入文件
//参数1 : 路径;参数2 : 写入内容;参数3 : 选项(flag,默认为w,a是追加)
fs.writeFile('1.txt','123456',opations,function (error) {
    console.log(error);
});




//追加文件

fs.appendFile('1.txt','天不错呦',function (error) {

});



//删除
// fs.unlink('1.txt');



//创建文件
// fs.link();
// fs.createWriteStream('1.txt');


//创建文件夹
// fs.mkdir('file1',0000);

//改  文件夹/文件
// fs.chmod('./file',0777);



//移除
fs.rmdir('./file');




