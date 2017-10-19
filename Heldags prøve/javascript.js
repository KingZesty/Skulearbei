
var ounce = 0.29; // values på forskjellige måle-enheter
var cup = 2.36;  // alle måle-enhetene er tatt ifra google og ikke oppgaven for mer presisjon på verktøyet
var pint = 4.73;
var quart = 9.46;
var gallon = 37.85;

function regnUt() { // lager funksjonen som skal regne ut hvor mye dl det er
  document.getElementById("skrivut").innerHTML = ""; // gjør div taggen blank så coden ikke blir skrevet ved siden av hverandre

  var svar1 = document.getElementById("value").value * cup; // gjør alle regnestykkene for å finne ut hvor mye personen ser etter
  var svar2 = document.getElementById("value").value * pint;
  var svar3 = document.getElementById("value").value * quart;
  var svar4 = document.getElementById("value").value * gallon;
  var svar5 = document.getElementById("value").value * ounce;

  var e = document.getElementById("velg"); // henter valuen på drop-down menyen
  var answer = e.options[e.selectedIndex].value;
 if (answer == "cup"){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " cup(s)" + " er " + svar1.toFixed(2) + " dl";
 }                                                                            // henter hvor mye personen har og endrer det til dl
  else if (answer == "pint"){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " pint(s)" + " er " + svar2.toFixed(2) + " dl";
 }
  else if (answer == "quart"){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " quart(s)" + " er " + svar3.toFixed(2) + " dl";
 }
  else if (answer == "gallon"){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " gallon(s)" + " er " + svar4.toFixed(2) + " dl";
 }
  else if (answer == "ounce"){
   document.getElementById("skrivut").innerHTML += document.getElementById("value").value + " ounce(s)" + " er " + svar5.toFixed(2) + " dl";
 }
} // ender funksjonen som regner ut hvor mye dl det er
