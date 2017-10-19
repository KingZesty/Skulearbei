function feil() {
  document.getElementById("svar").innerHTML = " Svaret er feil, prøv igjen"
}  // varsler om at svaret er feil

function riktig() {
  document.getElementById("svar").innerHTML = " Svaret er korrekt, Gratulerer!"
}  // Varsler om at svaret er korrekt

function playSound(soundfile) {  // funksjonen som spiller mp3 filen
  var audio = new Audio("lydfiler/Galt.mp3"); // finner den rette lydfilen til å spille av feil svar lyden
  audio.play(); // spiller va lydfilen
}

function playSound2(soundfile) { // funksjonen som spiller mp3 filen
  var audio = new Audio("lydfiler/Riktig.mp3"); // finner den rette lydfilen til å spille av rett svar lyden
  audio.play(); // spiller av lydfilen
}
