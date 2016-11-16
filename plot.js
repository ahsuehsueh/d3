function plot()
{
var width = 1024;
var height = 1700;
var ctrl = d3.select(".diagram").append("svg").attr("width", width).attr("height", height);
d3.csv("https://ahsuehsueh.github.io/d3/userPost.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.like; }); 
		var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.like});  
		ctrl.append("path").data([data]).attr("class","lines").attr("d", lines);
		
	}

);

}