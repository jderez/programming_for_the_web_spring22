let rows = 10;
let cols = 10;
let spacing = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = i * spacing;
      let y = j * spacing;
      let t = millis() / 1000;
      let offset = sin(t + i + j) * spacing / 2;
      ellipse(x + offset, y + offset, 10, 10);
    }
  }
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}