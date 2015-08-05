/**
 * Created by claire on 2015/6/25.
 */
define(['widget/utils'], function (Utils) {
    var _index = {
        init: function () {
            this.getInfo();
        },
        getInfo: function () {
            Utils.ajaxJson(base + 'award/getRewardNumber', {userid: userId}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){
                    $('.giant-content').text(data.rewardNumber);
                }
            });

            Utils.ajaxJson(base + 'award/getLatestIncome', {userid: userId}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){
                    $('.giant-bottom>a>span').text('最近收益 +'+data.info[0].SCORE)
                }
            });

            Utils.ajaxJson(base + 'award/getReward', {userid: userId}, function (data) {
                data = JSON.parse(data);
                if(data.flag == 1){

                }
            });

        }
    };

    return _index;
});