// //Emma Stanley
//Assignment 4, Question 4
function setup() {
  createCanvas(700, 500);
  noStroke();
  angleMode(DEGREES);
 //scale of my rows 
  fireworkScale = `1`;
 //gradient 
  firework = [
    "sun",
    "lighest",
    "lighter",
    "light",
    "middle",
    "dark",
    "darker",
    "darkest",
  ];
    //size and length of my rows 
  tilesPerRow = firework.length;
  tileWidth = width / tilesPerRow;
  tilesPerColumn = 6;
  tileHeight = height / tilesPerColumn;
}
function draw() {
  background("black");
  for (let rowsDrawn = 0; rowsDrawn < tilesPerColumn; rowsDrawn++){
     for (let columnsDrawn = 0; columnsDrawn < tilesPerRow; columnsDrawn++){
    let thisFire = firework[(columnsDrawn + rowsDrawn) % firework.length];
    let thisX = columnsDrawn * tileWidth;
    let thisY = rowsDrawn * tileHeight;
  addFirework(thisFire, thisX, thisY);
  }
  }
}
//function of my firework 
  function addFirework(firework,x, y) {
    push();
    translate(x, y);
    scale(fireworkScale);
    noStroke();
    if (firework == "sun") {
      color("255, 204, 0");
    } else if ( firework == "lighest") {
     color("pink");
    } else if (firework == "lighter") {
      color("aqua");
    } else if (firework == "light") {
      color("purple");
    } else if (firework == "middle") {
      color("orange");
    } else if (firework == "dark") {
      color("yellow");
    } else if (firework == "darker") {
      color("skyblue");
    } else if (firework == "darkest") {
      color("coral");
    }

    //colors for the gradient
    let colors = [
      color("pink"),
      color("aqua"),
      color("purple"),
      color("orange"),
      color("yellow"),
      color("skyblue"),
      color(" coral"),
      color("aqua"),
    ];

 //gardient of firework 
   for (let fireworkDrawn = 0; fireworkDrawn < 8; fireworkDrawn++) {
    fill(colors[fireworkDrawn]);
     // my circles drawn 
     ellipse(40 + fireworkDrawn * 15, 42, 150, 80);
   }
    pop();
}
