var bilmerker = []; // oppretter arrayen bilmerker[]

// funksjon for å legge til nye bilmerker
function leggTil() {
  var bilmerke = document.getElementById("bilmerke").value;

    document.getElementById("bilmerke").value = "";
  // sjekker om bilmerke inneholder en verdi
  if (bilmerke != "") {
    bilmerker.push(bilmerke); // legger til nytt bilmerke i array
    document.getElementById("status").innerHTML = "Lagt til."; // skriver ut melding
  }
  else {
    document.getElementById("status").innerHTML = "Fyll inn bilmerke."; // sk
    river ut melding
  }
}

// funksjon for å vise alle bilmerker
function vis() {
  document.getElementById("visBilmerker").innerHTML = ""; // nullstiller informasjonen i div

  // loop som skriver ut alle bilmerkene med linjeskift
  for (i=0; i<bilmerker.length; i++) {
    document.getElementById("visBilmerker").innerHTML += bilmerker[i] + " <input type='button' value='slett' onclick='slett(" + i + ")'><br>";
  }
}

function slett(bilmerke) {
  bilmerker.splice(bilmerke, 1);
  vis();
}

// funksjon for å sortere alle bilmerkene
function sorter() {
  bilmerker.sort();
  vis();
}
