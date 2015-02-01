/**
 * Created by sunqi on 15-1-30.
 */
$(document).ready(function(){
    $('#show_iframe').load(function(){
        var xS=0.005;
        var yS=0.01;
        function p(i,j){                  //p函数参数>i:下滑距离；j:完全模糊的距离
            if(i<j){
                var k=i/j;
                k= k.toFixed(2);          //保留两位小数
                return k;
            }else{
                return 1;
            }
        }
        var scrollTo = $(window).scrollTop();
        var windowHeight = $(window).height()*3/4;
        var k=p(scrollTo,windowHeight);
        if(k==1){
            window.frames['fuck'].action=false;
        }else{
            window.frames['fuck'].action=true;
            window.frames['fuck'].xSpeed=xS*(1-k);
            window.frames['fuck'].ySpeed=yS*(1-k);

        }
        $(window).scroll(function(){      //滑动触发

            var scrollTo = $(window).scrollTop();

            var windowHeight = $(window).height()*3/4;
            var k=p(scrollTo,windowHeight);
            if(k==1){
                window.frames['fuck'].action=false;
            }else{
                window.frames['fuck'].action=true;
                window.frames['fuck'].xSpeed=xS*(1-k);
                window.frames['fuck'].ySpeed=yS*(1-k);

            }

        }).trigger('scroll');
        $('.guide').css("visibility","visible");
        guideanimate2();
    })
    function guideanimate2(){
        $('#start_s').snabbt({
            position: [-200, 0, 0],
            rotation:[0,Math.PI*2,0],
            duration: 3000,
            delay: 500,
            easing: 'ease'
        }).then({
                fromPosition: [-200, 0, 0],
                duration:3000,
                easing: 'ease'
            })
        $('#start_t_end').snabbt({
            position: [200, 0, 0],
            rotation:[0,Math.PI*2,0],

            duration:3000,
            delay: 500,
            easing: 'ease'
        }).then({
                fromPosition: [200, 0, 0],
                duration: 3000,
                //delay: 100,
                easing: 'ease'
            })
        $('#start_t').snabbt({
            position: [-100, 0, 0],
            rotation:[0,Math.PI*2,0],

            duration: 3000,
            delay: 500,
            easing: 'ease'
        }).then({
                fromPosition: [-100, 0, 0],
                duration: 3000,
                //delay: 300,
                easing: 'ease'
            })
        $('#start_r').snabbt({
            position: [100, 0, 0],
            rotation:[0,Math.PI*2,0],

            duration: 3000,
            delay: 500,
            easing: 'ease'
        }).then({
                fromPosition: [100, 0, 0],
                duration: 3000,
                //delay: 300,
                easing: 'ease'
            })
    }
    function guideAnimate(){
        $('.guide').mouseover(function(){


            $('#start_s').snabbt({
                position: [-100, 0, 0],
                duration: 1000,
                delay: 100,
                easing: 'ease'
            }).then({
                    fromPosition: [-100, 0, 0],
                    duration: 1000,
                    //delay: 100,
                    easing: 'ease'
                })
            $('#start_t_end').snabbt({
                position: [100, 0, 0],
                duration: 1000,
                delay: 100,
                easing: 'ease'
            }).then({
                    fromPosition: [100, 0, 0],
                    duration: 1000,
                    //delay: 100,
                    easing: 'ease'
                })
            $('#start_t').snabbt({
                position: [-50, 0, 0],
                duration: 1000,
                delay: 300,
                easing: 'ease'
            }).then({
                    fromPosition: [-50, 0, 0],
                    duration: 1000,
                    //delay: 300,
                    easing: 'ease'
                })
            $('#start_r').snabbt({
                position: [50, 0, 0],
                duration: 1000,
                delay: 300,
                easing: 'ease'
            }).then({
                    fromPosition: [50, 0, 0],
                    duration: 1000,
                    //delay: 300,
                    easing: 'ease'
                })
        });


    }
    $('.guide').click(function(){
        $("html,body").animate({scrollTop:$("#wrap").offset().top},700)
    });
    $('.main-nav-link').mouseover(function(){
        $(this).snabbt({
            position: [0, -10, 0],
            easing: 'ease'
        }).then({

                easing: 'spring',
                springConstant: 0.2,
                springDeaccelaration: 0.95
        });
    })
    $('.logo_text').mouseover(function(){
        $(this).snabbt({
            position: [100, 0, 0],
            rotation: [0, 0, 2*Math.PI],
            easing: 'spring',
            springConstant: 0.3,
            springDeacceleration: 0.3
        }).then({
                fromRotation: [0, 0, 2*Math.PI],
                easing: 'ease'
            });
    })
    //guideAnimate();

})