var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, left, timeBetweenSteps);
  this.oldStep = this.step;
  //return object
};

MakeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  blinkyDancer.$.node.toggle();
};