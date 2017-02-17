var bilmerker =[];

function leggTil() {
  var bilmerke = document.getElementById("legg").value;

 if (bilmerke != "") {
   bilmerker.push(bilmerke);
   document.getElementById("Endring").innerHTML = "Lagt til.";
 }
 else {
   document.getElementById("Endring").innerHTML = "Fyll inn bilmerke.";
 }
}

function vis() {
  document.getElementById("huck").innerHTML = "";
  for (i=0; i<bilmerker.length; i++) {
    document.getElementById("huck").innerHTML += bilmerker[i] + "<br>";
  }
}
function sorter() {
  bilmerker.sort();
  vis();
}
