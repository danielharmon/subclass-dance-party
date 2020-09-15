MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>');
  this.$node.addClass('bounce-1');
  //return object
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;
MakeBouncyDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeBouncyDancer.prototype.step = function() {
  this.oldStep();
  //this.$node.toggle();
};