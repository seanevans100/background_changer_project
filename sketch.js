
function setup(){
  createCanvas(500,500);
}
function draw(){
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("blue");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("yellow");
  }
}