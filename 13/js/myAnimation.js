/**
 * Created by sunqi on 15-3-10.
 */
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
                    console.log(mySwiper.activeIndex)
                    anima(mySwiper.activeIndex);
                }
            })

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

function clear(a){
    console.log(a.length)
    for(var i=0;i< a.length;i++){
        document.getElementById(a[i]).setAttribute("class","original");
    }
}
function mapchange(i){
    if(i==3){
        document.getElementById("Hei_Long_Jiang").setAttribute("class","mapXi");
        document.getElementById("Liao_Ning").setAttribute("class","mapXi");
        document.getElementById("Jiang_Su").setAttribute("class","mapXi");
        document.getElementById("Xi_Zang").setAttribute("class","mapXi");
        document.getElementById("Shan_Dong").setAttribute("class","mapLi");
        document.getElementById("Hu_Nan").setAttribute("class","mapLi");
        document.getElementById("Gui_Zhou").setAttribute("class","mapLi");
        document.getElementById("He_Nan").setAttribute("class","mapLi");
        document.getElementById("Ji_Lin").setAttribute("class","mapLi");


    }
    if(i==4){
        document.getElementById("Shang_Hai1").setAttribute("class","mapXi");
        document.getElementById("Shang_Hai2").setAttribute("class","mapXi");

        document.getElementById("Guang_Dong1").setAttribute("class","mapXi");
        document.getElementById("Guang_Dong2").setAttribute("class","mapXi");
        document.getElementById("Guang_Dong3").setAttribute("class","mapXi");
        document.getElementById("Guang_Dong4").setAttribute("class","mapXi");

        document.getElementById("Gui_Zhou").setAttribute("class","mapXi");
        document.getElementById("An_Hui").setAttribute("class","mapXi");
        document.getElementById("Shan_Dong").setAttribute("class","mapLi");
        document.getElementById("Qing_Hai").setAttribute("class","mapLi");
        document.getElementById("Yun_Nan").setAttribute("class","mapLi");
        document.getElementById("Shan1_Xi").setAttribute("class","mapLi");
        document.getElementById("Jiang_Xi").setAttribute("class","mapLi");
    }
    if(i==5){
        document.getElementById("Shang_Hai1").setAttribute("class","mapXi");
        document.getElementById("Shang_Hai2").setAttribute("class","mapXi");
        document.getElementById("Jiang_Xi").setAttribute("class","mapXi");
        document.getElementById("Shan_Dong").setAttribute("class","mapLi");
    }
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
    if((i==0)&&(visited[i]==1)){
        $('#hongchou').addClass('swing3')
    }
    if((i==0)&&(visited[i]!=1)){
        visited[i]=1;
        xianshi('#hongchou');
        $('#hongchou').animo({animation:'bounceInUp',duration:1.5},function(){
            $('#hongchou').animo('cleanse');
            $('#hongchou').addClass('swing3')
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





        $('#cb1').animo({animation:'tada',duration:0.5},function(){

        })


    }
    if((i==1)&&(visited[i]==1)){
        $('#hongchou').removeClass('swing3')
        active(mapnow);
    }
    if((i==1)&&(visited[i]!=1)){
        $('#hongchou').removeClass('swing3')

        press3();
//        $('#cb5').animo({animation:'tada',duration:2},function(){
//            console.log('1')
//            press4();
//            $('#cb6').animo({animation:'tada',duration:2},function(){
//                console.log('1')
//                press5();
//
//            })
//        })
        setTimeout(press4,2000);
        setTimeout(press5,4000);
        visited[i]=1;
    }
    if((i==2)&&(visited[i]==1)){
        $('.showedMap').addClass('hide');
        $('.showedMap').removeClass('showedMap');
    }
    if((i==2)&&(visited[i]!=1)){
        $('.showedMap').addClass('hide');
        $('.showedMap').removeClass('showedMap');
        $('#why2').css('visibility','visible');
        $('#why2').animo({animation:'bounceInDown',duration:1.5})
        $('#cb7').animo({animation:'tada',duration:0.2},function(){
            $('#why').css('visibility','visible');
            $('#why').animo({animation:'bounceInDown',duration:1.5})
        })
        $('#cb8').animo({animation:'tada',duration:0.4},function(){
            $('#why1').css('visibility','visible');
            $('#why1').animo({animation:'bounceInDown',duration:1.5},function(){
                visited[i]=1
                $('#why').animo('cleanse')
                $('#why').animo( { animation: ['tada', 'bounce','pulse'], duration: 1.5 } );
            })
        })
    }
    if((i==3)&&(visited[i]!=1)){
        $('#why').removeClass('xz');
        $('#li1').css('visibility','visible');
        $('#li1').animo({animation:'fadeInUp'});
        $('.talk1').css('visibility','visible');
        $('.talk1').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
    if((i==4)&&(visited[i]!=1)){
        $('#li2').css('visibility','visible');
        $('#li2').animo({animation:'fadeInUp'});
        $('.talk2').css('visibility','visible');
        $('.talk2').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
    if((i==5)&&(visited[i]!=1)){
        $('#li3').css('visibility','visible');
        $('#li3').animo({animation:'fadeInUp'});
        $('.talk3').css('visibility','visible');
        $('.talk3').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
    if((i==6)&&(visited[i]!=1)){
        $('#li4').css('visibility','visible');
        $('#li4').animo({animation:'fadeInUp'});
        $('.talk4').css('visibility','visible');
        $('.talk4').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
    if((i==7)&&(visited[i]!=1)){
        $('#li5').css('visibility','visible');
        $('#li5').animo({animation:'fadeInUp'});
        $('.talk5').css('visibility','visible');
        $('.talk5').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
    if((i==8)&&(visited[i]!=1)){
        $('#li6').css('visibility','visible');
        $('#li6').animo({animation:'fadeInUp'});
        $('.talk6').css('visibility','visible');
        $('.talk6').animo({animation:'fadeInDown'},function(){

        });
        visited[i]=1;
    }
//    if((i==9)&&(visited[i]!=1)){
//        visited[i]=1;
//        $('#p1').animo({animation:'pulse'})
//        $('#cb1').animo({animation:'tada',duration:0.3},function(){
//            $('#p2').animo({animation:'pulse'})
//        })
//        $('#cb2').animo({animation:'tada',duration:0.6},function(){
//            $('#p3').animo({animation:'pulse'})
//        })
//        $('#cb3').animo({animation:'tada',duration:0.9},function(){
//            $('#p4').animo({animation:'pulse'})
//        })
//        $('#cb4').animo({animation:'tada',duration:1.2},function(){
//            $('#p5').animo({animation:'pulse'})
//        })
//    }
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
            }
            function x3(){
                xianshi('#x8');xianshi('#x2');
                $('#x8').addClass('zi');
                $('#x2').addClass('zi');
            }
            function x4(){
                xianshi('#x7');xianshi('#x3');
                $('#x3').addClass('zi');
                $('#x7').addClass('zi');
            }
            function x5(){
                xianshi('#x6');
                $('#x6').addClass('zi');
            }
            setTimeout(x2,700);
            setTimeout(x3,1400);
            setTimeout(x4,2100);
            setTimeout(x5,2800);

        })
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
            }
            function x3(){
                xianshi('#l3');xianshi('#l7');
                $('#l3').addClass('zi');
                $('#l7').addClass('zi');
            }
            function x4(){
                xianshi('#l4');xianshi('#l8');
                $('#l4').addClass('zi');
                $('#l8').addClass('zi');
            }
            function x5(){
                xianshi('#l6');
                $('#l6').addClass('zi');
            }
            setTimeout(x2,700);
            setTimeout(x3,1400);
            setTimeout(x4,2100);
            setTimeout(x5,2800);

        })
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
            $('#s1').animo({animation:'fadeIn',duration:0.3})
        }
        function showStep2(){
            xianshi('#s2');
            $('#s2').animo({animation:'fadeIn',duration:0.3})
        }
        function showStep3(){
            xianshi('#s3');
            $('#s3').animo({animation:'fadeIn',duration:0.3})
        }
        function showStep4(){
            xianshi('#s4');
            $('#s4').animo({animation:'fadeIn',duration:0.3})
        }
        function showStep5(){
            xianshi('#s5');
            $('#s5').animo({animation:'fadeIn',duration:0.3})
        }
        function showStep6(){
            xianshi('#s6');
            $('#s6').animo({animation:'fadeIn',duration:0.3})
        }

        setTimeout(showSgqm,500);
        setTimeout(showStep1,1000);
        setTimeout(showStep2,1300);
        setTimeout(showStep3,1600);
        setTimeout(showStep4,1900);
        setTimeout(showStep5,2100);
        setTimeout(showStep6,2400);


            visited[i]=1;






    }
    if((i==12)&&(visited[i]!=1)){
        $('#b1').css('visibility','visible');
        $('#b1').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u1').css('visibility','visible');
            $('#u1').animo({animation:"fadeInUp"})
        })
        visited[i]=1;

    }
    if((i==13)&&(visited[i]!=1)){
        $('#b2').css('visibility','visible');
        $('#b2').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u2').css('visibility','visible');
            $('#u2').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
    if((i==14)&&(visited[i]!=1)){
        $('#b3').css('visibility','visible');
        $('#b3').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u3').css('visibility','visible');
            $('#u3').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
    if((i==15)&&(visited[i]!=1)){
        $('#b4').css('visibility','visible');
        $('#b4').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u4').css('visibility','visible');
            $('#u4').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
}

