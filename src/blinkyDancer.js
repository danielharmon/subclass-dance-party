class MakeBlinkyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    this.oldStep = MakeDancer.prototype.step;
    this.oldStep();
    this.$node.toggle();
  }
}
