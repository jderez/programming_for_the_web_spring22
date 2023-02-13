function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('orange');
    rect(0, 0, 200, 200);
    stroke('darkblue');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('darkbleu');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('darkblue');
    strokeWeight(5);
    rect(100, 100, 100);
    rect(100, 0, 100);
    rect(0, 100, 100);
    fill('darkred');
    stroke('darkred');
    triangle(200, 200, 160, 100, 200, 0);
    triangle(0, 200, 40, 100, 0, 0);
    triangle(200, 0, 100, 40, 0, 0);
    triangle(0, 200, 100, 160, 200, 200);
    fill('darkred');
    noStroke();
    rect(75, 75, 50, 50);
}

function draw() {
    createTile();
}