var des17 = -2.3;  // alle verdiene for desember
var des16 = -2.4;
var des15 = -6.0;
var des14 = -2.1;
var des13 = -10.7;
var des12 = -4.4;
var des11 = -14.8;
var des172 = 73.2;
var des162 = 132.5;
var des152 = 73.6;
var des142 = 196.9;
var des132 = 112.5;
var des122 = 145.2;
var des112 = 50.9;

var jan17 = -5.4; // alle verdiene for januar
var jan16 = -10.2;
var jan15 = -4.6;
var jan14 = -7.0;
var jan13 = -10.7;
var jan12 = -7.3;
var jan11 = -7.8;
var jan172 = 63.3;
var jan162 = 112.5;
var jan152 = 183.4;
var jan142 = 155.1;
var jan132 = 70.9;
var jan122 = 123.5;
var jan112 = 114.7;

var feb17 = -5.6; // alle verdiene for februar
var feb16 = -5.8;
var feb15 = -3.5;
var feb14 = -2.4;
var feb13 = -8.9;
var feb12 = -6.9;
var feb11 = -9.7;
var feb172 = 97;
var feb162 = 123.4;
var feb152 = 81.3;
var feb142 = 236.9;
var feb132 = 63.9;
var feb122 = 67.1;
var feb112 = 122.3;

var max17 = Math.max(des17,jan17,feb17); // max verdiene for temperatur
var max16 = Math.max(des16,jan16,feb16);
var max15 = Math.max(des15,jan15,feb15);
var max14 = Math.max(des14,jan14,feb14);
var max13 = Math.max(des13,jan13,feb13);
var max12 = Math.max(des12,jan12,feb12);
var max11 = Math.max(des11,jan11,feb11);

var min17 = Math.min(des17,jan17,feb17); // min verdiene for temperatur
var min16 = Math.min(des16,jan16,feb16);
var min15 = Math.min(des15,jan15,feb15);
var min14 = Math.min(des14,jan14,feb14);
var min13 = Math.min(des13,jan13,feb13);
var min12 = Math.min(des12,jan12,feb12);
var min11 = Math.min(des11,jan11,feb11);

var max172 = Math.max(des172,jan172,feb172); // max verdiene for nedbør
var max162 = Math.max(des162,jan162,feb162);
var max152 = Math.max(des152,jan152,feb152);
var max142 = Math.max(des142,jan142,feb142);
var max132 = Math.max(des132,jan132,feb132);
var max122 = Math.max(des122,jan122,feb122);
var max112 = Math.max(des112,jan112,feb112);

var min172 = Math.min(des172,jan172,feb172); // min verdiene for nedbør
var min162 = Math.min(des162,jan162,feb162);
var min152 = Math.min(des152,jan152,feb152);
var min142 = Math.min(des142,jan142,feb142);
var min132 = Math.min(des132,jan132,feb132);
var min122 = Math.min(des122,jan122,feb122);
var min112 = Math.min(des112,jan112,feb112);

var gjen17 = (des17+jan17+feb17/3).toFixed(2); // gjenomsnitts verdiene for temperatur
var gjen16 = (des16+jan16+feb16/3).toFixed(2);
var gjen15 = (des15+jan15+feb15/3).toFixed(2);
var gjen14 = (des14+jan14+feb14/3).toFixed(2);
var gjen13 = (des13+jan13+feb13/3).toFixed(2);
var gjen12 = (des12+jan12+feb12/3).toFixed(2);
var gjen11 = (des11+jan11+feb11/3).toFixed(2);

// beste måten
var vaerdata = [
  {vinter: "2016/2017", temp: [0,0,0], nedbor: [0,0,0]},
  {vinter: "2016/2017", temp: [0,0,0], nedbor: [0,0,0]},
  {vinter: "2016/2017", temp: [0,0,0], nedbor: [0,0,0]},
  {vinter: "2016/2017", temp: [0,0,0], nedbor: [0,0,0]},
]

function velg() {
  var e = document.getElementById("aar"); // henter valuen på drop-down menyen
  var ar = e.options[e.selectedIndex].value;

  var d = document.getElementById("mal"); // henter valuen på drop-down menyen
  var ml = d.options[d.selectedIndex].value;

  if (ml == "temperatur"){ // lager if-statement som filtrerer ut nedbøret
    if(ar == "2016/2017"){ // coden for å få fram det personen spør om
      var temp = [des17, jan17, feb17, max17, min17, gjen17];
      document.getElementById("returner").innerHTML = "Desember: " + des17 + "<br> Jan: " + jan17 + "<br> Feb: " + feb17 + "<br> Høyeste gjennomsnitts temperatur: " + max17 + "<br> Laveste gjennomsnitts temperatur " + min17 + "<br> Gjenomsnitts temperaturen: " + (des17+jan17+feb17/3).toFixed(2);
    }
    else if(ar == "2015/2016"){
      var temp = [des16, jan16, feb16, max16, min16, gjen16];
      document.getElementById("returner").innerHTML = "Desember: " + des16 + "<br> Jan: " + jan16 + "<br> Feb: " + feb16 + "<br> Høyeste gjennomsnitts temperatur: " + max16 + "<br> Laveste gjennomsnitts temperatur " + min16 + "<br> Gjenomsnitts temperaturen: " + (des16+jan16+feb16/3).toFixed(2);
    }
    else if(ar == "2014/2015"){
      var temp = [des15, jan15, feb15, max15, min15,gjen15];
      document.getElementById("returner").innerHTML = "Desember: " + des15 + "<br> Jan: " + jan15 + "<br> Feb: " + feb15 + "<br> Høyeste gjennomsnitts temperatur: " + max15 + "<br> Laveste gjennomsnitts temperatur " + min15 + "<br> Gjenomsnitts temperaturen: " + (des15+jan15+feb15/3).toFixed(2);
    }
    else if(ar == "2013/2014"){
      var temp = [des14, jan14, feb14, max14, min14,gjen14];
      document.getElementById("returner").innerHTML = "Desember: " + des14 + "<br> Jan: " + jan14 + "<br> Feb: " + feb14 + "<br> Høyeste gjennomsnitts temperatur: " + max14 + "<br> Laveste gjennomsnitts temperatur " + min14 + "<br> Gjenomsnitts temperaturen: " + (des14+jan14+feb14/3).toFixed(2);
    }
    else if(ar == "2012/2013"){
      var temp = [des13, jan13, feb13, max13, min13,gjen13];
      document.getElementById("returner").innerHTML = "Desember: " + des13 + "<br> Jan: " + jan13 + "<br> Feb: " + feb13 + "<br> Høyeste gjennomsnitts temperatur: " + max13 + "<br> Laveste gjennomsnitts temperatur " + min13 + "<br> Gjenomsnitts temperaturen: " + (des13+jan13+feb13/3).toFixed(2);
    }
    else if(ar == "2011/2012"){
      var temp = [des12, jan12, feb12, max12, min12,gjen12];
      document.getElementById("returner").innerHTML = "Desember: " + des12 + "<br> Jan: " + jan12 + "<br> Feb: " + feb12 + "<br> Høyeste gjennomsnitts temperatur: " + max12 + "<br> Laveste gjennomsnitts temperatur " + min12 + "<br> Gjenomsnitts temperaturen: " + (des12+jan12+feb12/3).toFixed(2);
    }
    else if(ar == "2010/2011"){
      var temp = [des11, jan11, feb11, max11, min11,gjen11];
      document.getElementById("returner").innerHTML = "Desember: " + des11 + "<br> Jan: " + jan11 + "<br> Feb: " + feb11 + "<br> Høyeste gjennomsnitts temperatur: " + max11 + "<br> Laveste gjennomsnitts temperatur " + min11 + "<br> Gjenomsnitts temperaturen: " + (des11+jan11+feb11/3).toFixed(2);
    }
  }

  if (ml == "nedbor"){ // filtrere ut været
    if(ar == "2016/2017"){ // coden og verdiene for året personen har valgt
      document.getElementById("returner").innerHTML = "Desember: " + des172 + "%<br> Jan: " + jan172 + "%<br> Feb: " + feb172 + "%<br> Høyeste gjennomsnitts nedbør: " + max172 + "%<br> Laveste gjennomsnitts nedbør " + min172 + "%<br> Gjenomsnitts nedbøret: " + (des172+jan172+feb172/3).toFixed(2) +"%";
    }
    else if(ar == "2015/2016"){
      document.getElementById("returner").innerHTML = "Desember: " + des162 + "%<br> Jan: " + jan162 + "%<br> Feb: " + feb162 + "%<br> Høyeste gjennomsnitts nedbør: " + max162 + "%<br> Laveste gjennomsnitts nedbør " + min162 + "%<br> Gjenomsnitts nedbøret: " + (des162+jan162+feb162/3).toFixed(2) +"%";
    }
    else if(ar == "2014/2015"){
      document.getElementById("returner").innerHTML = "Desember: " + des152 + "%<br> Jan: " + jan152 + "%<br> Feb: " + feb152 + "%<br> Høyeste gjennomsnitts nedbør: " + max152 + "%<br> Laveste gjennomsnitts nedbør " + min152 + "%<br> Gjenomsnitts nedbøret: " + (des152+jan152+feb152/3).toFixed(2) +"%";
    }
    else if(ar == "2013/2014"){
      document.getElementById("returner").innerHTML = "Desember: " + des142 + "%<br> Jan: " + jan142 + "%<br> Feb: " + feb142 + "%<br> Høyeste gjennomsnitts nedbør: " + max142 + "%<br> Laveste gjennomsnitts nedbør " + min142 + "%<br> Gjenomsnitts nedbøret: " + (des142+jan142+feb142/3).toFixed(2) +"%";
    }
    else if(ar == "2012/2013"){
      document.getElementById("returner").innerHTML = "Desember: " + des132 + "%<br> Jan: " + jan132 + "%<br> Feb: " + feb132 + "%<br> Høyeste gjennomsnitts nedbør: " + max132 + "%<br> Laveste gjennomsnitts nedbør " + min132 + "%<br> Gjenomsnitts nedbøret: " + (des132+jan132+feb132/3).toFixed(2) +"%";
    }
    else if(ar == "2011/2012"){
      document.getElementById("returner").innerHTML = "Desember: " + des122 + "%<br> Jan: " + jan122 + "%<br> Feb: " + feb122 + "%<br> Høyeste gjennomsnitts nedbør: " + max122 + "%<br> Laveste gjennomsnitts nedbør " + min122 + "%<br> Gjenomsnitts nedbøret: " + (des122+jan122+feb122/3).toFixed(2) +"%";
    }
    else if(ar == "2010/2011"){
      document.getElementById("returner").innerHTML = "Desember: " + des112 + "%<br> Jan: " + jan112 + "%<br> Feb: " + feb112 + "%<br> Høyeste gjennomsnitts nedbør: " + max112 + "%<br> Laveste gjennomsnitts nedbør " + min112 + "%<br> Gjenomsnitts nedbøret: " + (des112+jan112+feb112/3).toFixed(2) +"%";
    }
  }



  Highcharts.chart('statistikk', { // diagram coden
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Gjennomsnittelig temperatur'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Des', 'Jan', 'Feb', 'Max', 'Min', 'Gjenomsnitt'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 15,
        title: {
            text: 'Grader',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'grader'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'temperatur',
        data: [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5]] // verdiene som hentes til diagramet
    }]
});
  } // ender funksjonen
