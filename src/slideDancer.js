MakeSlideDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide-1');
  //return object
};

MakeSlideDancer.prototype = Object.create(MakeDancer.prototype);

MakeSlideDancer.prototype.constructor = MakeSlideDancer;
MakeSlideDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeSlideDancer.prototype.step = function() {
  this.oldStep();
};