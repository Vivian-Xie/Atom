let imgs = [];
let maskImage;
let count=1

function preload(){

  maskImage= loadImage("images/dialog.png")

  for (let i=1; i<=2; i++){
    let fn = "images/Qi"+i+".png";
    // console.log(fn);
    let img = loadImage(fn);
    imgs.push(img);
  }

}

function setup() {
  createCanvas(340, 300);
}

function draw() {
  background("white");

  let whichImg = count % 2;
if(whichImg==0){
  image(imgs[0],160,126)}
else{
    image(imgs[1],154,122);
  image(maskImage,10,2,250,235)
  textSize(20)
  text("It's time to go home.",52,105)
  // text("",59,130)

}
}
function mousePressed(){
  count=count+1
}
