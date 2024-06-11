class ScaleCode {
  constructor(scale, incr = 1) {
    this.scale = scale;
    this.counter = 0;
    this.incr = incr;
  }

  apply() {
    if (this.counter != this.scale) {
      this.counter += this.incr;
    }
    textSize(this.counter);
  }
}
