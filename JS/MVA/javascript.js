 function finn() {

 var pris = parseInt(document.getElementById("pris").value);
 var mva1 = pris*0.25;
 var mva2 = pris*0.15;
 var mva3 = pris*0.10;
 var total = pris + mva1;
 var total2 = pris + mva2;
 var total3 = pris + mva3;

if (document.getElementById("G").checked) {
  document.getElementById("MVA").innerHTML=
  "Vist varen koster " + pris + "kr og MVA er " + document.getElementById("G").value + " så blir MVA avgiften "
  + mva1.toFixed(2) + "kr da vil varen koste " + total.toFixed(2) + "kr";
}

else {
  document.getElementById("MVA").innerHTML= ""
}

if (document.getElementById("N").checked) {
  document.getElementById("MVA2").innerHTML=
  "Vist varen koster " + pris + "kr og MVA er " + document.getElementById("N").value + " så blir MVA avgiften "
  + mva2.toFixed(2) + "kr da vil varen koste " + total2.toFixed(2) + "kr";
}

else {
  document.getElementById("MVA2").innerHTML= ""
}

if (document.getElementById("T").checked) {
  document.getElementById("MVA3").innerHTML=
  "Vist varen koster " + pris + "kr og MVA er " + document.getElementById("T").value + " så blir MVA avgiften "
  + mva3.toFixed(2) + "kr da vil varen koste " + total3.toFixed(2) + "kr";
}

else {
  document.getElementById("MVA3").innerHTML= ""
}
}
