const Game = require("./game.js");

function GameView(canvas) {
  this.game = new Game(canvas);
  this.ctx = canvas.getContext('2d');
}

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }, 20);
}

module.exports = GameView;