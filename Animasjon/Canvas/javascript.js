window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

function lag() {
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#0000FF";
ctx.fillRect(X1,Y1,width,height);
}
