let xPos = 0;
var mint = "#CBFFFA";
function setup() { 
    createCanvas(800, 600);

}
function draw() {
  background(mint);  
  xPos = xPos+5;
  if(xPos >= 800){
      xPos = 0; 
  }
  fill(160,10,100);
  circle(xPos,200,50);
  console.log(xPos);
}