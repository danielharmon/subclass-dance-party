var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  console.log(this.oldStep);
  //return object
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
