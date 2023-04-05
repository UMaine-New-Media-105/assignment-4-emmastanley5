//Emma Stanley
//Assignment 4, Question 1

function setup() {
  noLoop();
  angleMode(DEGREES);
  createCanvas(400, 400);
}

function draw() { 
  background("black");
  //my fire works
  // firework 1
  fireWork(240, 10, 0.3);
  // firework 2
  fireWork(140, 0, 0.3);
  // firework 3
  fireWork(230, 300, 0.5);
  // firework 4
  fireWork(350, 200, 0.5);
  // firework 5
  fireWork(380, 50, 0.5);
  // firework 6
  fireWork(200, 110, 0.5);
}
//firwork function 
function fireWork(x, y, size) {
 push()
  noStroke();
  translate(x, y);
  scale(size);
  fill("darkturquoise");
  push()
  // blue part of the firework 
  for (let fireDrawn = 0; fireDrawn <= 1000; fireDrawn++) {
    arc(20, 0, 30, 150, 250, 85);
    translate(40, 25);
    rotate(20);
  }
  pop();
  push();
  // yellow part of the firework making up most of the firwork 
  for (let fireDrawn = 0; fireDrawn <= 1000; fireDrawn++) {
    fill("yellow");
    arc(10, 30, 30, 140, 80, 300);
    translate(40, 25);
    rotate(20);
  }
  pop();
  push();
  //sharp pointy tomato colored part of the firework, sloest to the black center  
  for (let fireDrawn = 0; fireDrawn <= 1000; fireDrawn++) {
    fill("tomato");
    // made up of an arc 
    arc(30, 70, 30, 140, 280, 100);
    translate(40, 25);
    rotate(20);
    
  }
  pop();
  pop();
}
