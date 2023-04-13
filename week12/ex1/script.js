let sound;
let circleSize = 50;

function preload() {
  sound = loadSound('calvin.mp3');
}

function setup() {
  createCanvas(400, 400);
  sound.play();
  sound.setLoop(true);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220);
  
  let level = amplitude.getLevel();
  
  // Calculate the new circle size based on the music amplitude
  let newCircleSize = 50 + level * 500;
  circleSize = lerp(circleSize, newCircleSize, 0.1);
  
  // Draw the circle
  noStroke();
  fill(255);
  ellipse(width/2, height/2, circleSize, circleSize);
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
