// Set up canvas
function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  // Draw circles in a repeated pattern
  function draw() {
    for (let i = 0; i < width; i += 50) {
      for (let j = 0; j < height; j += 50) {
        noStroke();
        fill(random(255), random(255), random(255));
        ellipse(i, j, 30, 30);
      }
    }
  }
  
function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}