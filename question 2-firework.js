//Emma Stanley
//Assignment 4, Question 2
 let tileCount;
 let tileWidth;
 let tileHeight;

 function setup() {
   noLoop();
   createCanvas(400, 400);
   tileCount = 5;
   tileSize = width / tileCount;
// firework 1 
   firework1 = {
     x: 240,
     y: 10,
     size: 0.4,
     fire: 11, 
     type: "pink"
     
   };
   // firework 2
   firework2 = {
     x: 140,
     y: 0,
     size: 0.5,
     type: "pink",
   };
   // firework 3
   firework3 = {
     x: 230,
     y: 300,
     size: 0.6,
     fire:10, 
     type: "pink",
   };
   // firework 4
   firework4 = {
     x: 350,
     y: 200,
     size: 0.9,
     fire: 10,
    type: "pink",
   };
   // firework 5
   firework5 = {
     x: 380,
     y: 50,
     size: 0.5,
     fire:10,
     type: "pink",
   };
   // firework 6
   firework6 = {
     x: 100,
     y: 30,
     size: 0.7,
     fire: 9,
     type: "pink",
   };
 }

 function draw() {
   background("yellow");
   push();
   for (let rowCount = 0; rowCount < 5; rowCount++) {
     push();
     for (let tileCount = 0; tileCount < 5; tileCount++) {
       fireworkTile(0, 0, 0.2);
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
     // made up of an arc 
     arc(10, 10, 90, 140, 80, 240);
        fill("tomato");
    // made up of an arc 
    arc(30, 70, 30, 140, 280, 100);
     fill("darkturquoise");
     // made up of an arc 
      arc(0, 0, 30, 150, 250, 85);
     translate(40, 30);
     rotate(15);
   }
   pop();
   pop();
 }
// firework function 
 function fireworkTile(x, y, size) {
   push();
   translate(x, y);
   scale(size);
   addFirework(firework1);
   addFirework(firework2);
   addFirework(firework3);
   addFirework(firework4);
   addFirework(firework5);
   addFirework(firework6);
   pop();
   
 }
