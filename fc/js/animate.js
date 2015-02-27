window.onload=function(){
    $(function(){
        $('.loading').animo({animation:'fadeOut'},function(){
            $('.loading').css('display','none');
            var play=true;
            var music=document.getElementById("myAudio");
            music.play();
            $('.music').click(function(){
                if(play){
                    play=!play;
                    music.pause();
                    $('#music').css('fill','#b4b4b4')
                }else{
                    play=!play;
                    music.play();
                    $('#music').css('fill','#fb7575')

                }
            })
            $('#cover4').css('visibility','visible')
            $('#cover4').animo({animation:'fadeInRight',duration:1.5},function(){
                $('#cover5').css('visibility','visible')
                $('#cover5').animo({animation:'fadeInLeft',duration:1.5},function(){
                    $('#cover6').css('visibility','visible')
                    $('#cover6').animo({animation:'fadeInRight',duration:1.5},function(){
                        $('#cover7').css('visibility','visible')
                        $('#cover7').animo({animation:'fadeInLeft',duration:1.5},function(){
                            $('#cover8').css('visibility','visible')
                            $('.arrow').css('visibility','visible')
                            $('.arrow').delay(3000).animo({animation:'fadeInDown',duration:1.5})
                        })
                    })
                })
            })
        });
    })

}
function anima(i){
    if(i==1){
        $('#tv0').css('visibility','visible')
        $('#tv0').animo({animation:'fadeInUp',duration:2},function(){
            $('#text1').css('visibility','visible')
            $('#text1').animo({animation:'fadeInUp',duration:2},function(){
                $('#tv1').css('visibility','visible')
                $('#tv2').css('visibility','visible')
                $('#tv2').addClass('gs')

            })
        })

    }
    if(i==2){
        $('#fc').css('visibility','visible')
        $('#fc').animo({animation:'fadeInUp',duration:2},function(){
            $('#text2').css('visibility','visible')
            $('#text2').animo({animation:'fadeInUp',duration:2},function(){
                $('#xbw').css('visibility','visible')
                $('#xbw').animo({animation:'fadeInUp',duration:2})


                })
        })

    }
}
var mySwiper = new Swiper('.swiper-container',{
    mode: 'vertical',
    onSlideChangeEnd:function(){
        console.log(mySwiper.activeIndex)
        anima(mySwiper.activeIndex);
    }
})
