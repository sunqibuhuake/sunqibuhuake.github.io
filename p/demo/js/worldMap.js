
require.config({
    paths: {
        'echarts': './ec/dist'
    }
});

// 然后就可以动态加载图表进行绘制啦
require([
    'echarts',
    'echarts/chart/bar',
    'echarts/chart/pie',
    'echarts/chart/map',
    'echarts/chart/line'

], function (ec) {
    // 跟 ECharts 一样的方式初始化
    var barChart1=ec.init(document.getElementById('bar1'));
    var barChart2=ec.init(document.getElementById('bar2'));
    var hdChart = ec.init(document.getElementById('hd'));
    //var pieChart=ec.init(document.getElementById('pieChart'));
    var mapChart=ec.init(document.getElementById('worldMap'));

    var pieData=[
        {value:335, name:'北京'},
        {value:310, name:'上海'},
        {value:234, name:'广州'},
        {value:135, name:'南京'},
        {value:198, name:'黑龙江'},
        {value:211, name:'西藏'}
    ];
    var hd = {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {

            data:['GDP','来华人数']
        },
        xAxis : [
            {
                type : 'category',
                data : ['2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'GDP',
                axisLabel : {
                    formatter: '{value}'
                }
            },
            {
                type : 'value',
                name : '来华人数',
                axisLabel : {
                    formatter: '{value} 人'
                }
            }
        ],

        series : [

            {
                itemStyle: {
                    color:""
                },
                x: '50%',
                name:'GDP',
                type:'bar',
                data:[16071.44,18589.58,21765.66,26801.94,31675.17,34562.92,40890.30,48412.35,53412.30,58801.88,63646.27]
            },
            {
                x: '50%',
                name:'来华人数',
                type:'line',
                yAxisIndex: 1,
                data:[110844,141087,162695,195503,223499,238184,265090,292611,328330,356499,377054]
            }
        ]
    };

    var barOption1 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['亚洲','非洲','欧洲','美洲','大洋洲']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'孔子学院',
                type:'pie',
                radius : [20, 110],
                //center : ['25%', 200],
                roseType : 'radius',
                width: '40%',       // for funnel
                max: 40,            // for funnel
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            show : true
                        }
                    }
                },
                data:[
                    {value:103, name:'亚洲'},
                    {value:42, name:'非洲'},
                    {value:159, name:'欧洲'},
                    {value:154, name:'美洲'},
                    {value:17, name:'大洋洲'}
                ]
            }
        ]
    };
    var barOption2 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show:false,
            x : 'center',
            y : 'bottom',
            data:['亚洲','非洲','欧洲','美洲','大洋洲']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'孔子课堂',
                type:'pie',
                radius : [30, 110],
                //center : ['75%', 200],
                roseType : 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:79, name:'亚洲'},
                    {value:18, name:'非洲'},
                    {value:211, name:'欧洲'},
                    {value:478, name:'美洲'},
                    {value:65, name:'大洋洲'},
                ]
            }
        ]
    };
    var pieOption = {
        title : {
            show:false,
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            // orient : 'vertical',
            x : 'center',
            data:['北京','上海','广州','南京','黑龙江','西藏']
        },
        addDataAnimation:false,
        //animation:false,
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'北京'}

                ]
            }
        ]
    };
    var mapOption = {
        backgroundColor: 'transparent',
        title : {
            show : true,
            text: '孔子学院分布全球分布',
            //subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
            //sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
            x:'center',
            y:'top',
            textStyle:{
                color:'white'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                console.log(params)

                if(params.value !== "-"){
                    if(params.name.match('>')){
                        return params.name.split('>')[1] + ':' + params.value + '所';
                    }else{
                        return params.name + ':' + params.value + '所';
                    }
                }else{
                    return params.name;
                }
            }
        },
        toolbox: {
            show : false,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: false},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        dataRange: {
            show : false,
            min: 0,
            max: 50,
            text:['High','Low'],
            realtime: false,
            calculable : true
        },
        roamController: {
            show: true,
            x: 'left',
            mapTypeControl: {
                'world': true
            }
        },
        series : [
            {
                name: '',
                type: 'map',
                mapType: 'world',
                roam: false,
                hoverable:false,
                mapLocation: {
                    y : "center"

                },
                itemStyle:{
                    normal:{
                        borderColor:'white',
                        borderWidth:0.5,
                        areaStyle:{
                            color: 'transparent'
                        }
                    }
                },
                data:[],
                markLine : {
                    smooth:true,
                    effect : {
                        show: true,
                        scaleSize: 1,
                        period: 60,
                        color: 'white',
                        shadowBlur: 10
                    },
                    itemStyle : {
                        normal: {
                            color:'#88fcf6',
                            borderWidth:0.5,
                            //borderColor:'rgba(30,144,255,0.5)',
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data : [
                        [{name:"中国"},{name:"阿富汗",value:1}],
                        [{name:"中国"},{name:"阿尔巴尼亚",value:1}],
                        [{name:"中国"},{name:"安哥拉",value:1}],
                        [{name:"中国"},{name:"阿根廷",value:2}],
                        [{name:"中国"},{name:"亚美尼亚",value:1}],
                        [{name:"中国"},{name:"澳大利亚",value:13}],
                        [{name:"中国"},{name:"奥地利",value:2}],
                        [{name:"中国"},{name:"阿塞拜疆",value:1}],
                        [{name:"中国"},{name:"孟加拉",value:1}],
                        [{name:"中国"},{name:"白俄罗斯",value:2}],
                        [{name:"中国"},{name:"比利时",value:4}],
                        [{name:"中国"},{name:"贝宁",value:1}],
                        [{name:"中国"},{name:"玻利维亚",value:1}],
                        [{name:"中国"},{name:"博茨瓦纳",value:1}],
                        [{name:"中国"},{name:"巴西",value:8}],
                        [{name:"中国"},{name:"保加利亚",value:2}],
                        [{name:"中国"},{name:"布隆迪",value:1}],
                        [{name:"中国"},{name:"喀麦隆",value:1}],
                        [{name:"中国"},{name:"加拿大",value:13}],
                        [{name:"中国"},{name:"智利",value:2}],
                        [{name:"中国"},{name:"哥伦比亚",value:3}],
                        [{name:"中国"},{name:"哥斯达黎加",value:1}],
                        [{name:"中国"},{name:"克罗地亚",value:1}],
                        [{name:"中国"},{name:"古巴",value:1}],
                        [{name:"中国"},{name:"塞浦路斯",value:1}],
                        [{name:"中国"},{name:"捷克",value:1}],
                        [{name:"中国"},{name:"丹麦",value:3}],
                        [{name:"中国"},{name:"厄瓜多尔",value:1}],
                        [{name:"中国"},{name:"埃及",value:2}],
                        [{name:"中国"},{name:"厄立特里亚",value:1}],
                        [{name:"中国"},{name:"爱沙尼亚",value:1}],
                        [{name:"中国"},{name:"埃塞俄比亚",value:3}],
                        [{name:"中国"},{name:"斐济",value:1}],
                        [{name:"中国"},{name:"芬兰",value:1}],
                        [{name:"中国"},{name:"法国",value:16}],
                        [{name:"中国"},{name:"格鲁吉亚",value:1}],
                        [{name:"中国"},{name:"德国",value:15}],
                        [{name:"中国"},{name:"加纳",value:1}],
                        [{name:"中国"},{name:"希腊",value:1}],
                        [{name:"中国"},{name:"圭亚那",value:1}],
                        [{name:"中国"},{name:"匈牙利",value:3}],
                        [{name:"中国"},{name:"冰岛",value:1}],
                        [{name:"中国"},{name:"印度",value:2}],
                        [{name:"中国"},{name:"印度尼西亚",value:6}],
                        [{name:"中国"},{name:"伊朗",value:1}],
                        [{name:"中国"},{name:"爱尔兰",value:2}],
                        [{name:"中国"},{name:"以色列",value:2}],
                        [{name:"中国"},{name:"意大利",value:11}],
                        [{name:"中国"},{name:"牙买加",value:1}],
                        [{name:"中国"},{name:"日本",value:13}],
                        [{name:"中国"},{name:"哈萨克斯坦",value:4}],
                        [{name:"中国"},{name:"肯尼亚",value:3}],
                        [{name:"中国"},{name:"吉尔吉斯斯坦",value:3}],
                        [{name:"中国"},{name:"老挝",value:1}],
                        [{name:"中国"},{name:"拉脱维亚",value:1}],
                        [{name:"中国"},{name:"黎巴嫩",value:1}],
                        [{name:"中国"},{name:"利比里亚",value:1}],
                        [{name:"中国"},{name:"立陶宛",value:1}],
                        [{name:"中国"},{name:"马其顿",value:1}],
                        [{name:"中国"},{name:"马达加斯加",value:1}],
                        [{name:"中国"},{name:"马拉维",value:1}],
                        [{name:"中国"},{name:"马来西亚",value:1}],
                        [{name:"中国"},{name:"马里",value:1}],
                        [{name:"中国"},{name:"墨西哥",value:5}],
                        [{name:"中国"},{name:"摩尔多瓦",value:1}],
                        [{name:"中国"},{name:"蒙古",value:1}],
                        [{name:"中国"},{name:"黑山",value:1}],
                        [{name:"中国"},{name:"摩洛哥",value:2}],
                        [{name:"中国"},{name:"莫桑比克",value:1}],
                        [{name:"中国"},{name:"纳米比亚",value:1}],
                        [{name:"中国"},{name:"尼泊尔",value:1}],
                        [{name:"中国"},{name:"新西兰",value:3}],
                        [{name:"中国"},{name:"尼日利亚",value:2}],
                        [{name:"中国"},{name:"挪威",value:1}],
                        [{name:"中国"},{name:"巴基斯坦",value:3}],
                        [{name:"中国"},{name:"秘鲁",value:4}],
                        [{name:"中国"},{name:"菲律宾",value:3}],
                        [{name:"中国"},{name:"波兰",value:4}],
                        [{name:"中国"},{name:"葡萄牙",value:2}],
                        [{name:"中国"},{name:"塞尔维亚",value:2}],
                        [{name:"中国"},{name:"刚果",value:1}],
                        [{name:"中国"},{name:"罗马尼亚",value:4}],
                        [{name:"中国"},{name:"俄罗斯",value:18}],
                        [{name:"中国"},{name:"卢旺达",value:1}],
                        [{name:"中国"},{name:"塞内加尔",value:1}],
                        [{name:"中国"},{name:"塞拉利昂",value:1}],
                        [{name:"中国"},{name:"斯洛伐克",value:1}],
                        [{name:"中国"},{name:"斯洛文尼亚",value:1}],
                        [{name:"中国"},{name:"南非",value:5}],
                        [{name:"中国"},{name:"韩国",value:20}],
                        [{name:"中国"},{name:"西班牙",value:6}],
                        [{name:"中国"},{name:"斯里兰卡",value:1}],
                        [{name:"中国"},{name:"苏丹",value:1}],
                        [{name:"中国"},{name:"瑞典",value:4}],
                        [{name:"中国"},{name:"瑞士",value:2}],
                        [{name:"中国"},{name:"塔吉克斯坦",value:1}],
                        [{name:"中国"},{name:"泰国",value:12}],
                        [{name:"中国"},{name:"巴哈马",value:1}],
                        [{name:"中国"},{name:"多哥",value:1}],
                        [{name:"中国"},{name:"特立尼达和多巴哥",value:1}],
                        [{name:"中国"},{name:"突尼斯",value:1}],
                        [{name:"中国"},{name:"土耳其",value:3}],
                        [{name:"中国"},{name:"乌干达",value:1}],
                        [{name:"中国"},{name:"乌克兰",value:5}],
                        [{name:"中国"},{name:"阿拉伯联合酋长国",value:2}],
                        [{name:"中国"},{name:"英国",value:25}],
                        [{name:"中国"},{name:"坦桑尼亚",value:2}],
                        [{name:"中国"},{name:"美国",value:100}],
                        [{name:"中国"},{name:"乌兹别克斯坦",value:2}],
                        [{name:"中国"},{name:"赞比亚",value:1}],
                        [{name:"中国"},{name:"津巴布韦",value:1}],
                        [{name:"中国"},{name:"荷兰",value:2}],
                        [{name:"中国"},{name:"新加坡",value:1}],
                        [{name:"中国"},{name:"香港",value:1}],
                        [{name:"中国"},{name:"瑞士",value:2}]
                    ]
                },
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 10 + v/10
                    },
                    effect : {
                        show: true,
                        color:"#ff9494",
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        }
                    },
                    data : [
                        {name:"阿富汗",value:1},
                        {name:"阿尔巴尼亚",value:1},
                        {name:"安哥拉",value:1},
                        {name:"阿根廷",value:2},
                        {name:"亚美尼亚",value:1},
                        {name:"澳大利亚",value:13},
                        {name:"奥地利",value:2},
                        {name:"阿塞拜疆",value:1},
                        {name:"孟加拉",value:1},
                        {name:"白俄罗斯",value:2},
                        {name:"比利时",value:4},
                        {name:"贝宁",value:1},
                        {name:"玻利维亚",value:1},
                        {name:"博茨瓦纳",value:1},
                        {name:"巴西",value:8},
                        {name:"保加利亚",value:2},
                        {name:"布隆迪",value:1},
                        {name:"喀麦隆",value:1},
                        {name:"加拿大",value:13},
                        {name:"智利",value:2},
                        {name:"哥伦比亚",value:3},
                        {name:"哥斯达黎加",value:1},
                        {name:"克罗地亚",value:1},
                        {name:"古巴",value:1},
                        {name:"塞浦路斯",value:1},
                        {name:"捷克",value:1},
                        {name:"丹麦",value:3},
                        {name:"厄瓜多尔",value:1},
                        {name:"埃及",value:2},
                        {name:"厄立特里亚",value:1},
                        {name:"爱沙尼亚",value:1},
                        {name:"埃塞俄比亚",value:3},
                        {name:"斐济",value:1},
                        {name:"芬兰",value:1},
                        {name:"法国",value:16},
                        {name:"格鲁吉亚",value:1},
                        {name:"德国",value:15},
                        {name:"加纳",value:1},
                        {name:"希腊",value:1},
                        {name:"圭亚那",value:1},
                        {name:"匈牙利",value:3},
                        {name:"冰岛",value:1},
                        {name:"印度",value:2},
                        {name:"印度尼西亚",value:6},
                        {name:"伊朗",value:1},
                        {name:"爱尔兰",value:2},
                        {name:"以色列",value:2},
                        {name:"意大利",value:11},
                        {name:"牙买加",value:1},
                        {name:"日本",value:13},
                        {name:"哈萨克斯坦",value:4},
                        {name:"肯尼亚",value:3},
                        {name:"吉尔吉斯斯坦",value:3},
                        {name:"老挝",value:1},
                        {name:"拉脱维亚",value:1},
                        {name:"黎巴嫩",value:1},
                        {name:"利比里亚",value:1},
                        {name:"立陶宛",value:1},
                        {name:"马其顿",value:1},
                        {name:"马达加斯加",value:1},
                        {name:"马拉维",value:1},
                        {name:"马来西亚",value:1},
                        {name:"马里",value:1},
                        {name:"墨西哥",value:5},
                        {name:"摩尔多瓦",value:1},
                        {name:"蒙古",value:1},
                        {name:"黑山",value:1},
                        {name:"摩洛哥",value:2},
                        {name:"莫桑比克",value:1},
                        {name:"纳米比亚",value:1},
                        {name:"尼泊尔",value:1},
                        {name:"新西兰",value:3},
                        {name:"尼日利亚",value:2},
                        {name:"挪威",value:1},
                        {name:"巴基斯坦",value:3},
                        {name:"秘鲁",value:4},
                        {name:"菲律宾",value:3},
                        {name:"波兰",value:4},
                        {name:"葡萄牙",value:2},
                        {name:"塞尔维亚",value:2},
                        {name:"刚果",value:1},
                        {name:"罗马尼亚",value:4},
                        {name:"俄罗斯",value:18},
                        {name:"卢旺达",value:1},
                        {name:"塞内加尔",value:1},
                        {name:"塞拉利昂",value:1},
                        {name:"斯洛伐克",value:1},
                        {name:"斯洛文尼亚",value:1},
                        {name:"南非",value:5},
                        {name:"韩国",value:20},
                        {name:"西班牙",value:6},
                        {name:"斯里兰卡",value:1},
                        {name:"苏丹",value:1},
                        {name:"瑞典",value:4},
                        {name:"瑞士",value:2},
                        {name:"塔吉克斯坦",value:1},
                        {name:"泰国",value:12},
                        {name:"巴哈马",value:1},
                        {name:"多哥",value:1},
                        {name:"特立尼达和多巴哥",value:1},
                        {name:"突尼斯",value:1},
                        {name:"土耳其",value:3},
                        {name:"乌干达",value:1},
                        {name:"乌克兰",value:5},
                        {name:"阿拉伯联合酋长国",value:2},
                        {name:"英国",value:25},
                        {name:"坦桑尼亚",value:2},
                        {name:"美国",value:100},
                        {name:"乌兹别克斯坦",value:2},
                        {name:"赞比亚",value:1},
                        {name:"津巴布韦",value:1},
                        {name:"荷兰",value:2},
                        {name:"新加坡",value:1},
                        {name:"香港",value:1},
                        {name:"瑞士",value:2}
                    ]
                },
                geoCoord:{
                    '香港':[114.2,22,2],
                    '中国':[116,39],
                    '安道尔':[1.5,42.5],
                    '阿拉伯联合酋长国':[54,24],
                    '阿富汗':[65,33],
                    '安提瓜和巴布达':[-61.8,17.05],
                    '安圭拉':[-63.1667,18.25],
                    '阿尔巴尼亚':[20,41],
                    '亚美尼亚':[45,40],
                    '荷属安地列斯':[-68.75,12.25],
                    '安哥拉':[18.5,-12.5],
                    '南极洲':[0,-90],
                    '阿根廷':[-64,-34],
                    '美属萨摩亚':[-170,-14.3333],
                    '奥地利':[13.3333,47.3333],
                    '澳大利亚':[133,-27],
                    '阿鲁巴':[-69.9667,12.5],
                    '阿塞拜疆':[47.5,40.5],
                    '波斯尼亚和黑塞哥维那':[18,44],
                    '巴巴多斯':[-59.5333,13.1667],
                    '孟加拉':[90,24],
                    '比利时':[4,50.8333],
                    '布基纳法索':[-2,13],
                    '保加利亚':[25,43],
                    '巴林':[50.55,26],
                    '布隆迪':[30,-3.5],
                    '贝宁':[2.25,9.5],
                    '百慕大':[-64.75,32.3333],
                    '文莱':[114.6667,4.5],
                    '玻利维亚':[-65,-17],
                    '巴西':[-55,-10],
                    '巴哈马':[-76,24.25],
                    '不丹':[90.5,27.5],
                    '布维岛':[3.4,-54.4333],
                    '博茨瓦纳':[24,-22],
                    '白俄罗斯':[28,53],
                    '伯利兹':[-88.75,17.25],
                    '加拿大':[-95,60],
                    '科科斯（基林）群岛':[96.8333,-12.5],
                    '刚果':[25,0],
                    '中非共和国':[21,7],
                    '刚果':[15,-1],
                    '瑞士':[8,47],
                    '科特迪瓦':[-5,8],
                    '库克群岛':[-159.7667,-21.2333],
                    '智利':[-71,-30],
                    '喀麦隆':[12,6],
                    '哥伦比亚':[-72,4],
                    '哥斯达黎加':[-84,10],
                    '古巴':[-80,21.5],
                    '佛得角':[-24,16],
                    '圣诞岛':[105.6667,-10.5],
                    '塞浦路斯':[33,35],
                    '捷克':[15.5,49.75],
                    '德国':[9,51],
                    '吉布提':[43,11.5],
                    '丹麦':[10,56],
                    '多米尼克':[-61.3333,15.4167],
                    '多米尼加共和国':[-70.6667,19],
                    '阿尔及利亚':[3,28],
                    '厄瓜多尔':[-77.5,-2],
                    '爱沙尼亚':[26,59],
                    '埃及':[30,27],
                    '西撒哈拉':[-13,24.5],
                    '厄立特里亚':[39,15],
                    '西班牙':[-4,40],
                    '埃塞俄比亚':[38,8],
                    '芬兰':[26,64],
                    '斐济':[175,-18],
                    '马尔维纳斯群岛':[-59,-51.75],
                    '密克罗尼西亚':[158.25,6.9167],
                    '法罗群岛':[-7,62],
                    '法国':[2,46],
                    '加蓬':[11.75,-1],
                    '英国':[-2,54],
                    '格林纳达':[-61.6667,12.1167],
                    '格鲁吉亚':[43.5,42],
                    '法属圭亚那':[-53,4],
                    '加纳':[-2,8],
                    '直布罗陀':[-5.3667,36.1833],
                    '格陵兰岛':[-40,72],
                    '冈比亚':[-16.5667,13.4667],
                    '几内亚':[-10,11],
                    '瓜德罗普岛':[-61.5833,16.25],
                    '赤道几内亚':[10,2],
                    '希腊':[22,39],
                    '南乔治亚岛和南桑威奇群岛':[-37,-54.5],
                    '危地马拉':[-90.25,15.5],
                    '关岛':[144.7833,13.4667],
                    '几内亚比绍':[-15,12],
                    '圭亚那':[-59,5],
                    '赫德岛和麦当劳群岛':[72.5167,-53.1],
                    '洪都拉斯':[-86.5,15],
                    '克罗地亚':[15.5,45.1667],
                    '海地':[-72.4167,19],
                    '匈牙利':[20,47],
                    '印度尼西亚':[120,-5],
                    '爱尔兰':[-8,53],
                    '以色列':[34.75,31.5],
                    '印度':[77,20],
                    '英属印度洋领地':[71.5,-6],
                    '伊拉克':[44,33],
                    '伊朗':[53,32],
                    '冰岛':[-18,65],
                    '意大利':[12.8333,42.8333],
                    '牙买加':[-77.5,18.25],
                    '乔丹':[36,31],
                    '日本':[138,36],
                    '肯尼亚':[38,1],
                    '吉尔吉斯斯坦':[75,41],
                    '柬埔寨':[105,13],
                    '基里巴斯':[173,1.4167],
                    '科摩罗':[44.25,-12.1667],
                    '圣基茨和尼维斯':[-62.75,17.3333],
                    '朝鲜':[127,40],
                    '韩国':[127.5,37],
                    '科威特':[47.6581,29.3375],
                    '开曼群岛':[-80.5,19.5],
                    '哈萨克斯坦':[68,48],
                    '老挝':[105,18],
                    '黎巴嫩':[35.8333,33.8333],
                    '圣露西亚':[-61.1333,13.8833],
                    '列支敦士登':[9.5333,47.1667],
                    '斯里兰卡':[81,7],
                    '利比里亚':[-9.5,6.5],
                    '莱索托':[28.5,-29.5],
                    '立陶宛':[24,56],
                    '卢森堡':[6.1667,49.75],
                    '拉脱维亚':[25,57],
                    '阿拉伯利比亚民众国':[17,25],
                    '摩洛哥':[-5,32],
                    '摩纳哥':[7.4,43.7333],
                    '摩尔多瓦':[29,47],
                    '黑山':[19,42],
                    '马达加斯加':[47,-20],
                    '马绍尔群岛':[168,9],
                    '马其顿':[22,41.8333],
                    '马里':[-4,17],
                    '缅甸':[98,22],
                    '蒙古':[105,46],
                    '北马里亚纳群岛':[145.75,15.2],
                    '马提尼克岛':[-61,14.6667],
                    '毛里塔尼亚':[-12,20],
                    '蒙特塞拉特':[-62.2,16.75],
                    '马耳他':[14.5833,35.8333],
                    '毛里求斯':[57.55,-20.2833],
                    '马尔代夫':[73,3.25],
                    '马拉维':[34,-13.5],
                    '墨西哥':[-102,23],
                    '马来西亚':[112.5,2.5],
                    '莫桑比克':[35,-18.25],
                    '纳米比亚':[17,-22],
                    '新喀里多尼亚':[165.5,-21.5],
                    '尼日尔':[8,16],
                    '诺福克岛':[167.95,-29.0333],
                    '尼日利亚':[8,10],
                    '尼加拉瓜':[-85,13],
                    '荷兰':[5.75,52.5],
                    '挪威':[10,62],
                    '尼泊尔':[84,28],
                    '瑙鲁':[166.9167,-0.5333],
                    '纽埃':[-169.8667,-19.0333],
                    '新西兰':[174,-41],
                    '阿曼':[57,21],
                    '巴拿马':[-80,9],
                    '秘鲁':[-76,-10],
                    '法属波利尼西亚':[-140,-15],
                    '巴布亚新几内亚':[147,-6],
                    '菲律宾':[122,13],
                    '巴基斯坦':[70,30],
                    '波兰':[20,52],
                    '圣皮埃尔和密克隆岛':[-56.3333,46.8333],
                    '波多黎各':[-66.5,18.25],
                    '葡萄牙':[-8,39.5],
                    '帕劳':[134.5,7.5],
                    '巴拉圭':[-58,-23],
                    '卡塔尔':[51.25,25.5],
                    '留尼旺岛':[55.6,-21.1],
                    '罗马尼亚':[25,46],
                    '塞尔维亚':[21,44],
                    '俄罗斯':[100,60],
                    '卢旺达':[30,-2],
                    '沙特阿拉伯':[45,25],
                    '所罗门群岛':[159,-8],
                    '塞舌尔':[55.6667,-4.5833],
                    '苏丹':[30,15],
                    '瑞典':[15,62],
                    '新加坡':[103.8,1.3667],
                    '斯洛文尼亚':[15,46],
                    '斯洛伐克':[19.5,48.6667],
                    '塞拉利昂':[-11.5,8.5],
                    '圣马力诺':[12.4167,43.7667],
                    '塞内加尔':[-14,14],
                    '索马里':[49,10],
                    '苏里南':[-56,4],
                    '圣多美和普林西比':[7,1],
                    '萨尔瓦多':[-88.9167,13.8333],
                    '叙利亚':[38,35],
                    '斯威士兰':[31.5,-26.5],
                    '特克斯和凯科斯群岛':[-71.5833,21.75],
                    '乍得':[19,15],
                    '多哥':[1.1667,8],
                    '泰国':[100,15],
                    '塔吉克斯坦':[71,39],
                    '托克劳':[-172,-9],
                    '土库曼斯坦':[60,40],
                    '突尼斯':[9,34],
                    '汤加':[-175,-20],
                    '土耳其':[35,39],
                    '特立尼达和多巴哥':[-61,11],
                    '图瓦卢':[178,-8],
                    '坦桑尼亚':[35,-6],
                    '乌克兰':[32,49],
                    '乌干达':[32,1],
                    '美国':[-97,38],
                    '乌拉圭':[-56,-33],
                    '乌兹别克斯坦':[64,41],
                    '委内瑞拉':[-66,8],
                    '越南':[106,16],
                    '瓦努阿图':[167,-16],
                    '瓦利斯和富图纳群岛':[-176.2,-13.3],
                    '萨摩亚':[-172.3333,-13.5833],
                    '也门':[48,15],
                    '马约特':[45.1667,-12.8333],
                    '南非':[24,-29],
                    '赞比亚':[30,-15],
                    '津巴布韦':[30,-20]
                }


            }
        ]
    };







    //mapChart.setTheme(roma);
    barChart1.setTheme(roma);
    barChart2.setTheme(roma);
    hdChart.setTheme(roma);

    //pieChart.setTheme(roma);
    $(function(){
        var p = {};
        $("html,body").animate({scrollTop:$("body").offset().top},100,function(){
            console.log('gettn top')
            wow = new WOW(
                {
                    animateClass: 'animated',
                    offset:       100,
                    callback:     function(box) {

                        if(!p[box.id]){
                            p[box.id] = true;
                            console.log(box.id);
                            sc(box.id);
                        }
                    }
                }
            );
            wow.init();
            var ss0 = '★ 2006-2007年，孔子学院以平均4天一所的速度让世界为之惊叹。';
            var ss1 = '★ 2007年4月9日，孔子学院总部揭牌。';
            var ss2 = '★ 2011年10月28日，斯坦福大学孔子学院成立；2013年4月9日，哥伦比亚大学孔子学院成立。';
            var ss3 = '★ 2015年始到今天，又有13家孔子学院（包括课堂）在美国加州圣芭芭拉分校、澳大利亚悉尼大学、安哥拉内图大学、韩国世明大学等地揭牌开学。';
            var ss4 = '★ 目前仍有70多个国家和200多所大学正在积极申办孔子学院。';
            var shuzi = function(i){
                if(i == 0){
                    $('#num1 .pure-u-21-24').typetype(ss0,{e:0,t:50,callback:function(){
                        $('#num2 .pure-u-21-24').typetype(ss1,{e:0,t:50,callback:function(){
                            $('#num3 .pure-u-21-24').typetype(ss2,{e:0,t:50,callback:function(){
                                $('#num4 .pure-u-21-24').typetype(ss3,{e:0,t:50,callback:function(){
                                    $('#num5 .pure-u-21-24').typetype(ss4,{e:0,t:50,callback:function(){

                                    }})
                                }})
                            }})
                        }})
                    }})
                }else if(i == 1){
                    $('#num2 .pure-u-21-24').typetype('★ 2007年4月9日，孔子学院总部揭牌。')
                }else if(i == 2){
                    $('#num3 .pure-u-21-24').typetype('★ 2011年10月28日，斯坦福大学孔子学院成立；2013年4月9日，哥伦比亚大学孔子学院成立。')
                }else if(i == 3){
                    $('#num4 .pure-u-21-24').typetype('★ 2015年始到今天，又有13家孔子学院（包括课堂）在美国加州圣芭芭拉分校、澳大利亚悉尼大学、安哥拉内图大学、韩国世明大学等地揭牌开学。')
                }else if(i == 4){
                    $('#num5>div').typetype('★ 目前仍有70多个国家和200多所大学正在积极申办孔子学院。')
                }
            }
            var sc = function(k){
                if(k == 'hd'){
                    hdChart.setOption(hd);

                }
                if(k=='worldMap'){
                    mapChart.setOption(mapOption);

                }
                if(k=='bar1'){
                    barChart1.setOption(barOption1);

                }
                if(k=='bar2'){
                    barChart2.setOption(barOption2);

                }
                if(k == 'gear'){
                    $('#gear').addClass('rolling');
                }
                if(k == 'num1'){
                    shuzi(0)
                }
//                if(k == 'num2'){
//                    shuzi(1)
//                }
//                if(k == 'num3'){
//                    shuzi(2)
//                }
//                if(k == 'num4'){
//                    shuzi(3)
//                }
//                if(k == 'num5'){
//                    shuzi(4)
//                }
            }
        });

    })
    function pieAnima(){
        var pieIndex = 0;
        var timeTicket = setInterval(function (){
            pieIndex += 1;
            // 动态数据接口 addData
            if(pieIndex==6){
                clearInterval(timeTicket);
                return;
            }
            pieChart.addData([
                [
                    0,        // 系列索引
                    pieData[pieIndex],
                    false,     // 新增数据是否从队列头部插入
                    true     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头

                ]
            ]);
        }, 500);

    }

})



