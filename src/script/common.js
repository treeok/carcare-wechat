/**
 * Created by claire on 2015/6/27.
 */
define(['widget/utils'], function (Utils) {
    var _common = {
        init: function () {
            this.getScript();
        },
        getScript: function () {
            var urlArray = document.URL.split('/'),
                docName = urlArray[urlArray.length - 1].split('.')[0];

            if (docName == 'index') {
                require(['include/index'], function (Index) {
                    Index.init();
                });
            } else if(docName == 'detail'){
                require(['include/detail'], function (Detail) {
                    Detail.init();
                });
            }else if(docName == 'exchange'){
                require(['include/exchange'], function (Exchange) {
                    Exchange.init();
                });
            }

        }

    };

    return _common;
});