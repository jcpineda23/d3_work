/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "grey");


var newCanvas = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 400);

var newCircle = newCanvas.append("circle")
	.attr("cx", 200)
	.attr("cy", 300)
	.attr("r", 100)
	.attr("fill", "yellow")

var newCircle = newCanvas.append("line")
	.attr("x1", 20)
	.attr("y1", 20)
	.attr("x2", 100)
	.attr("y2", 100)
	.attr("stroke", "blue")