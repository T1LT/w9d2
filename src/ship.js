const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");
function Ship(obj) {
  MovingObject.call(this, obj.pos, [0, 0], 10, "blue", obj.game);
}
Utils.inherits(Ship, MovingObject);
Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}
Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}
module.exports = Ship;