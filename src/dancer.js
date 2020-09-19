var MakeDancer = class {
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  lineUp() {
    var line = $('body').height() / 2;
    this.$node.css('left', line);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};