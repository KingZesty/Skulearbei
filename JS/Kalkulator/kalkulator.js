 window.onload = function() {
  var tall1 = parseFloat(prompt("Skriv inn første tall:"));
  var tall2 = parseFloat(prompt("Skriv inn andre tall:"));
  document.getElementById("kalkulator").innerHTML = "Addisjon: " + (tall1 + tall2)
  + "<br>" + "Subtraksjon: " + (tall1 - tall2)
  + "<br>" + "Divisjon: " + (tall1 / tall2)
  + "<br>" + "Multiplikasjon: " + (tall1 * tall2);
}
