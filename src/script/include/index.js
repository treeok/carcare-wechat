/**
 * Created by claire on 2015/6/25.
 */
define(['widget/utils'], function (Utils) {
    var _index = {
        init: function () {
            this.getInfo();
        },
        getInfo: function () {
            Utils.ajaxJson(base + 'award/homeMessage', {userid: userId}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){
                    var d = data.responseObject;
                    $('.giant-content').text(d.total_earning);
                    $('.giant-bottom>a>span').text('最近收益 0')
                }

            });

            Utils.ajaxJson(base + '', {userid: userId}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){
                    var d = data.responseObject;
                    $('.giant-content').text(d.total_earning);
                    $('.giant-bottom>a>span').text('最近收益 0')
                }

            });

        }
    };

    return _index;
});