/**
 * Created by claire on 2015/7/17.
 */
define(function(){
    // utilities
    var noop = function() {}; // 简单的无操作功能
    var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // 卸载功能的执行
    // 检查浏览器的功能
    var browser = {
        addEventListener: !!window.addEventListener,
        touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: (function(temp) {
            var props = ['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
            for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
            return false;
        })(document.createElement('swipe'))
    };




    var _sweep = function(container,options){
        // 如果没有根元素退出
        if (!container) return;
        var element = container.children[0];
        var slides, slidePos, width;
        options = options || {};
        var index = parseInt(options.startSlide, 10) || 0;
        var speed = options.speed || 300;
        options.continuous = options.continuous ? options.continuous : true;


        function setup() {

            // 缓存的幻灯片
            slides = element.children;

            //创建一个数组来存储每个幻灯片的当前位置
            slidePos = new Array(slides.length);

            // 确定每个幻灯片的宽度
            width = container.getBoundingClientRect().width || container.offsetWidth;

            element.style.width = (slides.length * width) + 'px';

            // 栈元素
            var pos = slides.length;
            while(pos--) {

                var slide = slides[pos];

                slide.style.width = width + 'px';
                slide.setAttribute('data-index', pos);

                if (browser.transitions) {
                    slide.style.left = (pos * -width) + 'px';
                    move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
                }

            }

            if (!browser.transitions) element.style.left = (index * -width) + 'px';

            container.style.visibility = 'visible';

        }

        function prev() {

            if (index) slide(index-1);
            else if (options.continuous) slide(slides.length-1);

        }

        function next() {

            if (index < slides.length - 1) slide(index+1);
            else if (options.continuous) slide(0);

        }

        function slide(to, slideSpeed) {

            // 如果已经滑不要求
            if (index == to) return;

            if (browser.transitions) {

                var diff = Math.abs(index-to) - 1;
                var direction = Math.abs(index-to) / (index-to); // 1:right -1:left

                while (diff--) move((to > index ? to : index) - diff - 1, width * direction, 0);

                move(index, width * direction, slideSpeed || speed);
                move(to, 0, slideSpeed || speed);

            } else {

                animate(index * -width, to * -width, slideSpeed || speed);

            }

            index = to;

            offloadFn(options.callback && options.callback(index, slides[index]));

        }

        function move(index, dist, speed) {

            translate(index, dist, speed);
            slidePos[index] = dist;

        }

        function translate(index, dist, speed) {

            var slide = slides[index];
            var style = slide && slide.style;

            if (!style) return;

            style.webkitTransitionDuration =
                style.MozTransitionDuration =
                    style.msTransitionDuration =
                        style.OTransitionDuration =
                            style.transitionDuration = speed + 'ms';

            style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
            style.msTransform =
                style.MozTransform =
                    style.OTransform = 'translateX(' + dist + 'px)';

        }

        function animate(from, to, speed) {

            // 如果不是动画，只是重新定位
            if (!speed) {

                element.style.left = to + 'px';
                return;

            }

            var start = +new Date;

            var timer = setInterval(function() {

                var timeElap = +new Date - start;

                if (timeElap > speed) {

                    element.style.left = to + 'px';

                    if (delay) begin();

                    options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

                    clearInterval(timer);
                    return;

                }

                element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

            }, 4);

        }
        // 安装程序自动幻灯片
        var delay = options.auto || 0;
        var interval;

        function begin() {

            interval = setTimeout(next, delay);

        }

        function stop() {

            delay = 0;
            clearTimeout(interval);

        }


        // 设置初始变量
        var start = {};
        var delta = {};
        var isScrolling;
    };

    _sweep.prototype = {

    };

    return _sweep;


});