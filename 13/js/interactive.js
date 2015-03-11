/**
 * Created by sunqi on 15-3-10.
 */
$(function(){
    function step(){
        document.getElementById('foot1').setAttribute("class","show1");
        document.getElementById('foot2').setAttribute("class","show2");
        document.getElementById('foot3').setAttribute("class","show3");
        document.getElementById('foot4').setAttribute("class","show4");
        document.getElementById('foot5').setAttribute("class","show5");
        document.getElementById('foot6').setAttribute("class","show6");
        document.getElementById('foot7').setAttribute("class","show7");
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
    $('#y3').click(function(){
        $('.yearBtnActive').removeClass('yearBtnActive')
        $('#y3').addClass('yearBtnActive');
        var l=document.getElementsByClassName('mapXi');
        var u=document.getElementsByClassName('mapLi');

        console.log(l.length);
        var a=[];
        for(var i=0;i< l.length;i++){
            a.push(l[i].id);
        }
        for(var i=0;i< u.length;i++){
            a.push(u[i].id);
        }
        console.log(a);
        clear(a);
        $('#cb1').animo({animation:'tada',duration:0.5},function(){
            mapchange(3);
        })

    })
    $('#y4').click(function(){
        $('.yearBtnActive').removeClass('yearBtnActive')
        $('#y4').addClass('yearBtnActive');
        var l=document.getElementsByClassName('mapXi');
        var u=document.getElementsByClassName('mapLi');

        console.log(l.length);
        var a=[];
        for(var i=0;i< l.length;i++){
            a.push(l[i].id);
        }
        for(var i=0;i< u.length;i++){
            a.push(u[i].id);
        }
        console.log(a);
        clear(a);

        $('#cb1').animo({animation:'tada',duration:0.5},function(){
            mapchange(4);
        })

    })
    $('#y5').click(function(){
        $('.yearBtnActive').removeClass('yearBtnActive')
        $('#y5').addClass('yearBtnActive');
        var l=document.getElementsByClassName('mapXi');
        var u=document.getElementsByClassName('mapLi');

        console.log(l.length);
        var a=[];
        for(var i=0;i< l.length;i++){
            a.push(l[i].id);
        }
        for(var i=0;i< u.length;i++){
            a.push(u[i].id);
        }
        console.log(a);
        clear(a);
        $('#cb1').animo({animation:'tada',duration:0.5},function(){
            mapchange(5);
        })

    })


})
