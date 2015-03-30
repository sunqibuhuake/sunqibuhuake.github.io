(function(){

    var tree = raw.models.tree();

    tree.dimensions().remove('size');
    tree.dimensions().remove('color');
    tree.dimensions().remove('label');

    var chart = raw.chart()
        .title('环形树状图（Circular Dendrogram）')
        .description(
            "这种图像用来表示层次聚类的分布，每个节点水平层次的不同代表了节点深度级别的不同。适用于对非加权序列的可视化。")
        .thumbnail("imgs/circularDendrogram.png")
        .category('Hierarchies')
        .model(tree)
    
    var diameter = chart.number ()  
        .title("Radius")
        .defaultValue(1000)
        .fitToWidth(true)

chart.draw(function (selection, data){

    var g = selection
        .attr("width", +diameter() )
        .attr("height", +diameter() )
        .append("g")
        .attr("transform", "translate(" + diameter()/2 + "," + diameter()/2 + ")");
    
    var cluster = d3.layout.cluster()
        .size([360, diameter()/2-120]);

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
    
    var nodes = cluster.nodes(data);

    var link = g.selectAll("path.link")
        .data(cluster.links(nodes))
        .enter().append("path")
        .attr("class", "link")
        .style("fill","none")
        .style("stroke","#cccccc")
        .style("stroke-width","1px")
        .attr("d", diagonal);
    
    var node = g.selectAll("g.node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

    node.append("circle")
        .attr("r", 4.5)
        .style("fill", "#eeeeee")
        .style("stroke","#999999")
        .style("stroke-width","1px");

    node.append("text")
        .attr("dy", ".31em")
        .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
        .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
        .text(function(d) { return d.name; })
        .style("font-size","11px")
        .style("font-family","Arial, Helvetica")

  })
})();
