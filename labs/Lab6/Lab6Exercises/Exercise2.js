let theCircle = {
    x: 0,
    y: 0,    
    size: 30,
    speed: 1,
    directionX: 1,
    directionY: 1
}

function setup(){
    createCanvas(500,300)
    
}
function draw(){
    background(50);
    theCircle.x = theCircle.x + theCircle.speed*theCircle.directionX;
    theCircle.y = theCircle.y + theCircle.speed*theCircle.directionY; 
    rect(100, 225, 300, 55);
    circle(theCircle.x , theCircle.y ,theCircle.size);
    if(collideRect(theCircle.x,theCircle.y, 100, 225, 300, 55)){
        theCircle.directionX = theCircle.directionX*1
    }
    if(collideRect(theCircle.x,theCircle.y, 100, 225, 300, 55)){
        theCircle.directionY = theCircle.directionY*-1
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