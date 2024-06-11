function setup() {
  const theCanvas = createCanvas(250, 250);
  theCanvas.parent("canvas-container");
  background(255);
}

function draw() {
  background(255);
  // draw border around canvas
  stroke(0);
  noFill();
  rect(0, 0, width, height);

  push();
  translate(width / 2, height / 2);
  drawingMessages.forEach((msg, index) => {
    push();
    msg.draw();
    pop();
  });
  pop();
}

/*
o) --- p 10 0; r 90
o) --- p -10 0 -1 1; r 90
) o ( --- p 0 20
\|/ --- p 0 40
*/
