const Util = require("./utils");
const Ship = require("./ship");
const MovingObject = require("./moving_object.js");
function Asteroid(obj) {
  MovingObject.call(this, obj.pos, Util.randomVec(3), 20, "red", obj.game);
}
Util.inherits(Asteroid, MovingObject);
Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};
module.exports = Asteroid;
