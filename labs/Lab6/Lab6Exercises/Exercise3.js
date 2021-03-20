let circles = [
    {x:200,y:300, s:50},
    {x:300,y:200, s:25},
    {x:400,y:100, s:12},
    {x:500,y:50, s:6}
];

function setup(){
    createCanvas(600, 600);
    background(50);
}

function draw(){
    
    for(i=0;i < circles.length; i++){
       let currentCircle = circles[i];
       circle(circles[i].y,circles[i].x,circles[i].s);
       currentCircle.y += 1;
       currentCircle.x += 1;
       currentCircle.s -= 1;
    }
}