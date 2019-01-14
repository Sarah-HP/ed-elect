var unsorted = document.getElementById("chart_unsorted");
var sorted = document.getElementById("chart_sorted")
var THEheading = document.querySelector("h2");


function toggle() {
	unsorted.style.visibility = hidden;
}
//	if (unsorted.style.visibility=="visible") {
//		unsorted.style.visibility="hidden";
//	}
//}



function sayOuch() {
	alert('Ouch! Stop poking me!');
}
 
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

function togg() {
	if (THEheading.style.display==="none") {
		THEheading.style.visibility="block";
	} else {
		THEheading.style.display="none";
	}
}
foxImage.onclick = togg;
