var value = 0;

document.getElementById("dolla").innerHTML = "100$"

function money() {
  value++
  document.getElementById("value").innerHTML = "Manni: " + value + "$";
}

function upgrade() {
  document.getElementById("dolla").innerHTML = "100$"
}
