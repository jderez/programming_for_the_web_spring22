function setup() {
    createCanvas(1800, 1200);
}

function draw() {
    if (mouseIsPressed) {
        fill(255);
        ellipse(mouseX, mouseY, 80, 80);
    } 
    ;
}