var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var canvas= document.createElement("canvas");
var ctx = canvas.getContext("2d");
var width = 1515;
var height = 715;
canvas.width = width;
canvas.height = height;


window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
  player.update();
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(700, 355);

function render() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
};

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 100;
  this.x_speed = 0;
  this.y_speed = 2;
  this.score = 0;
}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.x_speed = -3;
  this.y_speed = 0;
  this.radius = 10;
}

Ball.prototype.render = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
};

Paddle.prototype.render = function() {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Player.prototype.update = function() {
  for(var key in keysDown) {
    var value = Number(key);
    if(value == 38) { // up arrow
      this.paddle.move(0, -5);
    } else if (value == 40) { // down arrow
      this.paddle.move(0, 5);
    } else {
      this.paddle.move(0, 0);
    }
  }
};

Computer.prototype.update = function(ball) {
  var y_pos = ball.y;
  var diff = -((this.paddle.y + (this.paddle.height / 2)) - y_pos);
  if(diff < 0 && diff < -4) { // max speed left
    diff = -5;
  } else if(diff > 0 && diff > 4) { // max speed right
    diff = 5;
  }
  this.paddle.move(diff, 0);
  if(this.paddle.y < 0) {
    this.paddle.y = 0;
  } else if (this.paddle.y + this.paddle.height > 400) {
    this.paddle.y = 350 - this.paddle.height;
  }
};

Paddle.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  this.x_speed = x;
  this.y_speed = y;
  if(this.y < 0) { // så langt up som mugle
    this.y = 0;
    this.y_speed = 0;
  } else if (this.y + this.height > height) { // så langt ned som mugle
    this.y = height - this.height;
    this.y_speed = 0;
  }
}

Ball.prototype.update = function(paddle1, paddle2) {
  this.x += this.x_speed;
  this.y += this.y_speed;
  var top_x = this.x + 5;
  var top_y = this.y + 5;
  var bottom_x = this.x - 5;
  var bottom_y = this.y - 5;

  if(this.y - 5 < 0) { // hitting the bottom wall
    this.y = 5;
    this.y_speed = -this.y_speed;
  } else if(this.y + 5 > width) { // hitting the right wall
    this.y = 395;
    this.y_speed = -this.y_speed;
  }

  if(this.x < 0 || this.x > width) { // a point was scored
    this.x_speed = 3;
    this.y_speed = 0;
    this.x = 700;
    this.y = 355;
    console.log("poeng")
  }

  if(top_y > 300) {
    if(top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
      // hit the player's paddle
      this.y_speed = -(paddle1.y_speed / 2);
      this.x_speed += 4;
      this.y += this.y_speed;
    }
  } else {
    if(top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.height) && bottom_x > paddle2.x) {
      // hit the computer's paddle
      this.y_speed = (paddle2.y_speed / 2);
      this.x_speed += -4;
      this.y += this.y_speed;
    }
  }
};

var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

function Player() {
   this.paddle = new Paddle(10, 285, 100, 10);
}

function Computer() {
  this.paddle = new Paddle(1495, 285, 100, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};
