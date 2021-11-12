// let roungbutton= document.getElementById('roundButton');
// roundButton.addEventListener('click',roundButtonClicked);
// function roundButtonClicked(){
//   let rectElem=document.getElementById('rect');
//   rectElem.style.borderRadius='50px'
// }
// // alert("Hello")
//
//
// function say(what){
//   let elem = document.getElementById('lyrics');
//
//   // append
//   //document.body.appendChild(newElement);
//   let newElem = document.createElement('p');
//   newElem.innerHTML = what;
//
//   elem.appendChild(newElem);
//
//   elem=document.getElementById('heading');
//   if (what=='great'){
//     elem.style.backgroundColor='red'
//   }
//
// }
// // elem.style.backgroundColor='rgb(124,12,12)'
let ee
function say(ee){
  let name=ee
}

 


function setup (){
  createCanvas(500,500);
  rectMode(CENTER);

  background(0,0,0)
}

function draw(){

  translate(width/2, height/2);
  stroke(255,255,255);
  strokeWeight(5)
  noFill();


  let angle = sin(frameCount/200)*5;
  let angle2 = sin(frameCount/300)*50;
  let radius=400

  let r = map(cos(angle), -1, 1, 0, 255);
  let g = map(sin(angle), -1, 1, 0, 255);
  let b = map(noise(angle), 0, 1, 0, 255);
  let posX = radius * cos(angle) * noise(angle);
  let posY = radius * sin(angle) * noise(angle);
  push()
  background(0,0,0)
  rotate(angle);
  stroke(r, g, b, 200);
  ellipse(0,0,posX,posY)
  rect(0,0,posX,posY)
  ellipse(0,0,posY,posX)
  rect(0,0,posY,posX)
  fill(r,g,b,100)
  ellipse(0,0,sin(angle/100)*1000)
  pop()
  angle=angle+1

}
