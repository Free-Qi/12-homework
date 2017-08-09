/**
 * Created by dllo on 17/8/8.
 */

var fs = require('fs');
var path =require('path');
var request = require('request');

//爬图片封装函数
//参数1:要下载内容的地址;参数2:要保存的文件;参数3:要保存的文件名
function download(url, directory, filename) {
    //根据当前目录生成文件夹
    var dir = path.join(__dirname, directory);
    //判断文件夹是否存在
    var isDir = fs.existsSync(dir);
    //不存在,创建
    if (!isDir) {
        fs.mkdir(dir);
    }
    // 生成保存文件路径
    var filePath = path.join(dir, filename);
    //下载并保存
    request(url).pipe(fs.createWriteStream(filePath));
}
module.exports = download;