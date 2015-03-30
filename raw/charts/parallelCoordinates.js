(function(){

    var model = raw.model();

    var list = model.dimension()
        .title('Dimensions')
        .multiple(true)
        .types(Number)
        .required(2);

    var color = model.dimension()
        .title("Color")

    model.map(function (data){
        if (!list()) return;
        return data.map(function (d){
            var obj = { dimensions: {}, color: color(d) };
            list().forEach(function (l){
                obj.dimensions[l] = d[l];
            })
            return obj;
        })
    })

    var chart = raw.chart()
        .title('平行坐标图（Parallel Coordinates）')
        .description(
            "平行坐标图是一种通常的可视化方法，用于对高维几何和多元数据的可视化。"+"<br>"+"为了克服传统的笛卡尔直角坐标系容易耗尽空间、难以表达三维以上数据的问题，平行坐标图将高维数据的各个变量用一系列相互平行的坐标轴表示，变量值对应轴上位置。为了反映变化趋势和各个变量间相互关系，往往将描述不同变量的各点连接成折线。"+"<br>"+"平行坐标图的一个显著优点是其具有良好的数学基础，其射影几何解释和对偶特性使它很适合用于可视化数据分析。")
        .thumbnail("imgs/parallelCoordinates.png")
        .category('Distributions')
        .model(model)

    var width = chart.number()
        .title("Width")
        .defaultValue(1000)
        .fitToWidth(true)

    var height = chart.number()
        .title("Height")
        .defaultValue(500)

    var colors = chart.color()
        .title("Color scale")

    chart.draw(function (selection, data){

        var m = [30, 40, 10, 40],
            w = +width() - m[1] - m[3],
            h = +height() - m[0] - m[2];

        var x = d3.scale.ordinal().rangePoints([0, w], 0),
            y = {},
            dragging = {};

        var line = d3.svg.line(),
            axis = d3.svg.axis().orient("left"),
            background,
            foreground;

        var svg = selection
            .attr("width", +width())
            .attr("height", +height())
            .append("g")
                .attr("width", w + m[1] + m[3])
                .attr("height", h + m[0] + m[2])
                .style("font-size","10px")
                .style("font-family","Arial, Helvetica")
                    .append("svg:g")    
                        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

        x.domain(dimensions = d3.keys(data[0].dimensions).filter(function (d) {
          return d != "name" && (y[d] = d3.scale.linear()
              .domain(d3.extent(data, function(p) { return +p.dimensions[d]; }))
              .range([h, 0]));
        }));

        colors.domain(data, function (d){ return d.color; });

        background = svg.append("svg:g")
            .attr("class", "background")
            .selectAll("path")
            .data(data)
                .enter().append("svg:path")
                    .style('fill','none')
                    .style('stroke', function (d){ return colors()(d.color); })
                    .style('stroke-opacity','.4')
                    .attr("d", path);

        var g = svg.selectAll(".dim")
            .data(dimensions)
            .enter().append("svg:g")
                .attr("class", "dim")
                .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

        g.append("svg:g")
            .attr("class", "axis")
            .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
            .append("svg:text")
                .attr("text-anchor", "middle")
                .style("font-size","10px")
                .style("font-family","Arial, Helvetica")
                .attr("y", -9)
                .text(String);

        d3.selectAll('text')
            .style("font-size","10px")
            .style("font-family","Arial, Helvetica")

        d3.selectAll(".axis line, .axis path")
            .style('fill', 'none')
            .style('stroke', '#000')
            .style('stroke-width', '1px')
            .style('shape-rendering','crispEdges')

        function position(d) {
            var v = dragging[d];
            return v == null ? x(d) : v;
        }

        function path(d) {
            return line(dimensions.map(function(p) { return [position(p), y[p](d.dimensions[p])]; }));
        }

    });

})();