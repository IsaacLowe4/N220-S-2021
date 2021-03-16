let snakeHead = [0,0,0,0,0];
let snakePath = [0,0,0,0,0]
function setup(){
    createCanvas(400,300);
    
}

function draw(){
 
    background(50);
    
    snakeHead.push(mouseY);
    snakeHead.shift();
    snakePath.push(mouseX);
    snakePath.shift();
    for( var i = 0; i < snakePath.length; i++){
        circle( snakePath[i],snakeHead[i],50)
    }
    console.log(snakePath)
}