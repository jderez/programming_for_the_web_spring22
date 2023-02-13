let angle = 0;
let rotateBy = 5;
let rotateByTwo = 5;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(155);
    strokeWeight(1);
    ellipse(200, 200 + alt, 200 - alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}
