var terningkast = [0, 0, 0, 0, 0, 0];
//lager en array

function random() {
  //opprette et random tall mellom 1 og 6
  terning = Math.floor((Math.random() * 6) + 1);
  console.log(terning);
  //viser det randome tallet i console
  terningkast[terning-1]++;

  document.getElementById("terning").innerHTML = "";

  for (var i=0; i<terningkast.length; i++){
    document.getElementById("terning").innerHTML += "Antall " + (i+1) + ": " + terningkast[i] + "<br>";
  }
//viser terning bilder på de forskjellige tallene
  if (terning == 1) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='https://olspalten.files.wordpress.com/2012/11/1nye.png' alt='terning1' height='80' width='130'>";
  }
  else if (terning == 2) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='http://bortreist.no/wp-content/uploads/2014/12/2nye.png' alt='terning2' height='80' width='130'>";
  }
  else if (terning == 3) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='https://olspalten.files.wordpress.com/2012/11/3nye.png' alt='terning3' height='80' width='130'>";
  }
  else if (terning == 4) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='http://blog.winesworld.no/wp-content/uploads/2015/02/terning-4.png' alt='terning4' height='80' width='130'>";
  }
  else if (terning == 5) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='https://olspalten.files.wordpress.com/2012/11/5nye.png' alt='terning5' height='80' width='130'>";
  }
  else if (terning == 6) {
    document.getElementById("resultat").innerHTML= "Du Kasta " + terning + "<br> <img src='http://blog.winesworld.no/wp-content/uploads/2016/01/terning-6.png' alt='terning6' height='80' width='130'>";
  }
}
