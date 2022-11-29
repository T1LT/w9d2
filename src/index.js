const GameView = require("./game_view.js");
window.GameView = GameView;
console.log("Webpack is working!");

// canvas
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gameView = new GameView(canvas);
gameView.start();