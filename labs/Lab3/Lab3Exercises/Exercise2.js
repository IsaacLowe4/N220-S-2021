function setup(){
    createCanvas(400,400)
}

function draw(){
  fill(255,0,0)
  stroke(255, 255, 255)
   for(let y= 0; y < 5; y++){ 
    for(var i = 0; i < y; i++){
        square(i*50,y*50,48);
    }
   }
}