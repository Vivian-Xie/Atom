let imghhh = [];
let maskImage;
let count=1

function preload(){

  maskImage= loadImage("images/dialog.png")

  for (let i=1; i<=2; i++){
    let fn = "images/Qi"+i+".png";
    console.log(fn);

    let img = loadImage(fn);
    imghhh.push(img);
  }

}

function setup() {
  createCanvas(340, 300);
}

function draw() {
  background("white");

  let whichImg = count % 2;
if(whichImg==1){
  image(imghhh[0],160,126)}
else{
    image(imghhh[1],154,122);
  image(maskImage,10,2,250,235)
  text("Help me accomplish the tasks",59,75)
  text("on the to do list",94,95)
  text("and enjoy the beautiful views",59,115)
  text("of Shanghai Subway Stations!",45,135)
}
}
function mousePressed(){
  count=count+1
  console.log("1");
}
