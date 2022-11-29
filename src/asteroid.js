const Util = require("./utils");
const MovingObject = require("./moving_object.js");
function Asteroid(obj) {
  MovingObject.call(this, obj.pos, Util.randomVec(10), 10, "red");
}
Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;