var Weather = function() {};

Weather.prototype.isStormy = function () {
  return Math.floor((Math.random() * 10) + 1) === 10;
};
