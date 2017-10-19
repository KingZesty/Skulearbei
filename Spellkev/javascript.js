var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var homeless = 0;
var worker = 0;
var trader = 0;
var robot = 0;
var coal = 0;
var gold = 0;
var dia = 0;

function buyHomeless(){
    var HomelessCost = Math.floor(10 * Math.pow(1.1,homeless));     //works out the cost of this cursor
    if(cookies >= HomelessCost){                                   //checks that the player can afford the cursor
        homeless = homeless + 1;                                   //increases number of cursors
    	cookies = cookies - HomelessCost;                          //removes the cookies spent
        document.getElementById('homeless').innerHTML = homeless;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,homeless));       //works out the cost of the next cursor
    document.getElementById('HomelessCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);

function buyWorker(){
    var WorkerCost = Math.floor(20 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= WorkerCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 3;                                   //increases number of cursors
    	cookies = cookies - WorkerCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('WorkerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);


function buyTrader(){
    var TraderCost = Math.floor(50 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= TraderCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 7;                                   //increases number of cursors
    	cookies = cookies - TraderCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('TraderCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);

function buyRobot(){
    var RobotCost = Math.floor(75 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= RobotCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 9;                                   //increases number of cursors
    	cookies = cookies - RobotCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(75 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('RobotCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);

function buyCoal(){
    var RobotCost = Math.floor(150 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= CoalCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 20;                                   //increases number of cursors
    	cookies = cookies - CoalCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(150 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('CoalCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);

function buyGold(){
    var GoldCost = Math.floor(250 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= GoldCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 30;                                   //increases number of cursors
    	cookies = cookies - GoldCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(250 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('GoldCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);

function buyDia(){
    var DiaCost = Math.floor(500 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= DiaCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 60;                                   //increases number of cursors
    	cookies = cookies - DiaCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('DiaCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 800);


function upgrade1() {

}
