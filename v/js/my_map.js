var div1=d3.select(document.getElementById('div1'));
var div2=d3.select(document.getElementById('div2'));
var div3=d3.select(document.getElementById('div3'));
//start();

function onClick1() {
    deselect();
    div1.attr("class","selectedRadial");
}

function onClick2() {
    deselect();
    div2.attr("class","selectedRadial");
}

function onClick3() {
    deselect();
    div3.attr("class","selectedRadial");
}

function labelFunction(val,min,max) {

}

function deselect() {
    div1.attr("class","radial");
    div2.attr("class","radial");
    div3.attr("class","radial");
}

function beijing() {

    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(69)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(46)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(22)
        .render();

}
function shanghai(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(49)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(32)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(9)
        .render();
}
function sichuan(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(40)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(15)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(4)
        .render();
}
function jiangsu(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(36)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(24)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(9)
        .render();
}
function shanxi(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(53)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(19)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(7)
        .render();
}
function hubei(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(42)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(18)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(6)
        .render();
}
function tianjin(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(42)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(21)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function liaoning(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(48)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(9)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function heilongjiang(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(44)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(12)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function hunan(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(29)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(13)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function guangdong(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(33)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(10)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function jilin(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(58)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(11)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function anhui(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(31)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(9)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function shandong   (){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(40)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(6)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(3)
        .render();
}
function fujian(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(30)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(9)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(2)
        .render();
}
function chongqing(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(32)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(12)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(2)
        .render();
}
function xinjiang(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(38)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(15)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(2)
        .render();
}
function hebei(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(39)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(3)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function shanshanxi(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(28)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(5)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function neimenggu(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(28)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(8)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render(

    );
}
function zhejiang(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(41)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(3)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function jiangxi(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(32)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(4)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function henan(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(35)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(3)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function guangxi(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(36)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(5)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function hainan(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(35)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(17)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function guizhou(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(41)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(6)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function yunnan(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(37)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(5)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function xizang(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(50)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(33)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function gansu(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(41)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(7)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function qinghai(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(38)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(33)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function ningxia(){
    var rp1 = radialProgress(document.getElementById('div1'))
        .label("本科高校占全部高校的比例")
        .onClick(onClick1)
        .diameter(200)
        .value(43)
        .render();

    var rp2 = radialProgress(document.getElementById('div2'))
        .label("211高校占本科高校的比例")
        .onClick(onClick2)
        .diameter(200)
        .value(17)
        .render();

    var rp3 = radialProgress(document.getElementById('div3'))
        .label("该地区211占全国211比例")
        .onClick(onClick3)
        .diameter(200)

        .value(1)
        .render();
}
function uclickme(i){

    if(i=="北京"){

        beijing();
    }else if(i=='上海'){
        shanghai();
    }else if(i=='四川'){
        sichuan();
    }else if(i=="江苏"){
        jiangsu();
    }else if(i=="陕西"){
        shanxi();
    }else if(i=="湖北"){
        hubei();
    }else if(i=="天津"){
        tianjin();
    }else if(i=="辽宁"){
        liaoning();
    }else if(i=="黑龙江"){
        heilongjiang();
    }else if(i=="湖南"){
        hunan();
    }else if(i=="广东"){
        guangdong();
    }else if(i=="吉林"){
        jilin();
    }else if(i=="安徽"){
        anhui();
    }else if(i=="山东"){
        shandong();
    }else if(i=="福建"){
        fujian();
    }else if(i=="重庆"){
        chongqing();
    }else if(i=="新疆"){
        xinjiang();
    }else if(i=="河北"){
        hebei();
    }else if(i=="山西"){
        shanshanxi();
    }else if(i=="内蒙古"){
        neimenggu();
    }else if(i=="浙江"){
        zhejiang();
    }else if(i=="江西"){
        jiangxi();
    }else if(i=="河南"){
        henan();
    }else if(i=="广西"){
        guangxi();
    }else if(i=="海南"){
        hainan();
    }else if(i=="贵州"){
        guizhou();
    }else if(i=="云南"){
        yunnan();
    }else if(i=="西藏"){
        xizang();
    }else if(i=="甘肃"){
        gansu();
    }else if(i=="青海"){
        qinghai();
    }else if(i=="宁夏"){
        ningxia();
    }


}
