/**
 * Created by dllo on 17/8/8.
 */
var req = require('request');
var chr = require('cheerio');
var download = require('./download');
var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
};
var modimgarr = [];//第一组四个图片
var modtextarr = [];//第一组右侧文字

req.get(options, function (error, response, body) {
    var $ = chr.load(body);
    //爬mod图片
    $('.mod .albums .pic>a>img').each(function (index, value) {

        modimgarr.push($(value).attr('data-origin'))
    });
//    把modimg存入本地
    for (var i = 0; i < modimgarr.length; i++) {
        var modurl = modimgarr[i];
        download(modurl, 'modimg', 'img' + i + '.jpg')
    }
//    爬mod右侧文字
    $('.mod .notes>ul>li a').each(function (index, value) {
        modtextarr.push($(value).text());
    });


//    爬豆瓣时间图片和文字
    var timearr = [];// 爬豆瓣时间图片和文字数组
    $('#anony-time .time-list li a img').each(function (index, value) {
        var json1 = {
            src: $(value).attr('src'),
            alt: $(value).attr('alt')
        };
        timearr.push(json1)
    });
    for (var i = 0; i < timearr.length; i++) {
        var timeurl = timearr[i]['src'];
        download(timeurl, 'timeimg', 'img' + i + '.jpg')
    }

//电影
    var moviearr = [];//电影资源数组
    $('#anony-movie .movie-list .pic img').each(function (index, value) {
          var json2 = {
              src:$(value).attr('data-origin')
          };
       moviearr.push(json2);

        download(json2.src,'moveimg','mimg'+index+'.jpg')
    });
    $('#anony-movie .movie-list .title a').each(function (index, value) {
        moviearr[index].name = $(value).text()

    });
    $('#anony-movie .movie-list .rating i').each(function (index, value) {
        moviearr[index].fen = $(value).text()

    });

//    小组
    var grouparr = [];
    $('#anony-group .group-list ul li .pic a img').each(function (index,value) {
        var json3 = {
            src:$(value).attr('data-origin')
        };
        grouparr.push(json3);
    //    下载图片
        download(json3.src,'groupimg','groupimg'+index+'.jpg')
    });
    $('#anony-group .group-list ul li .info a').each(function (index,value) {
        grouparr[index].title = $(value).text()
    });


//    读书
    var readarr = [];
    $('#anony-book .book-list ul li .pic a img').each(function (index,value) {
        var json3 = {
            src:$(value).attr('data-origin')
        };
        readarr.push(json3);
        download(json3.src,'readimg','readimg'+index+'.jpg')
    });
    $('#anony-book .book-list ul li .title a').each(function (index,value){
        readarr[index].name = $(value).text()
    });
    $('#anony-book .book-list ul li .author').each(function (index,value) {
        readarr[index].author = $(value).text()
    });


//    音乐
    var musicarr = [];
    $('#anony-music .album-list ul li .pic a img').each(function (index,value) {
        var json4 = {
            src:$(value).attr('data-origin')
        };
        musicarr.push(json4);
        download(json4.src,'musicimg','music'+index+'.jpg')
    });
    $('#anony-music .album-list ul li .title a').each(function (index,value) {
       musicarr[index].name =$(value).text()
    });
    $('#anony-music .album-list ul li .artist a').each(function (index,value) {
       musicarr[index].username = $(value).text()
    });
    $('#anony-music .album-list ul li .rating i').each(function (index,value) {
        musicarr[index].fen = $(value).text
    });
  console.log(musicarr)



});