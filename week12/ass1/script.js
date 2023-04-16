let sound;
let playSound = false;

function preload() {
  soundFormats('mp3', 'ogg');
  sound = loadSound('calvin.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  text('Click anywhere to play the sound', 20, 20);
}

function mouseClicked() {
  playSound = true;
}

function mouseReleased() {
  playSound = false;
}

function mouseMoved() {
  if (playSound) {
    let pitch = map(mouseX, 0, width, 200, 800);
    sound.rate(pitch/440); 
    sound.play();
  }
}