const Asteroid = require("./asteroid.js");

function Game(canvas) {
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.ctx = canvas.getContext("2d");
  this.NUM_ASTEROIDS = 8;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < this.NUM_ASTEROIDS) {
    const asteroid = new Asteroid({ pos: this.randomPosition(), game: this });
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function () {
  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach((el) => {
    el.move();
    el.pos = this.wrap(el.pos);
    // console.log(el.pos);
  });
};

Game.prototype.wrap = function(pos) {
  // return [Math.abs(pos[0]%this.DIM_X), Math.abs(pos[1]%this.DIM_Y)];
  let res = [pos[0],pos[1]];
  if (pos[0] < 0) {
    res[0] = this.DIM_X;
  } else if (pos[0] > this.DIM_X) {
    res[0] = 0;
  }
  if (pos[1] < 0) {
    res[1] = this.DIM_Y;
  } else if (pos[1] > this.DIM_Y) {
    res[1] = 0;
  }
  return res;
}

Game.prototype.checkCollisions = function() {
  for (let i = 1; i < this.asteroids.length; i++) {
    for (let j = 0; j < i; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        // alert("COLLISION");
        // console.log("COLLISION");
        this.asteroids[i].collideWith(this.asteroids[j]);
        break;
      }
    }
  }
}

Game.prototype.remove = function(object) {
  this.asteroids.splice(this.asteroids.indexOf(object), 1);
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

module.exports = Game;
