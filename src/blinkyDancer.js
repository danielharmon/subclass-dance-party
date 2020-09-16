MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //return object
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  // this.lineUp();
  this.$node.toggle();
};
