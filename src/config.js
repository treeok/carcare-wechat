/**
 * Created by claire on 2015/6/25.
 */
var static_domain = 'http://localhost:63342/carcare-wechat/public';
var base = 'http://10.8.6.2:8080/CarcareAppService/';
var userId = '63';
require.config({
    shim: {
        'zepto.min': {
            exports: '$'
        }
    },
    baseUrl: static_domain+'/lib/',
    paths: {
        'zepto.min': 'zepto.min',
        'bootstrap.min': 'bootstrap.min',
        include: '../script/include',
        widget: '../script/widget',
        common: '../script'
    }
});
require(['zepto.min','common/common'], function ($,Common) {
    Common.init();
});
