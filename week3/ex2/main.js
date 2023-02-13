function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor,secondaryColor, circleOutlineColor, dotColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(circleOutlineColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('darkblue');
    strokeWeight(5);
    noFill();
    rect(100, 100, 100);
    rect(100, 0, 100);
    rect(0, 100, 100);
    fill(dotColor);
    stroke('darkred');
    triangle(200, 190, 160, 100, 200, 0);
    triangle(0, 190, 40, 100, 0, 0);
    triangle(190, 0, 100, 40, 0, 0);
    triangle(0, 200, 100, 150, 190, 200);
    fill('darkred');
    noStroke();
    rect(75, 75, 50, 50);
}

function draw() {
    createTile(0, 0, 'red', 'yellow', 'orange', 'purple');
    createTile(0, 200, 'blue', 'white', 'purple', 'green');
    createTile(0, 200, 'green', 'yellow', 'green', 'white');
    createTile(200, -400, 'blue', 'cyan', 'darkred', 'cyan');
    createTile(0, 200, 'orange', 'darkblue', 'red', 'white');
    createTile(0, 200, 'cyan', 'green', 'yellow', 'darkyellow');

    createTile(200, -400, 'darkblue', 'white', 'darkblue', 'orange');
    createTile(0, 200, 'green', 'yellow', 'darkred', 'darkblue');
    createTile(0, 200, 'white', 'purple', 'orange', 'blue');
}