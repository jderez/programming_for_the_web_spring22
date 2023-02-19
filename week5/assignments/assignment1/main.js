const DOWN = 'down';
const UP = 'up';
let startingX = 85;
let startingY = 135;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

let cardFaceArray = [];
let cardBack;
let bg;
let header;
let bodyCopy;

function preload() {
    cardBack = loadImage('images/cardback.jpg');
    cardFaceArray = [
        loadImage('images/img1.png'),
        loadImage('images/img2.png'),
        loadImage('images/img3.png'),
        loadImage('images/img4.png'),
        loadImage('images/img5.png'),
        loadImage('images/img6.png'),
        loadImage('images/img7.png'),
        loadImage('images/img8.png'),
    ]
}

function setup () {
    createCanvas(650, 700);
    background('pink');
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIndex = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIndex];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used card so it doesnt get randomly selected again
        cardFaceArray.splice(randomIndex, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 123;
        }
        startingY += 123;
        startingX = 85;
    }
}

function draw() { 

    fill('#F4EB4D');
    textSize(24);
    textFont(header);
    text('Toon Memory Game', 85, 90);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('#FFE45C');
        textSize(24);
        text('Winner!', 275, 660);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    strokeWeight(4);
    stroke('#1C4715')
    fill('#F9FDB3');
    rect(395, 68, 80, 30, 5);
    rect(485, 68, 80, 30, 5);
    fill('black');
    noStroke();
    textSize(18);
    textFont(bodyCopy);
    text('Flips ' + gameState.attempts * 2, 403, 88);
    text('Points ' + gameState.numMatched, 493, 88);

}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flippedCards length and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX,mouseY)) {
             gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // Cards match! Time to score!
            // marked cards as matched so they dont flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card{
    constructor (x,y,cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 110;
        this.height = 110;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if (this.face === UP || this.isMatch) {
            fill('cyan');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
            fill('pink');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y, this.width, this.height);
        }
    }
    didHit(mouseX,mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;  
    }
    return array;
}