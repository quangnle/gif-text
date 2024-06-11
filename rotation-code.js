class RotationCode {
  constructor(angle, incr = 1) {
    this.angle = angle;
    this.incr = incr;
    this.counter = 0;
  }

  apply() {
    if (this.counter != this.angle) {
      this.counter += this.incr;
    }
    rotate((this.counter * PI) / 180);
  }
}
