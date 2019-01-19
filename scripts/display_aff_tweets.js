//each of these variables --b for button --
//corresponds to the candidate's name displayed on the html page



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

//Define Tweet ID lists for 5 most recent tweets re: affordability
//Will use below.

var ID1 = ['1063541867910963201', '950385896427278336', '259746952416227328', '249320998816604160', '249303366637858816'] //Biden
var ID2 = ['1074641336689672192', '1064289685739057152', '1064265197156802561', '991329456198488065', '986689017268899840'] //Bloomberg
var ID3 = ['1082828557821317120', '1055563119932641282', '1022634387010187264', '1018968429276131329', '973688163641241600'] //Booker
var ID4 = ['1079098668291186694', '1059906012839378944', '1053787600778117121', '1051971414033657856', '1051601995281387520'] //Brown
var ID5 = ['1063118598170787840', '1035539180619673601', '676478196968198144', '633359025283985409', '601879061363871745'] //Bullock
var ID6 = ['1035179393348452352'] //Buttigieg
var ID7 = ['1063952186080673792', '940724685058248704', '801193125133815808', '730756151181217792', '724635991428988928'] //Castro
var ID8 = ['1046829033168756736', '852160928040853506', '816425914850492416', '796002224174407680', '796002222110834688'] //Clinton
var ID9 = ['1055546168829267969', '1054029819174928387', '1051129740717895681', '1043609822489452544', '1035981280486338560'] //Cuomo
var ID10 = ['1072919928787865601', '1052231047755288577', '1047088849057406976', '1041384754145370112', '1030278355457699840'] //Delaney
var ID11 = ['1001313906667667457', '1000496803400347649', '996562982405660673', '994245862913134592', '994245612169183232'] //Gabbard
var ID12 = ['1055430272517312512', '1054417347463663616', '1034951686174003201', '1030490752034451456', '1022544004439789569'] //Gillibrand
var ID13 = ['1082369786493968384', '1079113831371149317', '1075502535409065984', '1074859043120930816', '1074790843737927682'] //Harris
var ID14 = ['1047548094374600704', '520607865254338560', '461939663268110336', '294554527242264576', '13509859350'] //Hickenlooper
var ID15 = ['1083881245619118081', '1083878681053786112', '1083822752778178560', '1039200428880101377', '1007738961156976641'] //Inslee
var ID16 = ['1075076678085427200', '1071173496401788928', '1034242108943753216', '945813743375671296', '911652348652609536'] //Klobuchar
var ID17 = ['1064314217740812288', '953302006441168897', '936972614546968577'] //Landrieu
var ID18 = ['1076172422007549952', '1055154961909252097', '1050779635389263872', '1050775611550126081', '1034543137002336262'] //Merkley
var ID19 = ['1048985310137344000', '1048954438357016576', '1042595910633566208', '1042181056806305792', '1040624661204221953'] //ORourke
var ID20 = [] //Ojeda
var ID21 = ['1082831314724839430', '1082643846964699137', '1080252780328169473', '1079100998067597318', '1078354416787513344'] //Sanders
var ID22 = ['1083188032474357760', '1083166490013007872', '1082389177788858369', '1082357811663712257', '1042253955873431552'] //Steyer
var ID23 = ['1082377836403589121', '1070720691383586822', '1059895950393643010', '1055532196172386304', '1053382028975054848'] //Swalwell
var ID24 = ['1073650103599198208', '1071564026780499968', '1066805965213843463', '1064978003149627393', '1062809770002956288'] //Warren
var ID25 = ['1078456233856811009', '1078455340784590848', '1078453878197272577', '1078453309193764864', '1078451986973057025'] //Yang




//for each div, these functions (modified from Twitter docs at
// https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/collection) 
// (modified to createTweet rather than createTimeline)
// (timeline would be more natural but I couldn't find a way to make
//a timeline with Tweet IDs easily, so instead I'm just showing list
//of individual Tweets)
//loop through the recent tweet IDs and display those tweets 
//within the corresponding div tag


for (let i in ID1) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID1[i],
    document.getElementById("t1"),
  );
});
}



for (let i in ID2) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID2[i],
    document.getElementById("t2"),
  );
});
}



for (let i in ID3) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID3[i],
    document.getElementById("t3"),
  );
});
}



for (let i in ID4) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID4[i],
    document.getElementById("t4"),
  );
});
}



for (let i in ID5) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID5[i],
    document.getElementById("t5"),
  );
});
}



for (let i in ID6) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID6[i],
    document.getElementById("t6"),
  );
});
}



for (let i in ID7) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID7[i],
    document.getElementById("t7"),
  );
});
}



for (let i in ID8) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID8[i],
    document.getElementById("t8"),
  );
});
}



for (let i in ID9) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID9[i],
    document.getElementById("t9"),
  );
});
}




for (let i in ID10) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID10[i],
    document.getElementById("t10"),
  );
});
}



for (let i in ID11) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID11[i],
    document.getElementById("t11"),
  );
});
}



for (let i in ID12) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID12[i],
    document.getElementById("t12"),
  );
});
}



for (let i in ID13) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID13[i],
    document.getElementById("t13"),
  );
});
}



for (let i in ID14) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID14[i],
    document.getElementById("t14"),
  );
});
}



for (let i in ID15) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID15[i],
    document.getElementById("t15"),
  );
});
}



for (let i in ID16) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID16[i],
    document.getElementById("t16"),
  );
});
}



for (let i in ID17) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID17[i],
    document.getElementById("t17"),
  );
});
}



for (let i in ID18) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID18[i],
    document.getElementById("t18"),
  );
});
}



for (let i in ID19) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID19[i],
    document.getElementById("t19"),
  );
});
}



for (let i in ID20) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID20[i],
    document.getElementById("t20"),
  );
});
}



for (let i in ID21) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID21[i],
    document.getElementById("t21"),
  );
});
}


for (let i in ID22) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID22[i],
    document.getElementById("t22"),
  );
});
}


for (let i in ID23) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID23[i],
    document.getElementById("t23"),
  );
});
}


for (let i in ID24) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID24[i],
    document.getElementById("t24"),
  );
});
}


for (let i in ID25) {
  twttr.ready(function(twttr){
  twttr.widgets.createTweet(
    ID25[i],
    document.getElementById("t25"),
  );
});
}