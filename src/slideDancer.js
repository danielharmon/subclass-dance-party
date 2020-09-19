var MakeSlideDancer = class extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super (top, left, timeBetweenSteps);
    this.$node.addClass('slide-1');
    this.i = 0;
  }
  step() {
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.oldStep = MakeDancer.prototype.step;
    this.i++;
    if (this.i > this.colors.length) {
      this.i = 0;
    }
    this.$node.css('border', '50px solid ' + this.colors[this.i]);
    this.oldStep();
  }
  lineUp() {
    var line = $('body').width() / 2;
    this.$node.css('top', line);
  }
};