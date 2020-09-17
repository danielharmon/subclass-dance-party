MakeSlideDancer = function(top, left, timeBetweenSteps) {
  //create object
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide-1');
  //return object
};
MakeSlideDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlideDancer.prototype.constructor = MakeSlideDancer;
MakeSlideDancer.prototype.flash = true;
MakeSlideDancer.prototype.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
MakeSlideDancer.prototype.i = 0;
MakeSlideDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeSlideDancer.prototype.step = function() {
  this.i++;
  if (this.i > this.colors.length) {
    this.i = 0;
  }
  this.oldStep();
  if (this.flash === true) {
    this.$node.css('border', '50px solid ' + this.colors[this.i]);
  }
};