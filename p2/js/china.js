var width = 1287,
    height = 680;

var projection = d3.geo.mercator()
						.center([110, 40])
						.scale(800)
    					.translate([width/2.3, height/2.2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("class","map1")
    .attr("width", width)
    .attr("height", height);

d3.json("data/china1.json", function(error, china1) {
  svg.selectAll(".china")
      .data(topojson.feature(china1, china1.objects.china).features)
    .enter().append("path")
      .attr("class", function(d) { return "china " + d.properties.id; })
      .attr("d", path)
	  .on("mouseover",function(){
                d3.select(this)
                    ;
            })
      .on("mouseout",function(){
                d3.select(this)
                    ;
            });
	  
});