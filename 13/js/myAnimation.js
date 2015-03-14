/**
 * Created by sunqi on 15-3-10.
 */

;(function(){
    var isTouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click', _on = $.fn.on;
    $.fn.on = function(){
        arguments[0] = (arguments[0] === 'click') ? isTouch: arguments[0];
        return _on.apply(this, arguments);
    };
})();
function xianshi(s){
    $(s).css('visibility','visible');
}
var mapnow='';
var visited=[];
window.onload=function(){
    $(function(){
        $('.loading').animo({animation:'fadeOutUpBig'},function(){
            $('.loading').css('display','none');
            var mySwiper = new Swiper('.swiper-container',{
                direction: 'vertical',
                onSlideChangeEnd:function(){
                    console.log("当前索引："+mySwiper.activeIndex+'\n'+'上一索引：'+mySwiper.previousIndex)
                    anima(mySwiper.activeIndex);
                    clean(mySwiper.previousIndex);
                }
            })
            $('.yearBtn').click(function(event){
                event.preventDefault();
            });
            var h2=$('#tam1').height()+50;
            var h2=h2+'px';

            $('.foot').css('margin-top',h2);
            var h1=$('#test1').height();
            var h3=$('#maptbox').height();
            var h4=h1-h3;
            var h4=h4+'px';


            $('.myGroup').css('margin-top',h4)
            var h5=$('#xic').height()-30;
            h5=h5+'px';
            $('#why2').css('margin-top',h5);
            var h6=$('#yjkx').height()+70;
            var h6=h6+'px';
            $('.step').css('margin-top',h6)



            anima(0);


        });
    })

}



function press3(){
    $('.showedMap').addClass('hide');
    $('.showedMap').removeClass('showedMap');
    $('.yearBtnActive').removeClass('yearBtnActive')
    $('#y3').addClass('yearBtnActive');
    $('#map2013').removeClass('hide');
    $('#map2013').addClass('showedMap');
    mapnow=3;
}
function press4(){
    $('.showedMap').addClass('hide');
    $('.showedMap').removeClass('showedMap');
    $('.yearBtnActive').removeClass('yearBtnActive')
    $('#y4').addClass('yearBtnActive');
    $('#map2014').removeClass('hide');
    $('#map2014').addClass('showedMap');
    mapnow=4;
}
function press5(){
    $('.showedMap').addClass('hide');
    $('.showedMap').removeClass('showedMap');
    $('.yearBtnActive').removeClass('yearBtnActive')
    $('#y5').addClass('yearBtnActive');
    $('#map2015').removeClass('hide');
    $('#map2015').addClass('showedMap');
    mapnow=5;
}
function active(k){
    if(k==3){
        press3();
    }
    if(k==4){
        press4();
    }
    if(k==5){
        press5();
    }
}
$('#y3').click(function(){
    press3();
})
$('#y4').click(function(){
press4();
})
$('#y5').click(function(){
press5();
})
function anima(i){

    if((i==0)&&(visited[i]!=1)){

        ////visited[i]=1;
        xianshi('#hongchou');
        $('#hongchou').animo({animation:'bounceInUp',duration:1.5},function(){
            $('#hongchou').animo('cleanse');
            $('#hongchou').addClass('swing2')
        })
        xianshi('#huabiao');
        $('#huabiao').animo({animation:'bounceInUp',duration:1.7})
        xianshi('#tiananmen');
        $('#tiananmen').animo({animation:'bounceInUp',duration:1.9})
        xianshi('.xlxt')
        $('.xlxt').animo({animation:'bounceInUp',duration:2.5});
        xianshi('#guoqi');
        $('#guoqi').animo({animation:'fadeInLeft',duration:2},function(){
            xianshi('#gezi1');
            $('#gezi1').animo({animation:'fadeInLeft',duration:1},function(){
                xianshi('#gezi3');
                $('#gezi3').animo({animation:'fadeInLeft',duration:2})
                xianshi('#gezi2');
                $('#gezi2').animo({animation:'fadeInLeft',duration:4})
            })

        })
    }
    if((i==1)&&(visited[i]!=1)){
        if(mapnow==''){
            press3();
            setTimeout(press4,2000)
            setTimeout(press5,4000)
        }else{
            active(mapnow);
        }

        ////visited[i]=1;
    }

    if((i==2)&&(visited[i]!=1)){
        xianshi('#xic');
        $('#xic').addClass('bee');
        function lic(){
            clearTimeout(timer3);
            xianshi('#lic');
            $('#lic').addClass('bee');
            var timer4=setTimeout(why2,200);
            function why2(){
                $('#why2').css('visibility','visible');
                $('#why2').addClass('bee')
                clearTimeout(timer4)
            }
        }
        var timer3=setTimeout(lic,200);


        ////visited[i]=1;

    }

    if((i==3)&&(visited[i]!=1)){
        $('#tou1').css('visibility','visible');
        $('#tou1').animo({animation:'fadeInRight'});
        function caca1(){
            clearTimeout(timer5)
            xianshi('#pao1');
            $('#pao1').animo({animation:"fadeInLeft"});
            function caca2(){
                clearTimeout(timer6)
                xianshi('#pao2');

                $('#pao2').animo({animation:"fadeInLeft"});
                function caca3(){
                    clearTimeout(timer7)
                    xianshi('#pao3');
                    $('#pao3').animo({animation:"fadeInLeft"});
                }
                var timer7=setTimeout(caca3,500)
            }
            var timer6=setTimeout(caca2,500)
        }
        var timer5=setTimeout(caca1,500)
        //visited[i]=1;
    }
    if((i==4)&&(visited[i]!=1)){
        $('#tou2').css('visibility','visible');
        $('#tou2').animo({animation:'fadeInRight'});
        function caca4(){
            clearTimeout(timer8)
            xianshi('#pao4');
            $('#pao4').animo({animation:"fadeInLeft"});
            function caca5(){
                clearTimeout(timer9)
                xianshi('#pao5');
                $('#pao5').animo({animation:"fadeInLeft"});
                function caca6(){
                    clearTimeout(timer10)
                    xianshi('#pao6');
                    $('#pao6').animo({animation:"fadeInLeft"});
                }
                var timer10=setTimeout(caca6,500)
            }
            var timer9=setTimeout(caca5,500)
        }
        var timer8=setTimeout(caca4,500)
        //visited[i]=1;
    }
    if((i==5)&&(visited[i]!=1)){
        $('#tou3').css('visibility','visible');
        $('#tou3').animo({animation:'fadeInRight'});
        function caca7(){
            clearTimeout(timer11)
            xianshi('#pao7');
            $('#pao7').animo({animation:"fadeInLeft"});
            function caca8(){
                clearTimeout(timer12)
                xianshi('#pao8');
                $('#pao8').animo({animation:"fadeInLeft"});
                function caca9(){
                    clearTimeout(timer13)
                    xianshi('#pao9');
                    $('#pao9').animo({animation:"fadeInLeft"});
                }
                var timer13=setTimeout(caca9,500)
            }
            var timer12=setTimeout(caca8,500)
        }
        var timer11=setTimeout(caca7,500)

        //visited[i]=1;
    }
    if((i==6)&&(visited[i]!=1)){
        $('#tou4').css('visibility','visible');
        $('#tou4').animo({animation:'fadeInRight'});
        function caca10(){
            clearTimeout(timer14)
            xianshi('#pao10');
            $('#pao10').animo({animation:"fadeInLeft"});
            function caca11(){
                clearTimeout(timer15)
                xianshi('#pao11');
                $('#pao11').animo({animation:"fadeInLeft"});
                function caca12(){
                    clearTimeout(timer16)
                    xianshi('#pao12');
                    $('#pao12').animo({animation:"fadeInLeft"});
                }
                var timer16=setTimeout(caca12,500)
            }
            var timer15=setTimeout(caca11,500)
        }
        var timer14=setTimeout(caca10,500)
        //visited[i]=1;
    }
    if((i==7)&&(visited[i]!=1)){
        $('#tou5').css('visibility','visible');
        $('#tou5').animo({animation:'fadeInRight'});
        function caca13(){
            clearTimeout(timer17)
            xianshi('#pao13');
            $('#pao13').animo({animation:"fadeInLeft"});
            function caca14(){
                clearTimeout(timer18)
                xianshi('#pao14');
                $('#pao14').animo({animation:"fadeInLeft"});
                function caca15(){
                    clearTimeout(timer19)
                    xianshi('#pao15');
                    $('#pao15').animo({animation:"fadeInLeft"});
                }
                var timer19=setTimeout(caca15,500)
            }
            var timer18=setTimeout(caca14,500)
        }
        var timer17=setTimeout(caca13,500)
        //visited[i]=1;
    }
    if((i==8)&&(visited[i]!=1)){
        $('#tou6').css('visibility','visible');
        $('#tou6').animo({animation:'fadeInRight'});
        function caca16(){
            clearTimeout(timer20)
            xianshi('#pao16');
            $('#pao16').animo({animation:"fadeInLeft"});
            function caca17(){
                clearTimeout(timer21)
                xianshi('#pao17');
                $('#pao17').animo({animation:"fadeInLeft"});
            }
            var timer21=setTimeout(caca17,500)

        }
        var timer20=setTimeout(caca16,500)
        //visited[i]=1;
    }

    if((i==9)&&(visited[i]!=1)){
        xianshi('#t9');
        $('#t9').animo({animation:'fadeInUp',duration:1},function(){
            xianshi('#x1');xianshi('#x5');
            $('#x1').addClass('zi');
            $('#x5').addClass('zi');
            function x2(){
                xianshi('#x9');xianshi('#x4');
                $('#x9').addClass('zi');
                $('#x4').addClass('zi');
                function x3(){
                    xianshi('#x8');xianshi('#x2');
                    $('#x8').addClass('zi');
                    $('#x2').addClass('zi');
                    function x4(){
                        xianshi('#x7');xianshi('#x3');
                        $('#x3').addClass('zi');
                        $('#x7').addClass('zi');
                        function x5(){
                            xianshi('#x6');
                            $('#x6').addClass('zi');
                        }
                        setTimeout(x5,700);
                    }
                    setTimeout(x4,700);
                }
                setTimeout(x3,700);
            }



            setTimeout(x2,700);




        })
        //visited[i]=1;

    }
    if((i==10)&&(visited[i]!=1)){
        xianshi('#t10');
        $('#t10').animo({animation:'fadeInUp',duration:1},function(){
            xianshi('#l1');xianshi('#l5');
            $('#l1').addClass('zi');
            $('#l5').addClass('zi');
            function x2(){
                xianshi('#l9');xianshi('#l2');
                $('#l2').addClass('zi');
                $('#l9').addClass('zi');
                function x3(){
                    xianshi('#l3');xianshi('#l7');
                    $('#l3').addClass('zi');
                    $('#l7').addClass('zi');
                    function x4(){
                        xianshi('#l4');xianshi('#l8');
                        $('#l4').addClass('zi');
                        $('#l8').addClass('zi');
                        function x5(){
                            xianshi('#l6');
                            $('#l6').addClass('zi');
                        }
                        setTimeout(x5,700);
                    }
                    setTimeout(x4,700);
                }
                setTimeout(x3,700);
            }
            setTimeout(x2,700);

        })
        //visited[i]=1;

    }
    if((i==11)&&(visited[i]!=1)){
        $('#yjkx').css('visibility','visible');
        $('#yjkx').animo({animation:'fadeInUp',duration:1});
        function showSgqm(){
            xianshi('#sgqm');
            $('#sgqm').animo({animation:'fadeInUp',duration:1})
        }
        function showStep1(){
            xianshi('#s1');
            $('#s1').animo({animation:'fadeIn',duration:0.3},function(){
                xianshi('#s2');
                $('#s2').animo({animation:'fadeIn',duration:0.3},function(){
                    xianshi('#s3');
                    $('#s3').animo({animation:'fadeIn',duration:0.3},function(){
                        xianshi('#s4');
                        $('#s4').animo({animation:'fadeIn',duration:0.3},function(){
                            xianshi('#s5');
                            $('#s5').animo({animation:'fadeIn',duration:0.3},function(){
                                xianshi('#s6');
                                $('#s6').animo({animation:'fadeIn',duration:0.3})
                            })
                        })
                    })
                })
            })
        }


        setTimeout(showSgqm,500);
        setTimeout(showStep1,1000);
        //visited[i]=1;
    }
    if((i==12)&&(visited[i]!=1)){
        $('#b1').css('visibility','visible');
        $('#b1').animo({animation:"fadeInUp",duration:0.5},function(){
            $('#u1').css('visibility','visible');
            $('#u1').animo({animation:"fadeInUp"})
        })
        //visited[i]=1;
    }
    if((i==13)&&(visited[i]!=1)){
        $('#b2').css('visibility','visible');
        $('#b2').animo({animation:"fadeInUp",duration:0.5},function(){
            $('#u2').css('visibility','visible');
            $('#u2').animo({animation:"fadeInUp"})
        })
        //visited[i]=1;


    }
    if((i==14)&&(visited[i]!=1)){
        $('#b3').css('visibility','visible');
        $('#b3').animo({animation:"fadeInUp",duration:0.5},function(){
            $('#u3').css('visibility','visible');
            $('#u3').animo({animation:"fadeInUp"})
        })
        //visited[i]=1;


    }
    if((i==15)&&(visited[i]!=1)){
        $('#b4').css('visibility','visible');
        $('#b4').animo({animation:"fadeInUp",duration:0.5},function(){
            $('#u4').css('visibility','visible');
            $('#u4').animo({animation:"fadeInUp"})
        })
        //visited[i]=1;


    }
}
function clean(i){
    if(i==0){
        $('#slide0').find('.hide').css('visibility','hidden');
        $('#slide0').find('.swing2').removeClass('swing2');
    }
    if(i==1){
        $('.showedMap').addClass('hide');
        $('.showedMap').removeClass('showedMap');
    }
    if(i==2){
        $('#slide2').find('.hide').css('visibility','hidden');
        $('#slide2').find('.bee').removeClass('bee');
    }
    if(i==3){
        $('#slide3').find('.hide').css('visibility','hidden');
    }
    if(i==4){
        $('#slide4').find('.hide').css('visibility','hidden');
    }
    if(i==5){
        $('#slide5').find('.hide').css('visibility','hidden');
    }
    if(i==6){
        $('#slide6').find('.hide').css('visibility','hidden');
    }
    if(i==7){
        $('#slide7').find('.hide').css('visibility','hidden');
    }
    if(i==8){
        $('#slide8').find('.hide').css('visibility','hidden');
    }
    if(i==9){
        $('#slide9').find('.hide').css('visibility','hidden');
        $('#slide9').find('.zi').removeClass('zi');
    }
    if(i==10){
        $('#slide10').find('.hide').css('visibility','hidden');
        $('#slide10').find('.zi').removeClass('zi');
    }
    if(i==11){
        $('#slide11').find('.hide').css('visibility','hidden');
    }
    if(i==12){
        $('#slide12').find('.hide').css('visibility','hidden');
    }
    if(i==13){
        $('#slide13').find('.hide').css('visibility','hidden');
    }
    if(i==14){
        $('#slide14').find('.hide').css('visibility','hidden');
    }
    if(i==15){
        $('#slide15').find('.hide').css('visibility','hidden');
    }
}
