/**
 * Created by sunqi on 15-1-30.
 */
$(document).ready(function(){
    var s=4;                          //s可以调控灵敏度，现在下滑屏幕高的一半就会完全模糊掉
    function p(i,j){                  //p函数参数>i:下滑距离；j:完全模糊的距离
        if(i<j){
            var k=i/j;
            k= k.toFixed(2);          //保留两位小数
            return k;
        }else{
            return 1;
        }
    }
    var xS=0.005;
    var yS=0.01;

    $(window).scroll(function(){      //滑动触发

        var scrollTo = $(window).scrollTop();

        var windowHeight = $(window).height();
        var k=p(scrollTo,windowHeight);
        if(k==1){
            window.frames['fuck'].action=false;
        }else{
            window.frames['fuck'].action=true;
            window.frames['fuck'].xSpeed=xS*(1-k);
            window.frames['fuck'].ySpeed=yS*(1-k);

        }

    }).trigger('scroll');
    $('#show_iframe').load(function(){
        $('.guide').animo({animation:'fadeInDown',duration:2})
    })
})