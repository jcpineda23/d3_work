/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

console.log("out hello");
d3.json("data/buildings.json").then(function(data){
    // code goes here
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var rects = svg.selectAll("rect")
        .data(data);
    
    rects.enter()
        .append("rect")
            .attr("y", 10)
            .attr("width", 25)
            .attr("x", function(d, i){
                console.log(d);
                return (i * 40) + 25;
            })            
            .attr("height", function(d){
                return d.height;
            })
            .attr("fill", "gray");


    console.log("hello");
    data.forEach(function(d){
        console.log(d.height);
    });

}).catch(function(error){
    console.log("ERROR! " + error);
    console.log(error);
});