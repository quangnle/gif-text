class TransitionCode {
  constructor(x, y, incrX = 1, incrY = 1) {
    this.x = x;
    this.y = y;
    this.incrX = incrX;
    this.incrY = incrY;
    this.counterX = 0;
    this.counterY = 0;
  }

  apply() {
    if (this.counterX != this.x) {
      this.counterX += this.incrX;
    }
    if (this.counterY != this.y) {
      this.counterY += this.incrY;
    }
    translate(this.counterX, this.counterY);
  }
}
