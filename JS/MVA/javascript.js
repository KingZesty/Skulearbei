 var pris = document.getElementById("pris");
 var mva = pris * 0.25;
 var total = pris + mva;


 window.onload = function() {
  document.getElementById("MVA").innerHTML=
  "Vist varen koster " + pris + "kr og MVA er 25% så blir MVA avgiften "
  + mva + "kr da vil varen koste " + total + "kr";
 }
