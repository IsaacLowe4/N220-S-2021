let water= [0,0,0,0,0];
var yPos= 0
function setup(){
    createCanvas(400,400);
}

function draw(){
    
    background(50);  
    yPos = yPos+5;
    water.push(yPos);
    water.shift();
    fill(160,10,100);
    for(i=0;i<water.length;i++){
        circle(200,water[i],50);
    }
    console.log("yes");
}
