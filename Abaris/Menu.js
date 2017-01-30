/**
 * Created by daau1003 on 03.02.2016.
 */
var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

Menu();


function Menu(){


    var bgImage = new Image();
    var logoImage = new Image();
    var playImage = new Image();
    var instructImage = new Image();
    var settingsImage = new Image();
    var creditsImage = new Image();

    bgImage.src = "Images/background.png";
    logoImage.src = "Images/logo.png";
    playImage.src = "Images/start.png";
    instructImage.src = "Images/instructions.png";
    settingsImage.src = "Images/settings.png";
    creditsImage.src = "Images/credits.png";

    var buttonX = [511, 511, 511, 511];
    var buttonY = [155, 220, 285, 350];
    var buttonWidth = [258, 258, 258, 258];
    var buttonHeight = [57, 57, 57, 57];
    console.log("Test");
    bgImage.onload = function () {
            ctx.drawImage(bgImage, 0, 0);
        debugger;
        };
    console.log("test2");
    logoImage.onload = function () {
            ctx.drawImage(logoImage, 50, -10);
        }
    console.log("Test2");
    playImage.onload = function () {
            ctx.drawImage(playImage, buttonX[0], buttonY[0]);
        debugger;
        }
    instructImage.onload = function () {
            ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
        }
    settingsImage.onload = function () {
            ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
        }
    creditsImage.onload = function () {
            ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
        }
    var frames = 30;
    var timerId = 0;

    console.log("tt");
    timerId = setInterval(update(), 1000/frames);
    console.log("yy");
    function update(){
        console.log("Start");
        clear();
        move();
        draw();
        console.log("Slutt");
    }

    function clear(){
        ctx.clearRect(0, 0, width, height);
    }

    var backgroundY = 0;
    var speed = 1;

    function move(){

        backgroundY -= speed;
        if(backgroundY == 1 * height){
            backgroundY = 0;
        }
    }

    function draw(){
        console.log("før");
        ctx.drawImage(bgImage, 0, backgroundY);
        console.log("etter");
        ctx.drawImage(logoImage, 50, -10);
        ctx.drawImage(playImage, buttonX[0], buttonY[0]);
        debugger;
        ctx.drawImage(instructImage, buttonX[1], buttonY[1]);
        ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
        ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
        console.log("Helt på slutten");
    }
    var mouseX;
    var mouseY;

    canvas.addEventListener("mousemove", checkPos);

    function checkPos(mouseEvent) {
        console.log("Checkpos");
        if (mouseEvent.pageX || mouseEvent.pageY == 0) {
            mouseX = mouseEvent.pageX - this.offsetLeft;
            mouseY = mouseEvent.pageY - this.offsetTop;
        } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
            mouseX = mouseEvent.offsetX;
            mouseY = mouseEvent.offsetY;
        }
    }
        var fadeId = 0;
        canvas.addEventListener("mouseup", checkClick);

        function checkClick(mouseEvent){
            for(i = 0; i < buttonX.length; i++){
                if(mouseX > buttonX[i] && mouseY < buttonY[i] + buttonWidth[i]){
                    if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){


                    }
                }
            }
        }
        fadeId = setInterval(fadeOut(), 1000/frames);
        clearInterval(timerId);
        canvas.removeEventListener("mousemove", checkPos);
        canvas.removeEventListener("mouseup", checkClick);

        var time = 0.0;

        function fadeOut(){
            ctx.fillStyle = "rgba(0,0,0, 0.2)";
            ctx.fillRect (0, 0, width, height);
            time += 0.1;
            if(time >=2){
                clearInterval(fadeId);
                time = 0;
                timerId = setInterval("update()", 1000/frames);
                canvas.addEventListener("mousemove", checkPos);
                canvas.addEventListener("mouseup", checkClick);
            }
        }
};
