const Util = require("./utils");
const MovingObject = require("./moving_object.js");
function Bullet(obj) {
  MovingObject.call(this, obj.pos, obj.vel, 3, "green", obj.game);
}
Util.inherits(Bullet, MovingObject);

module.exports = Bullet;