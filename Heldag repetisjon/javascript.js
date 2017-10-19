
var ounce = 0.29;
var cup = 2.36;
var pint = 4.73;
var quart = 9.46;
var gallon = 37.85;

function regnUt() {
  document.getElementById("skrivut").innerHTML = "";

  var svar1 = document.getElementById("value").value * cup;
  var svar2 = document.getElementById("value").value * pint;
  var svar3 = document.getElementById("value").value * quart;
  var svar4 = document.getElementById("value").value * gallon;
  var svar5 = document.getElementById("value").value * ounce;

 if (document.getElementById("cup").checked){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " cup(s)" + " er " + svar1.toFixed(2) + " dl";
 }
  else if (document.getElementById("pint").checked){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " pint(s)" + " er " + svar2.toFixed(2) + " dl";
 }
  else if (document.getElementById("quart").checked){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " quart(s)" + " er " + svar3.toFixed(2) + " dl";
 }
  else if (document.getElementById("gallon").checked){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " gallon(s)" + " er " + svar4.toFixed(2) + " dl";
 }
  else if (document.getElementById("ounce").checked){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " ounce(s)" + " er " + svar5.toFixed(2) + " dl";
 }
}
