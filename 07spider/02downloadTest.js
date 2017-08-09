/**
 * Created by dllo on 17/8/8.
 */
var download = require('./download');

var imgarr = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170368960&di=5d5e1b5230f3130694e99dae1e4d92f4&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121116%2F240501-12111623243360.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170368959&di=ee88d644e6ca38fca798024933c140d1&imgtype=0&src=http%3A%2F%2Fupload.northnews.cn%2F2014%2F0408%2F1396941241638.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170368959&di=b457f974e2b1818210b2baba01024725&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201610%2F21%2F20161021224442_EM42e.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170368959&di=25d8b40697d5687cfd8878ef06afdfe3&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2F77IgkF1S4HGcLE2w_bSbmg%3D%3D%2F7916503511198511931.jpg'
];

imgarr.forEach(function (value,index) {
   download(value,'imgs',index+'.jpg')
});
