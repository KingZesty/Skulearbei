 var antallklikk = 0
 var tekstbox = 0

 function klikk() {
   antallklikk++;
   document.getElementById("klikkvisarn").innerHTML =
    "Antall klikk: " + antallklikk
 }

 function reset() {
   antallklikk =- 0;
   document.getElementById("klikkvisarn").innerHTML =
   "Antall klikk: " + antallklikk
 }

 function slettMelding() {
   document.getElementById("melding").value = ""
 }

 function visMelding() {
   document.getElementById("visMelding").innerHTML =
   document.getElementById("melding").value;
 }

 function Tekstklikk() {
   tekstbox++;
   document.getElementById("fuckEirik").innerHTML =
    "Antall Tekstboxer: " + tekstbox
 }

 function addTextBox() {
   var element = document.createElement("input");
   element.setAttribute("type", "text");
   element.setAttribute("value", "");
   element.setAttribute("name", "Test Name");
   document.getElementById("bokser").appendChild(element);
 }

 function begge2() {
   Tekstklikk();
   addTextBox();
 }

 function reset2() {
   tekstbox=- 0;
   document.getElementById("fuckEirik").innerHTML =
    "Antall Tekstboxer: " + tekstbox
 }

 function Clear1() {
   document.getElementById("bokser").innerHTML = "";
}

 function resetall() {
   Clear1();
   reset2();
 }


 function linje() {
   for (i = 0; i < 9; i++) {
       addTextBox();
   }
 }
 function tellLinje() {
   for (i = 0; i < 9; i++) {
       Tekstklikk();
   }
 }

 function linjeT() {
   tellLinje();
   linje();
 }
