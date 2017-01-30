function RegnUt() {

  var tall1 = parseFloat(document.getElementById("tall1").value);
  var tall2 = parseFloat(document.getElementById("tall2").value);

 if (document.getElementById("add").checked) {
  document.getElementById("kev").innerHTML= "Addisjon: " + (tall1 + tall2)
}
else if (document.getElementById("sub").checked) {
  document.getElementById("kev").innerHTML= "Subtraksjon: " + (tall1 - tall2)
}
else if (document.getElementById("mul").checked) {
  document.getElementById("kev").innerHTML= "Multiplikasjon: " + (tall1 * tall2)
}
else if (document.getElementById("div").checked) {
    document.getElementById("kev").innerHTML= "Divisjon: " + (tall1 / tall2)
}
}
