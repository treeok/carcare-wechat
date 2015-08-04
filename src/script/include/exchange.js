/**
 * Created by NCGZ-DZ- on 2015/8/4.
 */
define(['widget/utils'], function (Utils) {
    var _exchange = {
        init: function () {
            this.confirmBtn();
        },
        confirmBtn: function () {
            var remainEarns = $('#remain').text();
            if(remainEarns < 10000){
                $('.detail-btn').append('<button type="button" class="btn btn-default btn-lg btn-block" disabled>挣点不足</button>');
            }else{
                $('.detail-btn').append('<button type="button" class="btn btn-primary btn-lg btn-block">确认兑换</button>');
            }


        }
    };

    return _exchange;
});