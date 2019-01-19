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

//Define Tweet ID lists for 5 most recent tweets re: school safety
//Will use below.

var ID1 = ['1000761840127938560', '964135454353354752', '941458866516217858', '461928260654596096', '282283851420667904'] //Biden
var ID2 = ['1064891273373540352', '989824640985034752', '977647148467671041', '975760492189966341', '968520238039011329'] //Bloomberg
var ID3 = ['386177549841494016', '365613840815226880', '997836155977596928', '997549507876356096', '997548918761250816'] //Booker
var ID4 = ['1073639435957358592', '1072311357440225288', '1052689937412358144', '1032652741385039873', '1032086770253524993'] //Brown
var ID5 = ['997597076027461637', '979457507016851456', '977645880244252672', '976929105210822656', '973964570246041600'] //Bullock
var ID6 = ['1073637067610120192', '1044679217131261953', '1034424405336760320', '1000490102647291904', '1000206965690257408'] //Buttigieg
var ID7 = ['1073613864963584000', '1046176424397287424', '1037078804072734721', '997633395613192192', '988481796420587521'] //Castro
var ID8 = ['795830177674633216', '1073621053748858881', '974103715576799233', '966454765466083328', '964989708790128640'] //Clinton
var ID9 = ['1038485916418027520', '1022130848659910656', '1013775543643398144', '1008744396819492865', '1006919744744771584'] //Cuomo
var ID10 = ['1073673242718679040', '1053663328172732417', '1042839753136242688', '1002919562554195969', '1002617713301352449'] //Delaney
var ID11 = ['1000374584632279042', '997590131153522689', '973997684729241601', '973946465394593793', '966867819123101697'] //Gabbard
var ID12 = ['1073633553584410626', '1073633552573575168', '1063855789671149568', '1051156108721704961', '1037308361639952384'] //Gillibrand
var ID13 = ['1082425402948235266', '1079499902294597633', '1078831724979736582', '1075560920125005824', '1074790843737927682'] //Harris
var ID14 = ['606214394742194176', '598624116631965696', '543943807209701377', '473938924188872704', '337690442688761856'] //Hickenlooper
var ID15 = ['1021499861731028992', '1004477550381285376', '996490386536198144', '987076485679689728', '987038014323884032'] //Inslee
var ID16 = ['1011370314750668802', '1010993392694767616', '998524497509670912', '997527855759286277', '981176269579673600'] //Klobuchar
var ID17 = ['1005118382537101312', '983412474543329280', '977713264758067201', '977630897842335744', '969268434004594689'] //Landrieu
var ID18 = ['1002348607062888448', '997505420397895686', '992916859400871936', '987407257020268544', '982661529890848768'] //Merkley
var ID19 = ['1041058327097171968', '1015689723149418496', '1014973151401467911', '1014359482569297920', '1004836414637379584'] //ORourke
var ID20 = ['1065301889871425536', '1050775501541965824', '1049361829267431424', '1044263793168191489', '1041818034845843456'] //Ojeda
var ID21 = ['1032656840138608650', '1024387449114566656', '1010265967660761089', '999069900667842560', '997517777048100864'] //Sanders
var ID22 = ['1047167672280961024', '1030495489932718080', '1006253538450632704', '1001600323130191873', '997518873686507520'] //Steyer
var ID23 = ['1075478626710286338', '1075096039827197952', '1072241297199648768', '1060620725353099266', '1059895950393643010'] //Swalwell
var ID24 = ['1073753658116820992', '1064923224855728131', '1057408941997473792', '1054148069611200512', '1051972598794526721'] //Warren
var ID25 = ['1076231818356105216', '1042813196648833025', '1009507397029769216', '1006969981760933888', '1000949848630288390'] //Yang





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