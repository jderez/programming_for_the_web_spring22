let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Animate the size of a circle using a sine wave
  let size = map(sin(angle), -1, 1, 50, 150);
  ellipse(width/2, height/2, size, size);

  // Animate the position of a rectangle using a sine wave
  let x = map(sin(angle), -1, 1, 0, width);
  rect(x, height/2, 50, 50);

  // Animate the rotation of a line using a sine wave
  let rotation = map(sin(angle), -1, 1, 0, TWO_PI);
  translate(width/2, height/2);
  rotate(rotation);
  line(0, 0, 50, 0);

  // Increment the angle for the next frame
  angle += 0.05;
}
