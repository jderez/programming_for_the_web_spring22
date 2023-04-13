function setup() {
    createCanvas(400, 400);
    background(200);
  }
  
  function draw() {
    noStroke();
    fill(random(255), random(255), random(255), 50);
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        ellipse(i * 40 + 20, j * 40 + 20, 30, 30);
      }
    }
  }

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}
  