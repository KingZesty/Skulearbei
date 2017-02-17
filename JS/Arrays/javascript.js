var arr = [
  ["Skoda", " Volvo", " Bmw"],
  ["Octavia", " 240", " 3-Serie"],
  ["2002 ", " 1997", " 2017"]
];


function skriv() {
for (i = 0; i <= 0; i++) {
  document.getElementById("huck").innerHTML += arr[0] + "<br>" + arr[1] + "<br>" + arr[2] + "<br><br>";
}
}

function bil() {

if (document.getElementById("Merke").checked) {
  arr.push(0, 0, document.getElementById("legg").value)
 document.getElementById("Endring").innerHTML= "Du la til Bilmerke " + document.getElementById("legg").value + "<br><br>";
}
else if (document.getElementById("Modell").checked) {
  arr.push(1, 0, document.getElementById("legg").value)
 document.getElementById("Endring").innerHTML= "Du la til Modellen " + document.getElementById("legg").value;
}
else if (document.getElementById("År").checked) {
  arr.push(2, 0, document.getElementById("legg").value)
 document.getElementById("Endring").innerHTML= "Du la til Års Modellen " + document.getElementById("legg").value;
}
}
