var Epler = prompt("Hvor mange epler har du?");
var Personer = prompt("Hvor mange personer er det?");
var Eplerprpers = parseInt(Epler/Personer);
var TilOvers = Epler % Personer;

 window.onload = function() {
  document.getElementById("Epler").innerHTML=
  "Dersom man er " + Personer + " personer, og har "
  + Epler + " epler, blir det "
  + Eplerprpers + " epler per person, og "
  + TilOvers + " epler til overs.";
 }
