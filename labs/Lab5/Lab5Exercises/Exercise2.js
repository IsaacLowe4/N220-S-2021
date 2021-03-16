let xPos= 0;
let yPos= 0;
let rectX = 100;
let rectY = 225;
let rectW = 300;
let rectH = 25;



let ballSpeed = 1;
let ballDirectionx = 1;
let ballDirectionY = 1;

function setup(){
    createCanvas(500,300)
    
}
function draw(){
    background(50);
    xPos = xPos + ballSpeed*ballDirectionx;
    yPos = yPos + ballSpeed*ballDirectionY; 
    rect(100, 225, 300, 55);
    circle(xPos,yPos,30);
    if(collideRect(xPos,yPos, 100, 225, 300, 55)){
        ballDirectionx = ballDirectionx*1
    }
    if(collideRect(xPos,yPos, 100, 225, 300, 55)){
        ballDirectionY= ballDirectionY*-1
    }
}



function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
    var colliding = false;
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
              return true;
        }
   }
   return false;
}