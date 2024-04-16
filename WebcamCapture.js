//Code from W3Schools

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.hide();
  frameRate(3);
}

function draw() {
  background(255);
  //move image by the width of image to the left
  translate(cam.width, 0);
  //then scale it by -1 in the x-axis
  //to flip the image
  scale(-1, 1);
  //draw video capture feed as image inside p5 canvas
  image(cam, windowWidth/-1.8, 0, windowWidth, windowHeight);
  
}

function mousePressed(){
     
  save('selfie.png');
  return false;
}