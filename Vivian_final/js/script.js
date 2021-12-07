let imgs = [];
let img;
let opacity = 0;
let begin;
let uturn=1
let landpoX=[1076,1105,496,1234,810,1000,648,811]
let landpoY=[800,835,1046,633,814,730,808,630]
let move=2
let oldx=1075
let oldy=790
let newx=1075
let newy=790
let x,y
let money=3;
let ticket=false;
let travel=true;

endTime = 0;
interval = 2000;
first_click = false;


let calculated = false

function preload() {
  // for(i=1;i<=3;i++){
  //   let fn="station"+i+".jpg"
  //   let img=loadImage(fn)
  //   imgs.push(img)}
  img = loadImage("images/map.jpg");
  img2 = loadImage("images/landmark.png");
}

function setup() {
  createCanvas(1500, 2000);
  begin = false;


}

function draw() {
//   map
  image(img, 0, 0, width, height);
//   on the spot rect
  push()
  rectMode(CENTER);
  let recthe = map(sin(frameCount / 5), -1, 1, 16, 20);
  let rectwi = map(sin(frameCount / 5), -1, 1, 26, 30);
  fill(188,145,233)
  stroke(99,16,140)
// school
  let school= rect(1076, 842, rectwi, recthe, 30);
//  Science Museum
  rect(1104, 870, rectwi, recthe, 30)
//   South Railway
  rect(501,1087, rectwi, recthe, 30)
//   Jinqiao dorm
  rect(1235,670, rectwi, recthe, 30)
//   Xintiandi
  rect(810,858, rectwi, recthe, 30)
//   Lujiazui
  rect(1001,768, rectwi, recthe, 30)
//   library
  rect(650,850, rectwi, recthe, 30)
//   Hanzhong
  rect(810,676, rectwi, recthe, 30)
//   nyu landmark
  pop()
  let landmark = map(sin(frameCount / 5), -1, 1, 55, 65);

//   //// school
//   image(img2, 1050, 763, landmark, landmark);
// // // Science Museum
//   image(img2, 1076,800, landmark, landmark);
// // //  South Railway
//   image(img2, 496,1046, landmark, landmark);
// //  // Jinqiao dorm
//   image(img2, 1234,633, landmark, landmark);
// //  // Xintiandi
//   image(img2, 810,814, landmark, landmark);
// // //  Lujiazui
//   image(img2, 1000,730, landmark, landmark);
// // //  library
//  image(img2, 648,808, landmark, landmark);
// // //  Hanzhong
//   image(img2, 811,630, landmark, landmark);



  push()
    textSize(40)
  fill(0)
  text("You have spent  "+money+"  rmb on subway tickets.",577,107)
  if(dist(mouseX,mouseY,1104,870)<30){
    text('Go to Shanghai Science and Technology Museum.', 10, 60);
    text('Double click to view more.', 10, 110)
  }
// //  South Railway
  if(dist(mouseX,mouseY,501,1087)<30){
    text('Go to Shanghai South Railway Station.', 10, 60);
    text('Double click to view more.', 10, 110)
  }
//  // Jinqiao dorm
    if(dist(mouseX,mouseY,1235,670)<30){
      text('Return to Jinqiao dormitory', 10, 60);
    text('Double click to view more.', 10, 110)
  }
//  // Xintiandi
  if(dist(mouseX,mouseY,810,858)<30){
    text('Go to Xintiandi', 10, 60);
    text('Double click to view more.', 10, 110)
  }
// //  Lujiazui
  if(dist(mouseX,mouseY,1001,768)<30){
    text('Go to Lujiazui', 10, 60);
    text('Double click to view more.', 10, 110)
  }
// //  library
  if(dist(mouseX,mouseY,650,850)<30){
    text('Go to Shanghai Library', 10, 60);
    text('Double click to view more.', 10, 110)
  }
// //  Hanzhong
  if(dist(mouseX,mouseY,810,676)<30){
    text("Go to Grandma's house on Hanzhong Road" , 10, 60);
    text('Double click to view more.', 10, 110)
  }



if(move==true&&travel==true){
  // // Science Museum
    if(dist(mouseX,mouseY,1104,870)<30){
      text('Go to Shanghai Science and Technology Museum.', 10, 60);
      newx=1105
      newy=835
      ticket=true
      if(!calculated){
      calculated = true
      // cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  // //  South Railway
    if(dist(mouseX,mouseY,501,1087)<30){
      text('Go to Shanghai South Railway Station.', 10, 60);
      newx=496
      newy=1046
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  //  // Jinqiao dorm
      if(dist(mouseX,mouseY,1235,670)<30){
        text('Return to Jinqiao dormitory', 10, 60);
      newx=1234
      newy=633
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  //  // Xintiandi
    if(dist(mouseX,mouseY,810,858)<30){
      text('Go to Xintiandi', 10, 60);
      newx=810
      newy=814
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  // //  Lujiazui
    if(dist(mouseX,mouseY,1001,768)<30){
      text('Go to Lujiazui', 10, 60);
      newx=1000
      newy=730
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  // //  library
    if(dist(mouseX,mouseY,650,850)<30){
      text('Go to Shanghai Library', 10, 60);
      newx=648
      newy=808
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }
    }
  // //  Hanzhong
    if(dist(mouseX,mouseY,810,676)<30 ){
      text("Go to Grandma's house on Hanzhong Road" , 10, 60);
      newx=811
      newy=630
      ticket=true
      if(!calculated){
      calculated = true
      cDistance=dist(oldx,oldy,newx,newy)
      }


    }



  x=(newx-oldx)*0.05
  y=(newy-oldy)*0.05

  oldx=oldx+x
  oldy=oldy+y}
  push()
  imageMode(CENTER);
  image(img2,oldx,oldy,landmark,landmark)
   if(dist(oldx,oldy,newx,newy)<5){
   move=false
   }
   if(move==false){
     newx=oldx
     newy=oldy
   }
  pop()
 pop()
 // if (!first_click) {}
       // console.log(cDistance)}
}


function mousePressed() {

  move = true;
click=true
  if (!first_click) {
    console.log("pressed");
    first_click = true;
    endTime = millis();
  } else if (millis() - endTime < interval) {
    console.log("dc");
    ticket=false
    // S&T museum
    if (dist(mouseX, mouseY, 1104, 870) < 30) {
      window.open("index3.html", "");
      ticket=true
    }

    // //  South Railway
    if (dist(mouseX, mouseY, 501, 1087) < 30) {
      window.open("index4.html", "");
    }
    //  // Jinqiao dorm
    if (dist(mouseX, mouseY, 1235, 670) < 30) {
      window.open("index8.html", "");
            travel=false
    }
    //  // Xintiandi
    if (dist(mouseX, mouseY, 810, 858) < 30) {
      window.open("index2.html", "");
    }
    // //  Lujiazui
    if (dist(mouseX, mouseY, 1001, 768) < 30) {
      window.open("index5.html", "");
    }
    // //  library
    if (dist(mouseX, mouseY, 650, 850) < 30) {
      window.open("index1.html", "");
    }
    // //  Hanzhong
    if (dist(mouseX, mouseY, 810, 676) < 30) {
      window.open("index6.html", "");
    }

    first_click = false;
  } else if (millis() - endTime > interval) {
    first_click = false;
    ticket=false
  }

  if(ticket==true){

  // if(-200<dist(newx,newy,oldx,oldy) && dist(newx,newy,oldx,oldy)<200){
    if(cDistance < 200&&cDistance >-200){
    money=money+3
    ticket=false
  }
  // else if((200<dist(newx,newy,oldx,oldy) && dist(newx,newy,oldx,oldy)<800)||(-800<dist(newx,newy,oldx,oldy) && dist(newx,newy,oldx,oldy)<-250)){
else if((cDistance>=200 && cDistance < 800)||(cDistance<=-200&&cDistance>-800)){
    money=money+4
    ticket=false
  }else{
    money=money+5
    ticket=false
  }
}
}


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");


  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
