/**
 * Created by claire on 2015/8/4.
 */
define(['widget/utils'], function (Utils) {
    var _detail = {
        init: function () {
            this.pageInit();
        },
        pageInit: function () {
            Utils.ajaxJson(base+'award/PaymentDetails',{userid:userId,pageCode:1},function(data){
                data = JSON.parse(data);
                if(data.flag == 1){

                }


            });
        }
    };

    return _detail;
});