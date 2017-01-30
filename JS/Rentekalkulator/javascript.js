function regnUt() {
  var belop = parseInt(document.getElementById("belop").value);
  var rente = parseInt(document.getElementById("rente").value);
  var ar = parseInt(document.getElementById("ar").value)

  for (var i = ar; i > 0; i--) {
    belop+=belop*rente/100;
  }
 document.getElementById("resultat").innerHTML =
 "Du har " + belop.toFixed(2) + " kr. etter " + ar + " år.";
}
