const squareSize = 100;
let startingX = 100;
let startingY = 70;
let mySquares = [];
let startingId = 0;
function setup () {
    createCanvas(680, 700);
    background(0);
    for (let k = 0; k < 5; k++) {
        for (let i = 0; i < 4; i++) {
            square(startingX, startingY, squareSize);
            mySquares.push({ x: startingX, y: startingY, id: startingId });
            startingX += 125;
            startingId++;
        }
        startingY += 120;
        startingX = 100;
    }
    console.log(mySquares);
}

function mousePressed() {
    for (let j = 0; j < mySquares.length; j++) {
        if (mouseX > startingX && mouseX < startingX+squareSize && mouseY > startingY && mouseY < startingY+squareSize) {
            console.log('Card has been clicked', mySquares[j].id);
        }
    }
}