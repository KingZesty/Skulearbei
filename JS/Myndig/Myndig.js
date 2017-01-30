 function sjekk() {
   var alder = parseInt(document.getElementById("alder").value);
 if (alder < 18) {
   document.getElementById("Svar").innerHTML = "Du er Ikke Myndig";
 }
 else if (alder >= 150) {
   document.getElementById("Svar").innerHTML = "Du er en Retard";
 }
 else if (alder >= 67) {
   document.getElementById("Svar").innerHTML = "Du er Pensjonist";
 }
 else  {
   document.getElementById("Svar").innerHTML = "Du er Myndig";
 }
 }
