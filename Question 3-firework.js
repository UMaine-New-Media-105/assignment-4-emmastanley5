//Emma Stanley
//Assignment 4, Question 3

let tileCount;
let tileWidth;
let tileHeight;

function setup() {
  noLoop();
  createCanvas(400, 400);
  tileCount = 5;
  tileSize = width / tileCount;
  //random colors 
  fireworkTypeColor = [ "tomato", "darkturquoise", "pink"];

  //firework 1 
  firework1 = {
    x: 240,
    y: 10,
    size: 0.4,
    fire: 22,
  type: "mediumspringgreen",
  };
  //firework 2
  firework2 = {
    x: 20,
    y: 0,
    size: 0.8,
    fire: 11,
 type: "pink",
  };
  //firework 3
  firework3 = {
    x: 230,
    y: 300,
    size: 1,
    fire: 11,
   type: "orchid ",
  };
  //firework 4
  firework4 = {
    x: 350,
    y: 200,
    size: 0.8,
    fire: 20,
 type: "pink",
  };
  //firework 5
  firework5 = {
    x: 100,
    y: 50,
    size: 0.7,
    fire: 10,
 type: "pink",
  };
  //firework 6
  firework6 = {
    x: 100,
    y: 30,
    size: 0.7,
    fire: 22,
    type: "pink",
  };
}

function draw() {
  background("yellow");
  push();

  for (let rowCount = 0; rowCount < 5; rowCount++) {
    push();
    for (let tileCount = 0; tileCount < 5; tileCount++) {
    push();
    scale(0.2);
      //random 
      firework1.type = random(fireworkTypeColor);
      firework2.type = random(fireworkTypeColor);
      firework4.type = random(fireworkTypeColor);
      firework5.type = random(fireworkTypeColor);
      firework6.type = random(fireworkTypeColor);
     //random size
      firework3.size = random(0.2, 1);
      //random width and height 
      firework1.x = random(width);
      firework1.y = random(height);
      firework2.x = random(width);
      firework2.y = random(height);
      firework3.x = random(width);
      firework3.y = random(height);
      firework4.x = random(width);
      firework4.y = random(height);
      firework5.x = random(width);
      firework5.y = random(height);
      firework6.x = random(width);
      firework6.y = random(height);
     // add firework function 
      addFirework(firework1);
      addFirework(firework2);
     addFirework(firework3);
    addFirework(firework4);
     addFirework(firework5);
      addFirework(firework6);
      pop();

      translate(tileSize, 0);
    }

    pop();
    translate(0, tileSize);
  }
  pop();
}

function addFirework(firework) {
  push();
  noStroke();
  translate(firework.x, firework.y);
  scale(firework.size);
  
  push();
  for (let fireworkDrawn = 0; fireworkDrawn < firework.fire; fireworkDrawn++) {
    fill(firework.type);
     fill("darkturquoise");
    arc(10, 10, 90, 140, 80, 240);
   fill("tomato")
    arc(30, 70, 30, 140, 280, 100);
     fill("pink")
      arc(0, 0, 30, 100, 40, 85);
    translate(40, 25);
    rotate(20);
  }
  pop();
  pop();
}
