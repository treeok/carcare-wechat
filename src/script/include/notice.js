/**
 * Created by NCGZ-DZ- on 2015/8/5.
 */
define(['widget/utils'], function (Utils) {
    var _notice = {
        init: function () {
            this.switchBtn();
        },
        switchBtn: function () {
            $('.switch').each(function(){
                $(this).click(function(){
                    $(this).toggleClass('active');
                });
            });

        }
    };

    return _notice;
});