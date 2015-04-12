// Dimensions of sunburst.
var width = 600;
var height = 650;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 75, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "bad1": "#305067",
  "good1": "#d86968",
  "soso1": "#e4e3d9",
  "blank": "#fff",
  "soso": "#e4e3d9",
  "good": "#ee6363",
  "bad": "#c2e5e1",
  "yizhan": "#e4e3d9",
  "balihehui": "#1f6180",
  "erzhan": "#e4e3d9",
  "neizhan": "#1f6180",
  "situleideng": "#1f6180",
  "lunrenminminzhuzhuanzheng": "#1f6180",
  "broken": "#1f6180",
  "change": "#de5949",
  "pingpangqiu": "#de5949",
  "jixinge": "#de5949",
  "shanghaigongbao": "#de5949",
  "fute": "#de5949",
  "jianjiaogongbao": "#de5949",
  "jianjiao": "#de5949",
  "dengxiaoping": "#de5949",
  "maoyixieding": "#de5949",
  "baqigongbao": "#de5949",
  "aonier": "#de5949",
  "ligen": "#de5949",
  "lixiannian": "#de5949",
  "laobushi": "#de5949",
  "gailuopu": "#de5949",
  "weihuguanxi": "#e4e3d9",
  "taiwan": "#1f6180",
  "zhongguobengkuilun": "#1f6180",
  "gaishanguanxi": "#de5949",
  "jiangzemin": "#de5949",
  "kelindun": "#de5949",
  "zhaguanshijian": "#1f6180",
  "jiarushimao": "#de5949",
  "yongjiuzhengchangmaoyi": "#de5949",
  "zhuangjishijian": "#1f6180",
  "kongbuzhuyi": "#de5949",
  "xiaobushi": "#de5949",
  "hujintao": "#de5949",
  "aobama": "#de5949",
  "xijinping": "#de5949",
  "chongfanyazhou": "#1f6180",
  "xinxingdaguoguanxi": "#de5949",
  "sinuodeng": "#1f6180",
  "donghaijushi": "#1f6180",
  "apec": "#de5949",
  "kongbuzhuyituichao": "#e4e3d9",
  "wilson": "#ededed",
  "harding": "#ffe4c4",
  "coolidge": "#fff0f5",
  "hoover": "#fdf5e6",
  "roosevelt": "#eee5de",
  "truman": "#eee9bf",
  "eisenhower": "#faebd7",
  "kennedy": "#e0eee0",
  "johnson": "#e0eee5",
  "nixon": "#e0eee5",
  "ford": "#faf0e6",
  "carter": "#f4f4f4",
  "reagan": "#d3d3d3",
  "oldbush": "#fafbec",
  "clinton": "#f2f2f2",
  "bush": "#fefcf7",
  "obama": "#fdf9f3"
};


// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("data/history.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

   var percentage = d.value;
  var percentageString = d.name;
 
  var tag = d.name;
  var tagExplain = {"bad1":["中美关系对立期",2],
					"good1":["中美关系友好期",1.4],
					"soso1":["中美关系缓和期",1.5],
					
					"bad":["对立期",2],
					"good":["友好期",1.4],
					"soso":["缓和期",1.5],
					
					"wilson":["1913~1920年  美国总统威尔逊任期",2],
					"harding":["1921~1923年  美国总统哈定任期",2],
					"coolidge":["1923~1928年  美国总统柯立芝任期",2],
					"hoover":["1929~1932年  美国总统胡佛任期",2],
					"roosevelt":["1933~1945年  美国总统罗斯福任期",2],
					"truman":["1945~1952年  美国总统杜鲁门任期",2],
					"eisenhower":["1953~1961年  美国总统艾森豪威尔任期",2],
					"kennedy":["1961~1963年  美国总统肯尼迪任期",2],
					"johnson":["1963~1968年  美国总统约翰逊任期",2],
					"nixon":["1969~1974年  美国总统尼克松任期",2],
					"ford":["1974~1976年  美国总统福特任期",2],
					"carter":["1977~1980年  美国总统卡特任期",2],
					"reagan":["1981~1988年  美国总统里根任期",2],
					"oldbush":["1989~1992年  美国总统乔治·布什任期",2],
					"clinton":["1993~2000年  美国总统克林顿任期",2],
					"bush":["2001~2009年  美国总统乔治·沃克·布什任期",2],
					"obama":["2009年至今  美国总统奥巴马任期",2],
				
					"yizhan":["1914~1918年  第一次世界大战 中、美两国同为协约国",2.0],
					"balihehui":["1919年  巴黎和会 美国绥靖日本牺牲中国利益",1.2],
					"erzhan":["1941年  珍珠港事件后 美国对日宣战 中美进行战略合作",3.4],
					"neizhan":["1946~1949年  国共内战全面爆发 美国援蒋打内战",2.1],
					"situleideng":["1949年  南京解放 美国大使司徒雷登没有随国民政府南下广州 留在南京",1.3],
					"lunrenminminzhuzhuanzheng":["1949年  毛泽东发表文章《论人民民主专政》 明确宣称将对苏联奉行“一边倒”的方针",1.0],
					"broken":["1950~1968年  中美136次会谈只达成了一个协议",7.0],
					"change":["1969年  尼克松决定引入中国为转化力量，打破美苏两极对峙局面",3.5],
					"pingpangqiu":[" 1971年  毛泽东亲自批准了邀请美国乒乓球代表团访华，打开了隔绝22年之久的中美交往的大门",1.0],
					"jixinge":["1971年  美国国务卿基辛格秘密访华",1.7],
					"shanghaigongbao":["1972年  尼克松总统访华，签署第一个中美联合公报《上海公报》",1.9],
					"nikesong":["1973年  美国撤军越南，中美双方互设联络处，走向关系正常化",2.2],
					"fute":["1975年  福特总统携家人及政务人员访华",1.7],
					"jianjiaogongbao":["1978年  中美两国签署了《中美建交公报》，标志着中美隔绝状态的结束和关系正常化进程的开始",1.7],
					"dengxiaoping":["1979年  邓小平访问美国",1.7],
					"maoyixieding":["1979年  中美贸易关系协定签署，两国经济贸易关系良性发展",1.7],
					"baqigongbao":["1982年8月17日《中美“八·一七”联合公报》发表",1.7],
					"aonier":["1983年  美国众议院议长奥尼尔访华",1.7],
					"ligen":["1984年  美国总统里根访问中国",1.7],
					"lixiannian":["1985年  国家主席李先念访问美国",1.7],
					"laobushi":["1989年  老布什就任美国总统，他的第一次出访就是到中国",1.7],
					"gailuopu":["1989年  根据盖洛普民意调查，70%的美国人对中国有好感或极有好感",1.7],
					"weihuguanxi":["1989年 北京发生政治风波，老布什艰难维护与中国的关系",1.7],
					"taiwan":["1992年  老布什在支持率低迷的压力下，向台湾出售150架F-16战斗机",1.7],
					"zhongguobengkuilun":["美国兴起“中国崩溃论”的言论",1.7],
					"gaishanguanxi":["1996年  克林顿当选美国总统，要与中国改善关系",1.7],
					"jiangzemin":["1997年  江泽民访美",1.7],
					"kelindun":["1998年  克林顿访华",1.7],
					"zhaguanshijian":["1999年  美国在科索沃战争中轰炸中国驻南联盟使馆,中方三人死亡20人受伤",1.7],
					"jiarushimao":["1999年  中美两国就中国加入世贸组织达成双边协议",1.7],
					"yongjiuzhengchangmaoyi":["2000年  美国通过了中国永久性正常贸易关系法案",1.7],
					"zhuangjishijian":["2001年  911“撞机事件”",1.7],
					"kongbuzhuyi":["2001年  美国认定恐怖主义是国家安全的主要威胁，中国一变而为反恐“盟友”，达成“建设性合作关系”",1.7],
					"xiaobushi":["2005年  小布什访华",1.7],
					"hujintao":["2006年  胡锦涛访美",1.7],
					"aobama":["2009年  奥巴马访华",1.7],
					"xijinping":["2012年  习近平访问美国",1.7],
					"chongfanyazhou":["2012年  奥巴马提出“重返亚洲”战略",1.7],
					"xinxingdaguoguanxi":["2013年  习近平在加州庄园晤奥巴马 定调中美新型大国关系",1.7],
					"sinuodeng":["2013年  斯诺登“棱镜门”事件",1.7],
					"donghaijushi":["2013年  东海局势考验中美新型大国关系",1.7],
					"apec":["2014年  奥巴马来华出席APEC会议并对中国进行国事访问",1.7],
					"kongbuzhuyituichao":["2014年  恐怖主义退潮，中美新型大国关系再次面临考验",1.7]
					

					}; 
 
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

 
	  
 
  d3.select("#tagExplain")
      .text(tagExplain[tag][0]);

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
	  

}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "right")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");
}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};