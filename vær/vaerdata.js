var vaerdata = [
  {vinter: "2016/2017", temp: [-2.3, -5.4, -5.6], nedbor: [73.2, 63.3, 97]},
  {vinter: "2015/2016", temp: [-2.4, -10.2, -5.8], nedbor: [132.5, 112.5, 123.4]},
  {vinter: "2014/2015", temp: [-6, -4.6, -3.5], nedbor: [73.6, 183.4, 81.3]},
  {vinter: "2013/2014", temp: [-2.1, -7, -2.4], nedbor: [196.9, 155.1, 236.9]},
  {vinter: "2012/2013", temp: [-10.7, -10.7, -8.9], nedbor: [112.5, 70.9, 63.9]},
  {vinter: "2011/2012", temp: [-4.4, -7.3, -6.9], nedbor: [145.2, 123.5, 67.1]},
  {vinter: "2010/2011", temp: [-14.8, -7.8, -9.7], nedbor: [50.9, 114.7, 122.3]}
];

window.onload = function() {
  // oppretter elementer i dropdown
  for (var i = 0; i < vaerdata.length; i++)
  {
    var select = document.getElementById("periode");
    var opt = vaerdata[i].vinter;
    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.add(el);
  }
}

function visVaerdata() {
  var valgtPeriode=document.getElementById("periode");
  var maks;
  var min;

  for (var i = 0; i < vaerdata.length; i++)
  {
    if(valgtPeriode[valgtPeriode.selectedIndex].value==vaerdata[i].vinter){

      document.getElementById("resultat").innerHTML = "Gjennomsnitt: " + gjennomsnitt(vaerdata[i].temp);
    }
  }
}

function gjennomsnitt(verdier) {
  var total = 0;
  var gjsnitt = 0;
  for (var j = 0; j < verdier.length; j++)
  {
    total += verdier[j];
  }
  gjsnitt = total / verdier.length;
  return gjsnitt.toFixed(2);
}
