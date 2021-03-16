let theCircle = {
    x: 150,
    y: 200,
    size: 15
}

function setup(){
    createCanvas(400,400);
    theCircle.size += 1;
}

function draw(){
    theCircle.size += 1;
    circle(theCircle.x,theCircle.y,theCircle.size);
} 