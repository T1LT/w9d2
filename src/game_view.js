const Game = require("./game.js");

function GameView(canvas) {
  this.game = new Game(canvas);
  this.ctx = canvas.getContext('2d');
}

GameView.prototype.start = function() {
  setInterval(() => {
    // debugger;
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
}

module.exports = GameView;