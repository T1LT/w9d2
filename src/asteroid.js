const Util = require("./utils");
const Ship = require("./ship");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");
function Asteroid(obj) {
  MovingObject.call(this, obj.pos, Util.randomVec(3), 20, "red", obj.game);
}
Util.inherits(Asteroid, MovingObject);
Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Bullet) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
};
module.exports = Asteroid;
