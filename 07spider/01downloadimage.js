/**
 * Created by dllo on 17/8/8.
 */

//图片地址


var request = require('request');
var fs = require('fs');
var path = require('path');

// 2.图片保存路径
var imagePath = path.join(__dirname, 'images', 'img1.jpg');
// 1. 图片地址
var imgurl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502165973690&di=5dbf403acaabb26a5f87bff4721527da&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Fwyzs%2Fzdtj%2F201005%2FW020100501852488907237.jpg";


// 3. 下载,并保存文件
/*
 * 步骤1:下载
 * 步骤2:导流,以流的形式传递刚刚下载的数据
 * 步骤3:fs根据传递过来的流以及图片路径,创建文件
 *
 * */
request(imgurl).pipe(fs.createWriteStream(imagePath));


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


var imgUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502165973689&di=6774004d172c425b8d07033e0ebb26e0&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160520%2Fsmall59462214637291111463729112.jpg";

download(imgUrl, 'img', 'img2.jpg');


