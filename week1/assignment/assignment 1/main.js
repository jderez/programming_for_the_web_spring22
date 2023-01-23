let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "grey")
let stroke2 = prompt("enter another basic color lowercase", "orange");
function setup() {
    createCanvas(1000, 800);
    background("lightblue");
}
function draw() {
    // landscape 
    strokeWeight(1);
    ellipse(700, 900, 800);
    fill("white");
    ellipse(100, 700, 900);
    // tree 
    strokeWeight(7);
    fill("brown")
    rect(790, 650, 70, 100);
    strokeWeight(7);
    fill("green");  
    triangle(800, 300, 900, 680, 750, 680);    
    // deco
    strokeWeight(1);
    fill("red")
    ellipse(800, 500, 30);
    ellipse(840, 540, 20);
    ellipse(860, 590, 30);
    ellipse(800, 360, 20);
    ellipse(780, 610, 30);
    ellipse(840, 660, 20);
    ellipse(830, 440, 30);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20)
    stroke(stroke1);
    // left leg
    ellipse(500, 650, 450);
    // body
    ellipse(500, 450, 350);
    // head
    ellipse(500, 200, 250);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);
    // arms 
    line(360, 350, 300, 275);
    line(640, 350, 800, 175);
}