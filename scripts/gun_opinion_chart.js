//I adapted this from https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0
// I added a second line

// set the dimensions and margins of the graph
// I changed width to be a bit narrower
(function() {
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.fear); });


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("div#gun_opinion_chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data/gun_feel_unsafe.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.fear = +d.fear;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.fear; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "gunline1")
      .attr("d", valueline);

  //Add dots at the data points, This code is taken from http://bl.ocks.org/d3noob/38744a17f9c0141bcd04
  // I added class attribute to make color match
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("class","gundots")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.fear); });


  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});


// I added a second line here by repeating chunks of the original code 
// with new variable names and another data set.


// define the line
// I switched this to valueline2 so it would have a different variable name
// from the first line
var valueline2 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.no_safe); });


// Get the data
d3.csv("data/gun_feel_safe.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.no_safe = +d.no_safe;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.no_safe; })]);

  // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "gunline2")
      .attr("d", valueline2);

  //Add dots at the data points, This code is taken from http://bl.ocks.org/d3noob/38744a17f9c0141bcd04
  // I added class attribute to make color match
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 3.5)
        .attr("class","gundots2")
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.no_safe); });

});
})();