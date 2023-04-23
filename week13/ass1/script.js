let leaves = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    leaves.push(new Leaf(random(width), random(-200, -50)));
  }
  background(0, 50, 0); // set a dark green background
}

function draw() {
  for (let i = 0; i < leaves.length; i++) {
    let l = leaves[i];
    l.update();
    l.display();
  }
}

class Leaf {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.size = random(10, 30);
    this.color = color(random(50, 150), random(150, 200), random(50, 100));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.pos.y > height + 50) {
      this.pos.y = random(-200, -50);
      this.vel.mult(0);
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size/2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 50, 0); // set a dark green background when the window is resized
}
