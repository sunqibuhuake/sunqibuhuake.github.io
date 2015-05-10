/**
 * Created by sunqi on 15-5-4.
 */

$(document).ready(function() {


});
$(function(){

})
var init = function(){



    $(function(){

        $('#page4').on('appear', function () {
            console.log('showed')
        });



        var doAnima = function(s,a,t,cb){
            if($(s).css('visibility') == 'visible'){
                $(s).css('visibility','hidden');
            }else{
                $(s).css('visibility','visible');
            }
            $(s).animo({animation:a,duration:t},function(){
                cb();
            })
        }

        var start = function(){
            $('#start').click(function(){
                //$("html,body").animate({scrollTop:$("#page2").offset().top},1000)
                xh = true;
                doAnima('#start','fadeOut',1,function(){
                    $('iframe').animate({width:"50%",left:"0"},1000,function(){
                        fpIframe.contentWindow.control.toSphere();
                        doAnima('#mt','fadeIn',1,function(){
                        })
                    });

                })
            })
        }
        start();

        $('#loadPage').animo({animation:'fadeOutUpBig'},function(){
            $('#loadPage').css('display','none')
            fpIframe.contentWindow.control.toPlane();
            doAnima('#start','fadeIn',1,function(){
                console.log('starting')
            })
        })
    })
}

var zhuxiIndex = 0;
var cb = function(t,callback){
    setTimeout(function(){
        console.log('cbing');
        callback();
    },t);
}
function toSphere(){
    fpIframe.contentWindow.control.toSphere();
}
$(function(){
    var swiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        autoplayDisableOnInteraction:true,
        grabCursor: true,
        loop:true,
        onSlideChangeStart:function(){
        }
    })

    var zhuxi = function(i){
        console.log(1111122);
        swiper.stopAutoplay();
        $('#page3 .pure-u-1-12 div').removeClass('hovering');
        if(i == 0){
            $('#jiangBtn').addClass('hovering');
            swiper.slideTo(1);
        }
        if(i == 1){
            $('#huBtn').addClass('hovering');
            swiper.slideTo(2);
        }
        if(i == 2){
            $('#xiBtn').addClass('hovering');
            swiper.slideTo(3);
        }
    }



    $('#page3 .pure-u-1-12 div').click(function(){
        var i = $(this).index();
        console.log(i);
        zhuxi(i);
    })
})

var animate1 = function(){
    $(function(){
        cb(500,function(){
            console.log('111')
            $('#img1').animo({animation:'fadeInLeftBig'});
        })
    })

//    $(function(){
//        var imgs = $('#page1 img');
//        var l = imgs.length;
//        for(var i = 0;i < l;i++){
//            var num = i;
//
//            var cid = '#fpimgs' + i;
//            imgs[i].attr('id',cid.split('#')[1]);
//            $(cid).animo({animation:'fadeOut',duration:1});
//        }
//    })


}
