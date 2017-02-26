var ballX = 0;
var ballY = 0;

var mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(15);
    
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(125);
    var vol = mic.getLevel();
    var h = map(vol, 0, 1, 0, -height/3);
    
    fill(0);
    noStroke();
    rect(0,height/3*2,400,width/2);
    rect(width-400,height/3*2,400,width/2);
    push();
    translate(0,height/3*2-25)
    ellipse(ballX,ballY+h,50,50);
    pop();
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("Move the ball with left/right arrow key and jump the gap", width/2, height/4);
    
    
    keyPressed()
    falling();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  
  if(keyIsDown(RIGHT_ARROW)){
    
    ballX+=10;
    
  } else if(keyIsDown(LEFT_ARROW)){
    
    ballX-=10;
  }
}

function falling(){
  
  if(ballX>400 && ballX<width-400){
    ballY+=5;
  }
}
