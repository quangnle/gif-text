class DrawingMessage {
  constructor(message) {
    this.message = message;
    this.parse();
  }

  // Parse the message and return the drawing object
  // format: mesageContent --- controlCode
  parse() {
    const arr = this.message.split("---");
    this.content = arr[0].trim();
    if (arr.length > 1)
      this.controlCodes = this.parseControlCodes(arr[1].trim());
  }

  parseControlCodes(content) {
    const arr = content.split(";");
    const controlCodes = [];
    arr.forEach((ar) => {
      const controlCode = ar.trim().split(" ");
      switch (controlCode[0]) {
        case "p":
          controlCodes.push(
            new TransitionCode(
              controlCode[1] * 1,
              controlCode[2] * 1,
              controlCode[3] ? controlCode[3] * 1 : 1,
              controlCode[4] ? controlCode[4] * 1 : 1
            )
          );
          break;
        case "r":
          controlCodes.push(
            new RotationCode(
              controlCode[1] * 1,
              controlCode[2] ? controlCode[2] * 1 : 1
            )
          );
          break;
        case "s":
          controlCodes.push(
            new ScaleCode(
              controlCode[1] * 1,
              controlCode[2] ? controlCode[2] * 1 : 1
            )
          );
          break;
      }
    });
    return controlCodes;
  }

  draw() {
    push();
    textSize(12);
    this.controlCodes.forEach((controlCode) => {
      controlCode.apply();
    });
    textAlign(CENTER, CENTER);
    text(this.content, 0, 0);
    pop();
  }
}
