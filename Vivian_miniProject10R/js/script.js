let song;
let amplitude;
let tea=0
let songIsPaused
let colorpa
let c
function preload() {
  song = loadSound("images/Hoedown.mp3");
}

function setup() {
    let cnv = createCanvas(700,700);
  cnv.mousePressed(userStartAudio); // ***

  amplitude = new p5.Amplitude();
  background(0, 0, 0);
  rectMode(CENTER);
  frameRate(200)
  sing()
}

function draw() {
  let level = amplitude.getLevel();
  let dia = map(level, 0.0, 1.0, 30, 100);
  let radius = 10;
  let number=frameCount/100
  //set the size of the rectangles
  let posX = radius * cos(frameCount / 100) * dia;
  let posY = radius * sin(frameCount / 100) * dia;
  //set the color
  let colorchange=document.getElementById('color')
  let r = map(colorchange.value, 0,255, 0, 255);
  let g = map(sin(number), -1, 1, 0, 255);
  let b = map(noise(number), 0, 1, 0, 255);
  colorpa=color(r,g,b)
  c=color(255,255,255)

  colorMode(HSB);
  c=color(colorchange.value,100,100);

  push()
  colorMode(RGB)
  background(0, 0, 0, 10);
  pop()
  rectMode(CENTER);
  translate(width / 2, height / 2);
  noFill();

  push();
  rotate(sin(frameCount / 200) * 5*level);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  rotate(sin(frameCount / 200) * 5*level + 0.25);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  rotate(sin(frameCount / 200) * 5*level + 0.5);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  rotate(sin(frameCount / 200) * 5*level + 0.75);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  rotate(sin(frameCount / 200) * 5*level + 1);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  rotate(sin(frameCount / 200) * 5*level + 1.25);
  stroke(c);
  rect(0, 0, posX, posY);
  rect(0, 0, posY, posX);
  rect(0, 0, posY, posX);
  pop();

  push();
  stroke(r, g, b);
  let ball = map(cos(number) * 10*level, -1, 1, 0, 50);
  // ellipse(0, 0, ball, ball);
  pop();


}

let roundButton= document.getElementById('button');
roundButton.addEventListener('click',sing2);
function sing() {
  song.loop();
}
  function sing2(){
      song.pause()
  }
