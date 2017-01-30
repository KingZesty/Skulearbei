00,function regnUt() {
  var belop = parseInt(document.getElementById("belop").value);
  var rente = parseInt(document.getElementById("rente").value);
  var bpm = parseInt(document.getElementById("bpm").value);

  for (var i = belop; i > 0; i--) {
    belop+=belop*rente/100;
  }
  document.getElementById("resultat").innerHTML = "Det tar " + belop.toFixed(2) + " måneder å betale ned";
}
