const Asteroid = require("./asteroid.js");

function Game(canvas) {
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.ctx = canvas.getContext("2d");
  this.NUM_ASTEROIDS = 12;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < this.NUM_ASTEROIDS) {
    const asteroid = new Asteroid({ pos: this.randomPosition() });
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
  });
};

module.exports = Game;
