//In this tutorial we learn how to create 
//Shape and color 

//Variables Here
let c; //color 


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  rectMode(CENTER);
  
  c = 0; 
}

function draw() {
  background(c, 100, 100); //h, s, b

  //SHAPES --------------------------------------------
  fill(22, 60, 87); //alpha is transparency
  noStroke();
  circle(width / 2, height / 2, width * 0.2); //x, y, d

  fill(238, 62, 86);
  ellipse(width / 3, height / 4, width * 0.2, height * 0.4); //x, y, w, h

  fill(255, 0.5);
  square(width / 2, height * 0.2, width * 0.2); //x y s

  rect(width / 2, height * 0.8, width * 0.2, height * 0.4); //x y w h
  
  strokeWeight(2);
  stroke(0);
  arc(width * 0.8, height * 0.5, 80, 80, 0, PI + QUARTER_PI);

  beginShape(TRIANGLES);
  curveVertex(128, 64);
  curveVertex(657, 320);
  curveVertex(304, 493);
  curveVertex(128, 64);
    curveVertex(196, 260);
  curveVertex(462, 98);
  endShape();
  
  c += 1;
  c = c%360
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
