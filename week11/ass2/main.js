let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  
  x += 10;
  if (x > width) {
    x = 0;
    y += 50;
  }
  
  if (y > height) {
    x = 0;
    y = 0;
    background(220);
  }
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}
