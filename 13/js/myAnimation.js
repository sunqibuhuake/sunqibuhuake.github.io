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
            var h2=$('#tam1').height()+50;
            var h2=h2+'px';

            $('.foot').css('margin-top',h2);
            var h1=$('#test1').height()+'px';

            $('.myGroup').css('margin-top',h1)

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
        $('#hongchou').addClass('swing2')
    }
    if((i==0)&&(visited[i]!=1)){
        visited[i]=1;
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
        $('#guoqi').animo({animation:'fadeInLeft',duration:1},function(){

        })
        xianshi('#gezi1');

        $('#gezi1').animo({animation:'fadeInLeft',duration:1})
        xianshi('#gezi3');
        $('#gezi3').animo({animation:'fadeInLeft',duration:4})
        xianshi('#gezi2');
        $('#gezi2').animo({animation:'fadeInLeft',duration:7})

        $('#cb1').animo({animation:'tada',duration:0.5},function(){

        })


    }
    if((i==1)&&(visited[i]==1)){
        $('#hongchou').removeClass('swing2')
        active(mapnow);
    }
    if((i==1)&&(visited[i]!=1)){
        $('#hongchou').removeClass('swing2')

        press3();
        $('#cb5').animo({animation:'tada',duration:2},function(){
            console.log('1')
            press4();
            $('#cb6').animo({animation:'tada',duration:2},function(){
                console.log('1')
                press5();

            })
        })
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
    if((i==9)&&(visited[i]!=1)){
        visited[i]=1;
        $('#p1').animo({animation:'pulse'})
        $('#cb1').animo({animation:'tada',duration:0.3},function(){
            $('#p2').animo({animation:'pulse'})
        })
        $('#cb2').animo({animation:'tada',duration:0.6},function(){
            $('#p3').animo({animation:'pulse'})
        })
        $('#cb3').animo({animation:'tada',duration:0.9},function(){
            $('#p4').animo({animation:'pulse'})
        })
        $('#cb4').animo({animation:'tada',duration:1.2},function(){
            $('#p5').animo({animation:'pulse'})
        })
    }
    if((i==10)&&(visited[i]!=1)){
        $('#tam1').css('visibility','visible');
        $('#tam1').animo({animation:'fadeInUp',duration:1});
        $('#cb1').animo({animation:'fadeIn',duration:0.5},function(){
            $('#tam2').css('visibility','visible');
            $('#tam2').animo({animation:'bounceInRight',duration:2});
        })
        $('#cb2').animo({animation:'fadeIn',duration:0.7},function(){
            $('#tam5').css('visibility','visible');
            $('#tam5').animo({animation:'bounceInRight',duration:2});
        })
        $('#cb3').animo({animation:'fadeIn',duration:0.9},function(){
            $('#tam4').css('visibility','visible');
            $('#tam4').animo({animation:'bounceInRight',duration:2});
        })
        $('#cb4').animo({animation:'fadeIn',duration:1.1},function(){
            $('#tam3').css('visibility','visible');
            $('#tam3').animo({animation:'bounceInRight',duration:2});
        })
        $('#cb5').animo({animation:'fadeIn',duration:1.3},function(){
            $('#tam6').css('visibility','visible');
            $('#tam6').animo({animation:'bounceInRight',duration:2},function(){
                $('#step1').css('visibility','visible');
                $('#step1').animo({animation:'fadeIn',duration:0.3},function(){
                    $('#step2').css('visibility','visible');
                    $('#step2').animo({animation:'fadeIn',duration:0.3},function(){
                        $('#step3').css('visibility','visible');
                        $('#step3').animo({animation:'fadeIn',duration:0.3},function(){
                            $('#step4').css('visibility','visible');
                            $('#step4').animo({animation:'fadeIn',duration:0.3},function(){
                                $('#step5').css('visibility','visible');
                                $('#step5').animo({animation:'fadeIn',duration:0.3},function(){
                                    $('#step6').css('visibility','visible');
                                    $('#step6').animo({animation:'fadeIn',duration:0.3},function(){
                                        $('#step7').css('visibility','visible');
                                        $('#step7').animo({animation:'fadeIn',duration:0.3},function(){

                                        })
                                    })
                                })
                            })
                        })
                    })
                })

            });
            visited[i]=1;
        })



// $('#cb1').animo({animation:'fadeIn',duration:0.5},function(){
//
//     $('#cb').css('visibility','hidden');
//     $('#cb').animo({animation:'fadeIn',duration:0.5},function(){
//         console.log('ok')
//         $('#tam2').css('visibility','visible');
//         $('#tam2').animo({animation:'bounceInLeft'});
//         $('#cb').animo({animation:'fadeIn',duration:0.5},function(){
//             $('#tam5').css('visibility','visible');
//             $('#tam5').animo({animation:'bounceInLeft'});
//             $('#cb').animo({animation:'fadeIn',duration:0.5},function(){
//                 $('#tam4').css('visibility','visible');
//                 $('#tam4').animo({animation:'bounceInLeft'});
//                 $('#cb').animo({animation:'fadeIn',duration:0.5},function(){
//                     $('#tam3').css('visibility','visible');
//                     $('#tam3').animo({animation:'bounceInLeft'});
//                     $('#cb').animo({animation:'fadeIn',duration:0.5},function(){
//                         $('#tam6').css('visibility','visible');
//                         $('#tam6').animo({animation:'bounceInLeft'});
//                     })
//                 })
//             })
//         })
//     })
// })
//        $('#tam1').css('visibility','visible');
//        $('#tam1').animo({animation:'fadeInUp',duration:1},function(){
//            $('#tam2').css('visibility','visible');
//            $('#tam2').animo({animation:'bounceInLeft',duration:0.3},function(){
//                $('#tam5').css('visibility','visible');
//                $('#tam5').animo({animation:'bounceInLeft',duration:0.3},function(){
//                    $('#tam4').css('visibility','visible');
//                    $('#tam4').animo({animation:'bounceInLeft',duration:0.3},function(){
//                        $('#tam3').css('visibility','visible');
//                        $('#tam3').animo({animation:'bounceInLeft',duration:0.3},function(){
//                            $('#tam6').css('visibility','visible');
//                            $('#tam6').animo({animation:'bounceInRight',duration:0.3},function(){
//
//                            })
//                        })
//                    })
//                })
//            })
//        })

    }
    if((i==11)&&(visited[i]!=1)){
        $('#b1').css('visibility','visible');
        $('#b1').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u1').css('visibility','visible');
            $('#u1').animo({animation:"fadeInUp"})
        })
        visited[i]=1;

    }
    if((i==12)&&(visited[i]!=1)){
        $('#b2').css('visibility','visible');
        $('#b2').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u2').css('visibility','visible');
            $('#u2').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
    if((i==13)&&(visited[i]!=1)){
        $('#b3').css('visibility','visible');
        $('#b3').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u3').css('visibility','visible');
            $('#u3').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
    if((i==14)&&(visited[i]!=1)){
        $('#b4').css('visibility','visible');
        $('#b4').animo({animation:"rotateInDownLeft",duration:0.5},function(){
            $('#u4').css('visibility','visible');
            $('#u4').animo({animation:"fadeInUp"})
        })
        visited[i]=1;


    }
}

var mySwiper = new Swiper('.swiper-container',{
    mode: 'vertical',
    onSlideChangeEnd:function(){
        console.log(mySwiper.activeIndex)
        anima(mySwiper.activeIndex);
    }
})
