var MakeBouncyDancer = class extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super (top, left, timeBetweenSteps);
    this.$node.addClass('bounce-1');
  }
  step() {
    this.oldStep = MakeDancer.prototype.step;
    this.oldStep();
  }
};