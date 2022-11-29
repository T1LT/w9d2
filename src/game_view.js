const Game = require("./game.js");

function GameView(canvas) {
  this.game = new Game(canvas);
  this.ctx = canvas.getContext('2d');
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  setInterval(() => {
    // debugger;
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
  key('w', () => {this.game.ship.power([0, -1])});
  key('a', () => {this.game.ship.power([-1, 0])});
  key('s', () => {this.game.ship.power([0, 1])});
  key('d', () => {this.game.ship.power([1, 0])});
}

module.exports = GameView;