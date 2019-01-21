// Copying only the relevant portions of Sam's .js file (display_aff_tweets.js)

//each of these variables --b for button --
//corresponds to the candidate's name displayed on the html page

//These items appear on the very bottom of the school choice page
//My only modification was deleting everything after line 800 of 
// Sam's initial script (the other lines in his script related to tweet embedding)

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");
var b16 = document.getElementById("b16");
var b17 = document.getElementById("b17");
var b18 = document.getElementById("b18");
var b19 = document.getElementById("b19");
var b20 = document.getElementById("b20");
var b21 = document.getElementById("b21");
var b22 = document.getElementById("b22");
var b23 = document.getElementById("b23");
var b24 = document.getElementById("b24");
var b25 = document.getElementById("b25");

//create a variable for each div; we'll then toggle
//each div's visibility
var div1 = document.getElementById("cand1");
var div2 = document.getElementById("cand2");
var div3 = document.getElementById("cand3");
var div4 = document.getElementById("cand4");
var div5 = document.getElementById("cand5");
var div6 = document.getElementById("cand6");
var div7 = document.getElementById("cand7");
var div8 = document.getElementById("cand8");
var div9 = document.getElementById("cand9");
var div10 = document.getElementById("cand10");
var div11 = document.getElementById("cand11");
var div12 = document.getElementById("cand12");
var div13 = document.getElementById("cand13");
var div14 = document.getElementById("cand14");
var div15 = document.getElementById("cand15");
var div16 = document.getElementById("cand16");
var div17 = document.getElementById("cand17");
var div18 = document.getElementById("cand18");
var div19 = document.getElementById("cand19");
var div20 = document.getElementById("cand20");
var div21 = document.getElementById("cand21");
var div22 = document.getElementById("cand22");
var div23 = document.getElementById("cand23");
var div24 = document.getElementById("cand24");
var div25 = document.getElementById("cand25");


//These blocks of code all set one div to display and the others
//to not -- there's one function for each div
//Inspired by that fox image assignment
//seems inefficient, but I wanted you to be able to click on the 
//names in any order, so I had each function show one div and make
//sure all the other ones are hidden

function show_div1() {
	div1.style.display="block";
  div2.style.display="none";
  div3.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div2() {
  div2.style.display="block";
  div1.style.display="none";
  div3.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div3() {
  div3.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}


function show_div4() {
  div4.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div3.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div5() {
  div5.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div3.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div6() {
  div6.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div3.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div7() {
  div7.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div3.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div8() {
  div8.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div3.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div9() {
  div9.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div3.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}


function show_div10() {
  div10.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div3.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div11() {
  div11.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div3.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div12() {
  div12.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div3.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div13() {
  div13.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div3.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div14() {
  div14.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div3.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div15() {
  div15.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div3.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div16() {
  div16.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div3.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div17() {
  div17.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div3.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div18() {
  div18.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div3.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div19() {
  div19.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div3.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div20() {
  div20.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div3.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div21() {
  div21.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div3.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div22() {
  div22.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div3.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div23() {
  div23.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div3.style.display="none";
  div24.style.display="none";
  div25.style.display="none";
}

function show_div24() {
  div24.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div3.style.display="none";
  div25.style.display="none";
}


function show_div25() {
  div25.style.display="block";
  div2.style.display="none";
  div1.style.display="none";
  div4.style.display="none";
  div5.style.display="none";
  div6.style.display="none";
  div7.style.display="none";
  div8.style.display="none";
  div9.style.display="none";
  div10.style.display="none";
  div11.style.display="none";
  div12.style.display="none";
  div13.style.display="none";
  div14.style.display="none";
  div15.style.display="none";
  div16.style.display="none";
  div17.style.display="none";
  div18.style.display="none";
  div19.style.display="none";
  div20.style.display="none";
  div21.style.display="none";
  div22.style.display="none";
  div23.style.display="none";
  div24.style.display="none";
  div3.style.display="none";
}

//set each candidate name to trigger the
//corresponding function when clicked	
b1.onclick = show_div1;
b2.onclick = show_div2;
b3.onclick = show_div3;
b4.onclick = show_div4;
b5.onclick = show_div5;
b6.onclick = show_div6;
b7.onclick = show_div7;
b8.onclick = show_div8;
b9.onclick = show_div9;
b10.onclick = show_div10;
b11.onclick = show_div11;
b12.onclick = show_div12;
b13.onclick = show_div13;
b14.onclick = show_div14;
b15.onclick = show_div15;
b16.onclick = show_div16;
b17.onclick = show_div17;
b18.onclick = show_div18;
b19.onclick = show_div19;
b20.onclick = show_div20;
b21.onclick = show_div21;
b22.onclick = show_div22;
b23.onclick = show_div23;
b24.onclick = show_div24;
b25.onclick = show_div25;

