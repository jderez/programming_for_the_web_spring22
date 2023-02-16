let bubble1; 
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {
    constructor() {
        this.x = 300;
        this.y = 200;
    }

    move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}