   var i = 99;
  function Beer () {
     setTimeout(function () {
       if (i<1) {
     document.getElementById("loop").innerHTML +="No more bottles of beer on the wall,<br> " +
     "No more bottles of beer.<br>" +
     "Go to the store and buy some more,<br> " +
     "99 bottles of beer on the wall.<br><br>";
       }
       else {
    document.getElementById("loop").innerHTML += i + " bottles of beer on the wall" + ", " + i + " bottles of beer! <br>" +
    "Take one down, pass it around" +
     ", <br>" + (i - 1) +
     " bottles of beer on the wall! <br> <br>"
  }
        i--;
        if (i >= 1) {
           Beer();
        }
     }, 3500)
  }
