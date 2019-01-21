//The school choice page has one element from DataWrapper
//This is a really user-friendly interface, so pretty much all we did here
//was to separate the .js script from the other components of the chart.

//Embed the script for the interactive map of the U.S.
if("undefined"==typeof window.datawrapper)
	window.datawrapper={};window.datawrapper["ZcIEN"]={},
	window.datawrapper["ZcIEN"].iframe=
	document.getElementById("datawrapper-chart-ZcIEN"),
	window.addEventListener("message",function(a)
		{if("undefined"!=typeof a.data["datawrapper-height"])
		for(var b in a.data["datawrapper-height"])
			if("ZcIEN"==b)window.datawrapper["ZcIEN"].iframe.style.
				height=a.data["datawrapper-height"][b]+"px"});
