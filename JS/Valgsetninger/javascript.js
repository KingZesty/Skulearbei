 var Svar;
 var forsok = 10;
 var klikk = 0;

 window.onload = function() {
 Svar = (Math.floor((Math.random() * 100) + 1));
 console.log(Svar);
}

 function begge() {
   teller();
   restart();
 }

 function teller() {
   if (forsok <= 0) {
     klikk++;
     document.getElementById("lel").innerHTML =
      "Antall Forsøk: " + klikk
      document.getElementById("sjanser").innerHTML = "";
   }

   else {
     document.getElementById("sjanser").innerHTML = "Wut, bruk ælle sjansæn da"
   }
 }

 function restart() {
   forsok = 10;
   document.getElementById("gjett").disabled = false;
   Svar = (Math.floor((Math.random() * 100) + 1));
   document.getElementById("forsok").innerHTML = "" + forsok;
   document.getElementById("ting").innerHTML = "";
   document.getElementById("boks").value = "";
   console.log(Svar)
 }

function gjett() {
  var tall = parseInt(document.getElementById("boks").value);
 if (forsok <= 0) {
   document.getElementById("ting").innerHTML = "Du greidde d ikkje nub";
   document.getElementById("gjett").disabled = true;
 }
 else {
 if (tall == Svar) {
  document.getElementById("ting").innerHTML = "Gratulere, nå gå vækk";
  document.getElementById("gjett").disabled = true;
}
 else if (tall >= Svar) {
  document.getElementById("ting").innerHTML = "Feil, Tallet er lavere";
}
 else if (tall <= Svar) {
  document.getElementById("ting").innerHTML = "Feil, Tallet er høyere"
}
 forsok --;
    document.getElementById("forsok").innerHTML = "" + forsok;
 }
}
