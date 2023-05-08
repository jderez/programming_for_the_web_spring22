let plant;

function setup() {
  createCanvas(windowWidth, windowHeight);
  plant = new Plant();
}

function draw() {
  background(200, 240, 200);
  plant.setSunlight(map(document.getElementById("sunlight").value, 0, 100, 0, 1));
  plant.setWater(map(document.getElementById("water").value, 0, 100, 0, 1));
  plant.setSoil(document.getElementById("soil").value);
  plant.update();
  plant.display();
}

function Plant() {
  this.x = width / 2;
  this.y = height - 50;
  this.height = 0;
  this.sunlight = 0;
  this.water = 0;
  this.soil = "clay";

  this.setSunlight = function (sunlight) {
    this.sunlight = sunlight;
  };

  this.setWater = function (water) {
    this.water = water;
  };

  this.setSoil = function (soil) {
    this.soil = soil;
  };

  this.update = function () {
    let growthRate = this.sunlight * this.water;
    switch (this.soil) {
      case "clay":
        growthRate *= 0.5;
        break;
      case "sandy":
        growthRate *= 1.5;
        break;
    }
    this.height += growthRate;
    if (this.height > height - 100) {
      this.height = height - 100;
    }
  };

  this.display = function () {
    noStroke();
    fill(0, 150, 0);
    let plantHeight = this.height * 5;
    let plantWidth = this.height / 2;
    let plantTop = this.y - plantHeight;
    beginShape();
    curveVertex(this.x, plantTop);
    curveVertex(this.x - plantWidth / 2, plantTop + plantHeight / 3);
    curveVertex(this.x - plantWidth / 2, plantTop + plantHeight * 2 / 3);
    curveVertex(this.x, plantTop + plantHeight);
    curveVertex(this.x + plantWidth / 2, plantTop + plantHeight * 2 / 3);
    curveVertex(this.x + plantWidth / 2, plantTop + plantHeight / 3);
    curveVertex(this.x, plantTop);
    endShape();

    let numBranches = floor(this.height / 100);
    let branchLength = this.height / (numBranches + 1);
    let branchThickness = this.height / 100;

    stroke(0, 100, 0);
    strokeWeight(branchThickness);
    for (let i = 0; i < numBranches; i++) {
      let branchY = this.y - (i + 1) * branchLength;
      let branchX = this.x;
      line(branchX, branchY, branchX + random(-20, 20), branchY - branchLength);
      line(branchX, branchY, branchX + random(-20, 20), branchY - branchLength);
    }
  };
}

  