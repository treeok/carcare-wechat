/**
 * Created by NCGZ-DZ- on 2015/8/5.
 */
define(['widget/utils'], function (Utils) {
    var _trip = {
        init: function () {
            this.pageInit();
        },
        pageInit: function () {
            Utils.ajaxJson(base + 'award/getWeiScore', {userid: userId,days: 7}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){

                }
            });


        }
    };

    return _trip;
});