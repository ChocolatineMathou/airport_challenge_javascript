var Airport = function() {};
var Plane = function() {};

Airport.prototype.land = function(plane) {
  return "Plane has landed";
};

Airport.prototype.TakeOff = function(plane) {
  return "Plane took off";
}
